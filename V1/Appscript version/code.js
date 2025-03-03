function doGet(e) {
    Logger.log(e.parameter);
    return HtmlService.createHtmlOutputFromFile("index.html")
  }
  
  function getData() {
    return convertOrgData();
  }
  
  function convertOrgData() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Org Chart Inputs");
    var lastRow = sheet.getLastRow();
    // Get all data starting at row 2 (skipping headers) in columns A to I.
    var rawData = sheet.getRange("A2:I" + lastRow).getValues();
  
    var data = rawData.filter(function(row) {
      return row[0].toString().trim() !== "";
    });
  
    // Map each row to an object. Adjust the conversion as needed (e.g. empty cells become null).
    var orgData = data.map(function(row) {
      return {
        name: row[0],
        id: row[1],
        parent: (row[2] == "" ? null : row[2]),
        description: row[3],
        subnoteA: row[4],
        subnoteB: row[5],
        tooltip: row[6],
        color: row[7],
        thumbnail: (row[8] == "" ? null : row[8]),
      };
    });
  
    // Output the resulting array (for example, log it)
    Logger.log(JSON.stringify(orgData, null, 2));
  
    return orgData;
  }