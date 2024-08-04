/* eslint-disable no-undef */
function CalendarEditor() {
}

CalendarEditor.prototype.setup = function(calendarEl) {
   

    // });
    //$(".fc-datagrid-body tbody").disableSelection();

    // Add custom group header after rendering
    const tableHeader = calendarEl.querySelector('.fc-datagrid-header thead tr');
    const groupHeader = document.createElement('tr');
    $(groupHeader).css('height', '49px');

    // Create a group header cell that spans 3 columns
    const groupHeaderCell1 = document.createElement('th');
    groupHeaderCell1.setAttribute('colspan', '1');
    groupHeaderCell1.className = 'fc-col-group-header';
    groupHeaderCell1.innerText = '';
    const groupHeaderCell2 = document.createElement('th');
    groupHeaderCell2.setAttribute('colspan', '2');
    groupHeaderCell2.className = 'fc-col-group-header';
    groupHeaderCell2.innerText = 'Group Header';
    const groupHeaderCell3 = document.createElement('th');
    groupHeaderCell3.setAttribute('colspan', '1');
    groupHeaderCell3.className = 'fc-col-group-header';
    groupHeaderCell3.innerText = '';
    groupHeader.appendChild(groupHeaderCell1);
    groupHeader.appendChild(groupHeaderCell2);
    groupHeader.appendChild(groupHeaderCell3);

    // Insert the group header row before the column headers
    tableHeader.parentNode.insertBefore(groupHeader, tableHeader);
}