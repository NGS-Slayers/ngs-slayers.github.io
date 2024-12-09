// remove empty rows created by genTable
document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table');

    tables.forEach(function (table) {
            // Remove empty rows
            removeEmptyRows(table);
    })

    function removeEmptyRows(table) {
        var rows = table.querySelectorAll('tr');

        rows.forEach(function (row) {
            var isEmpty = Array.from(row.children).every(function (cell) {
                return cell.textContent.trim() === '';
            });

            if (isEmpty) {
                row.parentNode.removeChild(row);
            }
        });
    };
});