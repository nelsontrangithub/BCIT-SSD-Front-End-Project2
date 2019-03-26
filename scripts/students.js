var $table = $('#table');
var mydata =
    [
        {
            "first_name": "Alison",
            "last_name": "Accardo",
            "email": "aaccardo802@my.bcit.ca"
        },
        {
            "first_name": "Lai",
            "last_name": "Aigner",
            "email": "laigner578@my.bcit.ca"
        },
        {
            "first_name": "Monet",
            "last_name": "Barrette",
            "email": "mbarrette802@my.bcit.ca"
        },
        {
            "first_name": "Marissa",
            "last_name": "Barrow",
            "email": "mbarrow208@my.bcit.ca"
        },
        {
            "first_name": "Michael",
            "last_name": "Chou",
            "email": "cchou502@my.bcit.ca"
        },
        {
            "first_name": "Jacalyn",
            "last_name": "Christian",
            "email": "jchristian175@my.bcit.ca"
        },
        {
            "first_name": "Taren",
            "last_name": "Crowther",
            "email": "tcrowther216@my.bcit.ca"
        },
        {
            "first_name": "Walter",
            "last_name": "Heisenberg",
            "email": "wheisenberg@my.bcit.ca"
        },
        {
            "first_name": "Shira",
            "last_name": "Hyche",
            "email": "shyche702@my.bcit.ca"
        },
        {
            "first_name": "Flossie",
            "last_name": "Iser",
            "email": "fiser123@my.bcit.ca"
        },
        {
            "first_name": "Karpinder",
            "last_name": "Kaur",
            "email": "kkaur372@my.bcit.ca"
        },
        {
            "first_name": "Kayla",
            "last_name": "Kim",
            "email": "akim802@my.bcit.ca"
        },
        {
            "first_name": "Margot",
            "last_name": "Lawyer",
            "email": "mlawyer203@my.bcit.ca"
        },
        {
            "first_name": "Jessica",
            "last_name": "Lee",
            "email": "jlee785@my.bcit.ca"
        },
        {
            "first_name": "Phyliss",
            "last_name": "Mcswain",
            "email": "pmcwain@my.bcit.ca"
        },
        {
            "first_name": "Alonso",
            "last_name": "Olberding",
            "email": "aolberding182@my.bcit.ca"
        },
        {
            "first_name": "Trisha",
            "last_name": "Park",
            "email": "tpark302@my.bcit.ca"
        },
        {
            "first_name": "Melissa",
            "last_name": "Reira",
            "email": "mreira785@my.bcit.ca"
        },
        {
            "first_name": "Mathew",
            "last_name": "Sibley",
            "email": "msibley712@my.bcit.ca"
        },
        {
            "first_name": "Lourdes",
            "last_name": "Spataro",
            "email": "lspataro161@my.bcit.ca"
        }
    ];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
});
