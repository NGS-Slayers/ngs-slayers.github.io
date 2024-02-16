// Wrap every table element with a div of class "table-wrapper" if not already wrapped
document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table');

    tables.forEach(function (table) {
        // Check if the table is already wrapped
        if (!table.closest('.table-wrapper')) {
            var wrapper = document.createElement('div');
            wrapper.classList.add('table-wrapper');

            // Insert the wrapper before the table, and then move the table inside the wrapper
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
});