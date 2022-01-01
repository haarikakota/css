
$(function() {
    
    $("#spreadsheet").kendoSpreadsheet({
        columns: 5,
        sheets: [
            {
                columns: [
                    {
                        width: 150
                    },
                    {
                    width: 300
                    },
                    {
                    width: 200
                    },
                    {
                        width: 200
                    },
                    {
                        width: 200
                    } 
                ]
            }
        ]
    }).data('kendoSpreadsheet');
    $(".k-spreadsheet-sheets-bar").hide();
    $(".k-spreadsheet-action-bar").hide();
    $(".k-tabstrip-wrapper").hide();
    $(".k-spreadsheet-column-header").empty();
});