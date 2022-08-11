$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.hasChild').click(function () {
        $(this).next('.childMenu').slideToggle();
    })
    $('.navIcon').click(function () {
        $('.navigation').toggleClass('navigationClose')
        $('.dataContainer').toggleClass('dataContainerOpen')
    })
    $("#scrollTable").getNiceScroll().resize();
    $("#scrollTable").niceScroll({
        cursorcolor: "#333",
        cursorborder: "0px",
        cursorwidth: "8px",
        zindex: "9999"
    });
    $('#filterIcon').click(function () {
        $('#filterSec').slideToggle()
    });

    $('.date').datepicker();
    $('.tabs li a').click(function () {
        $('.tabs li a').removeClass('activeTab');
        $(this).addClass('activeTab');
        $('[data-destination]').hide();
        $(`[data-destination="${$(this).attr('data-target')}"]`).show();

    })
})