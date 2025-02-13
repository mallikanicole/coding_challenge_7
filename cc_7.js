//Task 1 Function Declaration

function calculateInvoice(subtotal,taxRate,discount){
    return (subtotal+(subtotal*taxRate))-discount
};//create function to calculate invoice

console.log (`Total Invoice:$${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"
//!!!!!!!!!!NEED TO FIGURE OUT HOW TO ADD .00 TO PRICE

//Task 2