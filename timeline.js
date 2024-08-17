/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
$(document).ready(function () {

    $('#dateInput').datepicker({
        dateFormat: "yy-mm-dd",  // Format the date
            minDate: new Date(),    // Set the minimum date to today
            maxDate: "+1M +10D",    // Set the maximum date to one month and 10 days from today
            changeMonth: true,      // Allow month selection
            changeYear: true       // Allow year selection
    });
    var calendarEl = document.getElementById('calendar');
    var calendarMaster = new CalendarMaster(calendarEl);
    calendarMaster.initCalendar();    
    calendarMaster.initFilter();
    calendarMaster.setupHeader();
    // Custom code to enable dragging the timeline
    var isDragging = false;
    var startX, startY, scrollLeft, scrollTop;

    var $scroller = $(calendarEl).find('.fc-scroller-liquid-absolute').eq(1);

    $scroller.on('mousedown', function (e) {
        // Check if the mouse is over an event element
        if ($(e.target).closest('.fc-event').length) {
            return;
        }
        isDragging = true;
        // $scroller.addClass('active');
        startX = e.pageX - $scroller.offset().left;
        startY = e.pageY - $scroller.offset().top;
        scrollLeft = $scroller.scrollLeft();
        scrollTop = $scroller.scrollTop();
    });

    $(document).on('mouseup', function () {
        isDragging = false;
        //$scroller.removeClass('active');
    });

    $scroller.on('mouseleave', function () {
        isDragging = false;
        //$scroller.removeClass('active');
    });

    $scroller.on('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - $scroller.offset().left;
        var y = e.pageY - $scroller.offset().top;
        var walkX = (x - startX) * 3; // Adjust scroll speed for horizontal scrolling
        var walkY = (y - startY) * 3; // Adjust scroll speed for vertical scrolling
        $scroller.scrollLeft(scrollLeft - walkX);
        $scroller.scrollTop(scrollTop - walkY);
    });

    $('#gotoDate').on('click', function () {
        scrollToSpecificDate(new Date());
    })
    
    $('#bindCollapse').on('click', function () {
        calendarMaster.setupCollapseFunction();
    })
    
});
