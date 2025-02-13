//Task 1 Function Declaration

function calculateInvoice(subtotal,taxRate,discount){
    return (subtotal+(subtotal*taxRate))-discount
};//create function to calculate invoice

console.log (`Total Invoice:$${calculateInvoice(100, 0.08, 5).toFixed(2)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`); // Expected output: "Total Invoice: $530.00"


//Task 2 Function Expression

function calculateHourlyWage(salary, hoursPerWeek){
    return salary/(hoursPerWeek*52)
};//create function to calculate hourly wage

console.log(`Hourly Wage:$${calculateHourlyWage(52000, 40).toFixed(2)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage:$${calculateHourlyWage(75000, 35).toFixed(2)}`); // Expected output: "Hourly Wage: $41.21"

//Task 3 Arrow Function


