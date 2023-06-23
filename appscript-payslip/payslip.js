function paySlipSender() {
var spreadsheet = SpreadsheetApp.getActive().getSheetByName('List');
var dataRange = spreadsheet.getRange("A2:D4").getValues();
for(var i=0; i < dataRange.length; i++){
var employeeData = dataRange[i];
var employeeName = employeeData[1];
var salary = employeeData[2];
var email = employeeData[3];
var payslipMessageContent = payslipMessage(employeeName, salary);
// MailApp.sendEmail(email, 'Payslip', payslipMessageContent);


var statusCell = spreadsheet.getRange("E" + (i + 2));
statusCell.setValue('Success');
}
}


function payslipMessage(employeeName, salary){
var message = "Hi " + employeeName + "\n";
message += "Your salary for the month of May has been deposited!\n";
message +=" Payble: " + salary + "\n";
message += "Thanks";
return message
}
