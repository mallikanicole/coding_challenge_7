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
    let locationL={"USA":(5+(.5*weight)),"Canada":(10+(.7*weight))}
    let expeditedL={true:10,false:0}
    let totalcostt=locationL[location]+expeditedL[expedited]
    console.log(totalcostt)
}

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"


function calculateShippingCost(weight, location, expedited =false ){
    let weightedCost={"USA":.5*weight,"Canada":.7*weight};
    let locationCost={"USA":5,"Canada":10};
    let expeditedCost={true:10,false:0};
    let totalShippingCost=(weightedCost[weight]+locationCost[location]+expeditedCost[expedited]).toFixed(2);
    console.log(`Shipping Cost:$${totalShippingCost}`)
}

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"