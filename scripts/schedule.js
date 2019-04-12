$( document ).ready(function() {

    $.ajax({
        type: "GET",
        url: 'https://api.jsonbin.io/b/5cad1c3b85438b0272f33a7c/7',
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
        let currentMonthNum = -1;
        let currentMonthTxt = null;
        let grid = null;
        let calendar = $(".schedule-container");

        for (let day of data) {
            let today = new Date();
            today.setHours(0, 0, 0, 0);
            let date = new Date(day.date);


            let monthNum = date.getMonth();
            if(monthNum != currentMonthNum) {
                currentMonthNum = monthNum;
                currentMonthTxt = monthNames[monthNum];

                let currentMonthElement = $('<div>', {class: currentMonthTxt + " month"});
                let currentMonthHeader = $('<h2>', {text: currentMonthTxt});
                let inputDropdown = $('<input>', {type: 'checkbox', id: currentMonthTxt});

                if(today.getMonth() == currentMonthNum) {
                    currentMonthElement.addClass('current');
                    inputDropdown = $('<input>', {type: 'checkbox', id: currentMonthTxt, checked: true});
                }

                let daysOfWeekElement = $('<ul>', {class: 'doW-container'});
                for (let names of dayNames)
                {
                    weekName = $('<li>', {class: 'doW-label', text: names});
                    daysOfWeekElement.append(weekName);
                }

                grid = $('<div>', {class: 'grid'});

                currentMonthElement.append(currentMonthElement, currentMonthHeader, inputDropdown, daysOfWeekElement, grid);

                for (let i = 1; i < date.getDay(); i++) {
                    $('<div>', {class: 'grid-placeholder'}).appendTo(grid);
                }

                calendar.append(currentMonthElement);
            
            }

            let dayItem = $('<div>', {class: 'day'});
            let dateString = currentMonthTxt + ' ' + date.getDate() + ', ' + date.getFullYear();
            let dayOfWeek = dayNamesFull[date.getDay()-1];
            let dayOfWeekSpan = $('<p>', {class: 'dow', text: dayOfWeek});
            let dateSpan = $('<h4>', {class: 'date', text: dateString});
            let courseSpan = $('<p>', {class: 'course', text: day.course});
            let instructorSpan = $('<p>', {class: 'instructor', text: day.instructor });
            let notes = $('<p>', {class: 'notes', text: day.notes});

            dayItem.append(dayOfWeekSpan, dateSpan, courseSpan, notes, instructorSpan);

            grid.append(dayItem);

            if (date.getTime() == today.getTime()) {
                dayItem.addClass('today');
            }

        }


    }

    $("#today-button").click(function() {

        $('.current').find("input[type='checkbox']").prop('checked', true);

        $([document.documentElement, document.body]).animate({
            scrollTop: $(".today").offset().top
        }, 2000);
    });

    $("#toggle-button").click(function() {

        if ($("#toggle-check").is(":checked") == false) {
            $("#toggle-check").prop("checked", true);
            $('.month').each(function(index) {
                $(this).find("input[type='checkbox']").prop('checked', true)
            })
        }
        else {
            $("#toggle-check").prop("checked", false);
            $('.month').each(function(index) {
                $(this).find("input[type='checkbox']").prop('checked', false)
            })
        }

    });

    let toggle = false;
    $("#view-button").click(function(){
        toggle = !toggle;
        if (toggle) {
            $('.schedule-container').addClass('list-view');
            $(this).text("# Grid View");
        }
        else {
            $('.schedule-container').removeClass('list-view');
            $(this).text(String.fromCharCode(9776) + " List View");
        }
    });


    $(document).on("click", 'h2', function(){
        let month = $(this).text();
        if ($("#"+month).is(':checked'))
        {
            $("#"+month).prop('checked', false);
        }
        else {
            $("#"+month).prop('checked', true);
        }
    });

});