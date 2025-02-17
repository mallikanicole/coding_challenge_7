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

const calculateLoyaltyDiscount=(amount, years) => {
    let loyaltyDiscount=0;
    if ( years>=5) loyaltyDiscount= amount* 0.15;//discount for over 5 years=15%
    else if (5>years>=3) loyaltyDiscount= amount* 0.10;//discount for 3-5 years=10%
    else if ( years<3) loyaltyDiscount= amount* 0.05;//discount for under 3 years=5%
    console.log(`Discounted Price:$${(amount-loyaltyDiscount).toFixed(2)}`);//log discounted price
}//function to calculate loyalty discount

calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"


//Task 4  Parameters and Arguments 

function calculateShippingCost(weight, location, expedited = false){
    let locationCost={"USA":(5+(.5*weight)),"Canada":(10+(.7*weight))}//set location prices
    let expeditedCost={true:10,false:0};//set expedited shiping price
    let totalShippingCost=(locationCost[location]+expeditedCost[expedited]).toFixed(2);//calculate total shipping cost
    console.log(`Shipping Cost:$${totalShippingCost}`);//log costs
}//function to calculate shipping

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

//Task 5 Returning Values

function calculateLoanInterest(principal, rate, years){
    let loanInterest=(principal* rate* years).toFixed(2);//calculation for interest
    console.log(`TotalInterest:$${loanInterest}`);//log loan interests
};//create function to calculate loan interest
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

//Task 6 Higher-Order Functions

let transactions =[500, 1200, 3000, 800, 2200];//declare transactions
function filterHighValueTransactions(transactions, filterFunction){
    return transactions.filter(filterFunction);
}//create filter functiom
let highValueTransactions=filterHighValueTransactions(transactions,transaction=>transaction>1000);//filter high value transactions

console.log(`High Value Transactions:${highValueTransactions}`);//log high value transactions

// Expected output: [1200, 3000, 2200]



//Task 7 Closures

function createBudgetTracker(){
    let totalBudget=0;
    return function(budget){
        totalBudget+=budget;
        return `Current Balance-:$${totalBudget}`;//log current balance
    };//create function to track budget
};//track running balance
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

//Task 8 Recursion in Javascript

function calculateGrowth(years, revenue){
    if(years>10) return 0;
    return calculateGrowth*(revenue*.05)+revenue;
};
console.log(`Projected Revenue:$${calculateGrowth(8, 1000)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue:$${calculateGrowth(5, 5000)}`); // Expected output: "Projected Revenue: $6381.41"

//figure out how to write fnction revenue*.05+revenue=new revenue*.05+revenue=1102.5

