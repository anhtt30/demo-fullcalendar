/* eslint-disable no-undef */
function CalendarMaster(calendarEl) {
    this.calendarEl = calendarEl;
    this.calendar; // FullCalendar instance
    this.initResources; // hold current resource of calendar
    this.permission
    this.scrollDate
    this.initialScrollTop;
    this.initialScrollLeft;
}

CalendarMaster.prototype.initCalendar = function() {
    let self = this;
    let test1 = self.test;
    var calendarEditor = new CalendarEditor();
    self.calendar = new FullCalendar.Calendar(self.calendarEl, {
        now: '2024-07-15',
        nowIndicator: true,
        initialDate: '2024-06-01',
        editable: true,
        aspectRatio: 1.8,
        //scrollTime: '00:00',
        headerToolbar: {
            left: 'today prev,next',
            center: 'title',
            right: 'resourceTimelineDay,resourceTimelineThreeDays,timeGridWeek,dayGridMonth'
        },
        initialView: 'resourceTimeline',
        slotLabelFormat: [
            { month: 'numeric', year: 'numeric' },
            { day: 'numeric' },
            { weekday: 'short' },
            { weekday: 'short' },
        ],
        slotLabelInterval: { days: 1 }, // ヘッダの日付を表示する単位
        // スロット単位設定
        slotDuration: { days: 1 },
        // 開始
        // 期間
        duration: { days: 92 },
        scrollTimeReset: false,
        dateIncrement: { months: 1 },
        views: {
            resourceTimelineThreeDays: {
                type: 'resourceTimeline',
                duration: { days: 3 },
                buttonText: '3 days'
            }
        },
        resourceOrder: 'sortOrder',
        resourceAreaWidth: '500px',

        resources: [
            { id: '1', title: 'Auditorium A', occupancy: 40, subRoom: 'A1', sortOrder: 0 },
            { id: 'a', title: 'Auditorium A', occupancy: 40, subRoom: 'A1', sortOrder: 1 },

            { id: 'b', title: 'Auditorium B', occupancy: 40, subRoom: 'B1', eventColor: 'green', parentId: 'a', sortOrder: 2 },
            { id: 'c', title: 'Auditorium C', occupancy: 40, subRoom: 'C1', eventColor: 'orange', parentId: 'a', sortOrder: 3 },
            { id: 'd', title: 'Auditorium D', occupancy: 40, subRoom: 'D1', parentId: 'a', sortOrder: 4 },
            { id: 'd1', title: 'Room D1', occupancy: 10, subRoom: 'D1-A', parentId: 'd2', sortOrder: 5 },


            { id: 'd2', title: 'Room D2', occupancy: 10, subRoom: 'D1-B', sortOrder: 6 },
            { id: 'e', title: 'Auditorium E', occupancy: 40, subRoom: 'E1', parentId: 'd2', sortOrder: 7 },
            { id: 'f', title: 'Auditorium F', occupancy: 40, subRoom: 'F1', eventColor: 'red', parentId: 'd2', sortOrder: 8 },
            { id: 'g', title: 'Auditorium G', occupancy: 40, subRoom: 'G1', parentId: 'd2', sortOrder: 9 },
            { id: 'h', title: 'Auditorium H', occupancy: 40, subRoom: 'H1', parentId: 'd2', sortOrder: 10 },
            { id: 'i', title: 'Auditorium I', occupancy: 40, subRoom: 'I1', parentId: 'd2', sortOrder: 11 },
            { id: 'j', title: 'Auditorium J', occupancy: 40, subRoom: 'J1', parentId: 'd2', sortOrder: 12 },
            { id: 'k', title: 'Auditorium K', occupancy: 40, subRoom: 'K1', parentId: 'd2', sortOrder: 13 },
            { id: 'l', title: 'Auditorium L', occupancy: 40, subRoom: 'L1', parentId: 'd2', sortOrder: 14 },
            { id: 'm', title: 'Auditorium M', occupancy: 40, subRoom: 'M1', parentId: 'd2', sortOrder: 15 },

            { id: 'n', title: 'Auditorium N', occupancy: 40, subRoom: 'N1', sortOrder: 16 },
            { id: 'o', title: 'Auditorium O', occupancy: 40, subRoom: 'O1', parentId: 'n', sortOrder: 17 },
            { id: 'p', title: 'Auditorium P', occupancy: 40, subRoom: 'P1', parentId: 'n', sortOrder: 18 },
            { id: 'q', title: 'Auditorium Q', occupancy: 40, subRoom: 'Q1', parentId: 'n', sortOrder: 19 },
            { id: 'r', title: 'Auditorium R', occupancy: 40, subRoom: 'R1', parentId: 'n', sortOrder: 20 },
            { id: 's', title: 'Auditorium S', occupancy: 40, subRoom: 'S1', parentId: 'n', sortOrder: 21 },
            { id: 't', title: 'Auditorium T', occupancy: 40, subRoom: 'T1', parentId: 'n', sortOrder: 22 },
            { id: 'u', title: 'Auditorium U', occupancy: 40, subRoom: 'U1', parentId: 'n', sortOrder: 23 },
            { id: 'v', title: 'Auditorium V', occupancy: 40, subRoom: 'V1', parentId: 'n', sortOrder: 24 },
            { id: 'w', title: 'Auditorium W', occupancy: 40, subRoom: 'W1', parentId: 'n', sortOrder: 25 },
            { id: 'x', title: 'Auditorium X', occupancy: 40, subRoom: 'X1', parentId: 'n', sortOrder: 26 },
            { id: 'y', title: 'Auditorium Y', occupancy: 40, subRoom: 'Y1', parentId: 'n', sortOrder: 27 },
            { id: 'z', title: 'Auditorium Z', occupancy: 40, subRoom: 'Z1', parentId: 'n', sortOrder: 28 }
        ],

        resourceAreaColumns: [
            {
                headerContent: "header 1",
                field: "title",
                width: "200px"
            },
            {
                headerContent: "header 2",
                field: "occupancy",
                width: "100px"
            },
            {
                headerContent: "header 3",
                field: "subRoom",
                width: "100px"
            },
            {
                headerContent: "header 4",
                field: "sortOrder",
                width: "100px"
            }
        ],

        events: [
            { id: '1', resourceId: 'b', start: '2024-06-04', end: '2024-06-06', title: 'event 1' }
            // { id: '2', resourceId: 'c', start: '2023-01-07T05:00:00', end: '2023-01-07T22:00:00', title: 'event 2' },
            // { id: '3', resourceId: 'd', start: '2023-01-06', end: '2023-01-08', title: 'event 3' },
            // { id: '4', resourceId: 'e', start: '2023-01-07T03:00:00', end: '2023-01-07T08:00:00', title: 'event 4' },
            // { id: '5', resourceId: 'f', start: '2023-01-07T00:30:00', end: '2023-01-07T02:30:00', title: 'event 5' }
        ],
        eventResize: function (arg) {

            // if (arg.event.startStr == '2024-06-01') {
            //     self.calendar.gotoDate('2024-05-01');
            //     self.calendar.setOption('duration', { months: self.calendar.getOption('duration').months + 1 });
            //     console.log(self.calendar.view.activeEnd);
            //     console.log(self.calendar.view.activeStart);
            //     console.log(self.calendar.getOption('duration'));
            //     //scrollToSpecificDate(new Date());
            // }
            self.autoAdjustCalendarRange(arg);
        },
        eventChange: function (arg) {
        },
        eventContent: function (arg) {
            let content = document.createElement('div');
            content.innerHTML = arg.event.title;
            content.classList = 'fc-event-title fc-sticky'
            $(content).css('padding', '0px 90px'); // Add padding to the title
            $(content).css('color', 'black'); // Add padding to the title

            return {domNodes:[ content]};
        },
        eventClick: function (arg) {
            arg.jsEvent.stopPropagation();
        },
        datesSet: function () {
            console.log('test');
            $(self.calendarEl).find('.fc-timeline-body').closest('.fc-scroller-liquid-absolute').scrollTop(self.initialScrollTop);
            $(self.calendarEl).find('.fc-timeline-body').closest('.fc-scroller-liquid-absolute').scrollLeft(self.initialScrollLeft); // Restore the initial scroll position
            // if(self.scrollDate != undefined) {
            //   scrollToSpecificDate(self.scrollDate, 'start');
            // }
            // calendar.setOption('duration', {month:7});
            //calendar.gotoDate('2024-08-01');
            //scrollToSpecificDate('2024-08-01');
        },
        eventAllow: function (dropInfo, draggedEvent) {
            // Allow resizing beyond the original duration
            return true;
        },
        slotLabelContent : function(arg) {
            console.log(arg);
            return arg.text;
        },
        viewDidMount: function (arg) {
            self.setupSortable();
            // Select the divider element
            var $element = $(".fc-datagrid-body").closest('td');
            // Check if the element exists
            if ($element.length) {
                const observer = new ResizeObserver(function (entries) {
                    entries.forEach(function (entry) {
                        console.log('Element resized:', entry.contentRect.width);
                        $('#node').css('width', entry.contentRect.width);
                        // Handle resize event here
                    });
                });

                observer.observe($element[0]); // Observe the first matched element
            }
            //setupCollapseFunction();

        }

        //  eventContent: function (arg) {
        //  resourceAreaHeaderContent: function (arg) {
        //   return "room";
        //  },

    });

    self.calendar.render();
    self.initResources = self.calendar.getResources();
    // $(document).on('click', function() {
    //     console.log('test');
    // })

}

CalendarMaster.prototype.setupCollapseFunction = function () {
    $('.fc-icon-minus-square, .fc-icon-plus-square').off('click'); // Remove existing click event handlers
    $('.fc-icon-minus-square, .fc-icon-plus-square').on('click', function (event) {
        event.stopPropagation(); // Prevent event bubbling
        if ($(this).hasClass('fc-icon-minus-square')) {
            let section = $(this).closest('tr').attr('data-section');
            $(this).closest('tr').nextAll().each(function () {
                if ($(this).attr('data-section') == section) {
                    //$(this).addClass('hide');
                    // $(this).toggle("slow");
                    // $(this).find('td').slideToggle("slow");
                    $(this).slideUp("fast");
                    $(this).find("td").contents().slideUp("fast");
                    var resourceId = $(this).children().first().attr('data-resource-id'); // Get the resource ID
                    $(`.fc-timeline-body td[data-resource-id="${resourceId}"]`).closest('tr').slideUp('fast'); // Hide the corresponding row in the timeline view
                    $(`.fc-timeline-body td[data-resource-id="${resourceId}"]`).contents().slideUp('fast');
                }
            })
        }

        if( $(this).hasClass('fc-icon-plus-square')) {
            let section = $(this).closest('tr').attr('data-section');
            $(this).closest('tr').nextAll().each(function () {
                if ($(this).attr('data-section') == section) {
                    // $(this).removeClass('hide');
                    // $(this).toggle("slow");
                    $(this).slideDown("fast");
                    $(this).find("td").contents().slideDown("fast");
                    var resourceId = $(this).children().first().attr('data-resource-id'); // Get the resource ID
                    $(`.fc-timeline-body td[data-resource-id="${resourceId}"]`).closest('tr').slideDown('fast'); // Hide the corresponding row in the timeline view
                    $(`.fc-timeline-body td[data-resource-id="${resourceId}"]`).contents().slideDown('fast');
                }
            })
        }

        $(this).toggleClass('fc-icon-minus-square');
        $(this).toggleClass('fc-icon-plus-square');
    })
}

CalendarMaster.prototype.initFilter = function() {
    var self = this;
    
    $("#resourceFilter").on('keyup', function (event) {
        if (event.keyCode == 13) {
            var filterValue = this.value.toLowerCase();

            // Filter resources
            var filteredResources = self.initResources.filter(function (resource) {
                return resource.title.toLowerCase().includes(filterValue);
            });

            // Set filtered resources to the calendar
            console.log(filteredResources);
            // calendar.refetchResources = function () {
            //   return filteredResources;
            // };

            // // Re-render the calendar with the filtered resources
            // calendar.render();

            // Update the calendar with the filtered resources
            self.calendar.batchRendering(function () {
                self.calendar.getResources().forEach(function (resource) {
                    resource.remove();
                });
                filteredResources.forEach(function (resource, index) {
                    // when resource is child, add it's parent to calendar
                    if (resource._resource.parentId != null && resource._resource.parentId != '') {
                        // if parent not exist in calendar, add it
                        if (self.calendar.getResourceById(resource._resource.parentId) == null) {
                            self.calendar.addResource(self.initResources.filter(function (r) {
                                return r.id == resource._resource.parentId
                            })[0]);
                        }
                    } else {
                        // when resource is parent, add child resources to calendar
                        self.initResources.filter(function (r) {
                            return r._resource.parentId == resource.id
                        }).forEach(function (resource, index) {
                            // if child not exist in calendar, add it
                            if (self.calendar.getResourceById(resource.id) == null) {
                                self.calendar.addResource(resource);
                            }
                        })
                    }
                    self.calendar.addResource(resource);
                });
            });
            console.log(self.initResources);
        }
    });
}

CalendarMaster.prototype.setupSortable = function() {
    let self = this;
     // this.calendar = calendar;
     
     const table = $('.fc-datagrid-body tbody').first();
     const rows = table.find('tr');
 
     Array.from(rows).slice(1, 5).forEach(row => {
         $(row).attr('data-section', '1');
     });
 
     Array.from(rows).slice(5, 15).forEach(row => {
         $(row).attr('data-section', '2');
     });
     let sortableClasses = ['.sortable-row', '.sortable-row-1'];
     // sortableClasses.forEach(sortableClass => {
     let originalItem;
     let draggedGroup;
     let draggedItems;
     $(".fc-datagrid-body tbody").sortable({
 
         // items: 'tr:not(:first-child)',
         items: 'tr',
         dropOnEmpty: false,
         //revert: true,
 
         placeholder: 'ui-state-highlight',
 
         // helper: 'original',
         //     // Store the group of rows to drag
         //     // draggedGroup = ui.data('group');
         //     // draggedItems = ui.closest('tbody').find(`tr[data-group="${draggedGroup}"]`);
         //     draggedGroup = ui.data('section');
 
 
         //     draggedItems = ui.closest('tbody').find(`tr[data-section="${draggedGroup}"]`);
 
         //     // Create a custom helper
         //     const helper = $('<div><ul></ul></div>');
         //     const tbody = helper.find('ul');
         //     // draggedItems.clone().appendTo(helper);
         //     // Adjust width of the helper columns to match the original table
         //     draggedItems.each(function (index, element) {
         //       const originalTds = $(element).children().eq(0);
         //       originalTds.each(function(index, ele) {
         //         $('<li>').append($(ele).text()).appendTo(tbody);
         //       });
         //       // const clonedTds = tbody.children().eq(index).children();
         //       // clonedTds.each(function (tdIndex, clonedTd) {
         //       //   $(clonedTd).width($(originalTds[tdIndex]).width());
         //       // });
         //     });
 
 
         //     return helper;
         //   },
 
         helper: function (e, tr) {
             //     draggedGroup = tr.data('section');
             //     draggedItems = tr.closest('tbody').find(`tr[data-section="${draggedGroup}"]`);
 
             //     var $originals = tr.children();
             //     var $helper = tr.clone();
             //     $.each(draggedItems, function(index, item) {
             //       var $helperCell = $(this).clone();
             //       $helperCell.children().each(function(index) {
             //           $(this).width($originals.eq(index).width());
             //       });
             //       $helper.append($helperCell);
             //     })
             //     // $helper.append();
             //     // $helper.children().each(function(index) {
             //     //     // Set helper cell sizes to match the original sizes
             //     //     $(this).width($originals.eq(index).width());
             //     // });
             return tr.html();
         },
 
         start: function (G, ui) {
             draggedGroup = ui.item.data('section');
             draggedItems = ui.item.closest('tbody').find(`tr[data-section="${draggedGroup}"]`);
             console.log(draggedItems);
             //console.log(draggedItems);
             //draggedItems.addClass('dragging');
             var placeholder = ui.placeholder;
 
             placeholder.empty();
             placeholder.append(draggedItems);
 
             console.log($(placeholder)[0].childNodes)
             $.each($(placeholder)[0].childNodes, function (index, value) {
                 $(value).removeAttr('style');
                 console.log($(draggedItems).eq(index));
                 //  $(value).children().each(function(index) {
                 //     // Set helper cell sizes to match the original sizes
                 //     $(this).width($(draggedItems).eq(index).width());
                 //  });
             })
 
 
             ui.item.data('originalSection', ui.item.data('section'));
             ui.item.data('originalIndex', ui.item.index());
             // Hide the dragged rows initially
             //draggedItems.css('visibility', 'hidden');
         },
 
         sort: function (event, ui) {
             // let originalSection = ui.item.data('section');
             // let newSection = ui.placeholder.prev().data('section') || ui.placeholder.next().data('section');
 
             // if (!newSection) {
             //   newSection = ui.item.data('section');
             // }
 
             // if (originalSection !== newSection) {
             //   ui.placeholder.addClass('disabled');
             // } else {
             //console.log(ui.helper.html());
             // //draggedItems.css('visibility', 'visible');
             // ui.placeholder.html(ui.item.html());
             // ui.placeholder.removeClass('disabled');
             // // Show the dragged rows while sorting
             // ui.placeholder.html(ui.helper.html());
             // var $placeholder = ui.placeholder;
             // $placeholder.css({
             //     visibility: 'visible',
             //     height: ui.helper.outerHeight()
             // });
             // $placeholder.children().each(function(index) {
             //     $(this).width(ui.helper.children().eq(index).width());
             // });
 
             // }
         },
 
         stop: function (event, ui) {
             // After drag stop, enforce section rules
             let originalSection = ui.item.data('section');
             let originalIndex = ui.item.data('originalIndex');
             let newSection = ui.item.prev().data('section') || ui.item.next().data('section');
 
             if (!newSection) {
                 newSection = ui.item.data('section');
             }
 
             if (originalSection !== newSection) {
                 // Revert to the original position if moved to a different section
                 let originalItem = $('.fc-datagrid-body tr').eq(originalIndex);
                 if (originalIndex > ui.item.index()) {
                     let currentItem = ui.item.detach();
                     originalItem.after(currentItem); // Move the item back to its original position
                 } else if (originalIndex < ui.item.index()) {
                     let currentItem = ui.item.detach();
                     originalItem.before(currentItem); // Move the item back to its original position
                 }
             } else {
                 //var sortedIDs = $(this).sortable("toArray", { attribute: "data-resource-id" });
                 var sortedIDs = $(this).children('tr').map(function () {
                     return $(this).find('td[data-resource-id]').data('resource-id');
                 }).get();
                 // Update resource order in FullCalendar
                 var sortedResources = sortedIDs.map(function (id) {
                     return self.calendar.getResourceById(id);
                 });
                 sortedResources.forEach(function (resource, index) {
                     resource.setExtendedProp('sortOrder', index);
                 });
                 //update resource
                 //calendar.setOption('resources', sortedResources);
             }
             // Manually trigger a re-render of the resources
             // calendar.render();
         }
 
     });
}

CalendarMaster.prototype.setupHeader = function () {
    var self = this;
    $('.fc-datagrid-header').css('width', '400px');
    $('.fc-datagrid-header').css('max-width', '400px');
    $('.fc-datagrid-body').css('width', '400px');
    $('.fc-datagrid-body').css('max-width', '400px');

    $('.fc-datagrid-header thead tr').clone().insertBefore($('.fc-datagrid-header thead tr'))
    $('.fc-datagrid-header thead tr th .fc-datagrid-cell-frame').css('height', '49px');
    $('.fc-datagrid-header thead tr').eq(0).find('th').eq(1).remove();
    $('.fc-datagrid-header thead tr').eq(0).find('th').eq(1).remove();
    $('.fc-datagrid-header thead tr').eq(0).find('th').eq(1).remove();
    $('.fc-datagrid-header thead tr').eq(0).find('th').eq(0).attr('colspan',4);
    let $menuHeader = $('.fc-datagrid-header thead tr').eq(0).find('th').eq(0).find('.fc-datagrid-cell-frame');
    $menuHeader.html('');
    $menuHeader.append('<textarea id="node" style="width:500px"></textarea>');
   

}

CalendarMaster.prototype.autoAdjustCalendarRange = function(arg) {
    var self = this;
    var events = self.calendar.getEvents();
    var minimizeStartDate = events[0].start;
    var maxmizeEndDate = events[0].end;
    $.each(events, function (index, value) {
        if (value.start < minimizeStartDate) minimizeStartDate = value.start;
        if (value.end > maxmizeEndDate) maxmizeEndDate = value.end;
    });
    self.initialScrollTop = $(self.calendarEl).find('.fc-timeline-body').closest('.fc-scroller-liquid-absolute').scrollTop(); // Store the initial scroll position
    self.initialScrollLeft = $(self.calendarEl).find('.fc-timeline-body').closest('.fc-scroller-liquid-absolute').scrollLeft(); // Store the initial scroll position

    var currentStartDate = new Date(self.calendar.view.activeStart);
    if (arg.event.start.getTime() - (1000 * 60 * 60 * 24 * 5) < currentStartDate.getTime()) {
        var newStartDate = new Date(new Date(arg.event.start - (1000 * 60 * 60 * 24 * 5)).format().substring(0, 8) + '01');
        newStartDate.setHours(0,0,0,0);
        self.calendar.batchRendering(function () {
            self.calendar.gotoDate(newStartDate);
            self.calendar.setOption('duration', { days: self.calendar.getOption('duration').days + newStartDate.distanceInDays(currentStartDate) + 1 });
            self.initialScrollLeft += newStartDate.distanceInDays(currentStartDate) * 40; // Adjust the scroll position based on the date difference
        })
        self.scrollDate = arg.event.start;

    } else if (minimizeStartDate.getTime() == arg.event.start.getTime()) {
        var newStartDate = new Date(new Date(arg.event.start - (1000 * 60 * 60 * 24 * 5)).format().substring(0, 8) + '01');
        newStartDate.setHours(0,0,0,0);
        if (arg.event.start.getTime() - (1000 * 60 * 60 * 24 * 5) >= newStartDate.getTime()) {
            if (newStartDate.getTime() != currentStartDate.getTime()) {
                self.calendar.batchRendering(function () {
                    self.calendar.gotoDate(newStartDate); 
                    self.calendar.setOption('duration', { days: self.calendar.getOption('duration').days - currentStartDate.distanceInDays(newStartDate) });
                    self.initialScrollLeft -= currentStartDate.distanceInDays(newStartDate) * 40;
                })
                self.scrollDate = newStartDate;
            }
        }
    }

    var currentEndDate = new Date(self.calendar.view.activeEnd);
    if (arg.event.end.getTime() + (1000 * 60 * 60 * 24 * 5) > (new Date(currentEndDate.getFullYear(), currentEndDate.getMonth() - 1, 1).getTime())) {
        var newEndDate = new Date(new Date(arg.event.end.getTime() + (1000 * 60 * 60 * 24 * 5)).getFullYear(), new Date(arg.event.end.getTime() + (1000 * 60 * 60 * 24 * 5)).getMonth() + 2, 1);
        newEndDate.setHours(0,0,0,0);
        self.calendar.batchRendering(function () {
            self.calendar.setOption('duration', { days: self.calendar.getOption('duration').days + currentEndDate.distanceInDays(newEndDate)});
        })
    } else if (maxmizeEndDate.getTime() == arg.event.end.getTime()) {
        var newEndDate = new Date(new Date(arg.event.end.getTime() + (1000 * 60 * 60 * 24 * 5)).getFullYear(), new Date(arg.event.end.getTime() + (1000 * 60 * 60 * 24 * 5)).getMonth() + 2, 1);
        newEndDate.setHours(0,0,0,0);
        if (newEndDate.getTime() < currentEndDate.getTime()) {
            self.calendar.setOption('duration', { days: self.calendar.getOption('duration').days - newEndDate.distanceInDays(currentEndDate) });
        }
    }
} 

Date.prototype.distanceInDays = function (date) {
    var diff = date.getTime() - this.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

Date.prototype.format = function () {
    var d = this,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function firstDayInPreviousMonth(yourDate) {
    return new Date(yourDate.getFullYear(), yourDate.getMonth() - 1, 1);
}

function lastDayInNextMonth(yourDate) {
    return new Date(yourDate.getFullYear(), yourDate.getMonth() + 2, 0);
}


function scrollToSpecificDate(date) {
    //var date = new Date();
    // date.format('yyyy-MM-dd')
    var timeGrid = $(`td .fc-timeline-slot[data-date="${date.format()}"]`)[0];

    console.log(timeGrid);
    timeGrid.scrollIntoView({ inline: "start", block: "nearest" });
    // var startTime = calendar.view.activeStart;
    // var endTime = calendar.view.activeEnd;
    // var totalDuration = endTime - startTime;
    // var targetDuration = date - startTime;
}

