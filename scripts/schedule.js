$( document ).ready(function() {
    $.ajax({
        type: "GET",
        url: 'https://api.jsonbin.io/b/5cad1c3b85438b0272f33a7c/3',
        dataType: "json",
        beforeSend: function(xhr) { 
            xhr.setRequestHeader('secret-key', '$2a$10$k1OTMaU6c3s.dmz1BJTc9.YsTXkdEVObycDgxehEUA11QtpSAj6dS')
            $('#loader').show(); //source: https://stackoverflow.com/questions/1964839/how-can-i-create-a-please-wait-loading-animation-using-jquery
        },
        complete: function() {$('#loader').hide(); },
        success: function (data) {
            console.log(data);
            buildCalendar(data);
          }
    });

    function buildCalendar(data) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        const dayNamesFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        for (let day of data) {
            let date = new Date(day.date);
            let currentMonthNum = -1;
            let currentMonthTxt = null;
            let currentMonthNode = null;
            let scheduleGridNode = null;

            calendar = $(".schedule-container");

            let monthNum = date.getMonth();
            if(monthNum != currentMonthNum) {
                currentMonthNum = monthNum;
                currentMonthTxt = monthNames[monthNum];

                currentMonthElement = $('<div>', {class: currentMonthTxt + " month"});
                currentMonthHeader = $('<h2>', {text: currentMonthTxt});

                calendar.append(currentMonthElement, currentMonthHeader);

                let daysOfWeekElement = $('<ul>');
                for (let names of dayNames)
                {
                    weekName = $('<li>', {class: 'doW-label', text: names});
                    daysOfWeekElement.append(weekName);
                }

            
            }

        }


    }
});