const makeCheeseSandwich = () => {
    "slice of bread"
    'slice of cheese'
    'slice of bread'
}

const makeSandwichWith = (topping) => {
    console.log("Make a sandwich with " + topping + ", please.");
}
makeSandwichWith("cheese");



//Hier express je een functie met parameter
const makeSandwich = (topping) => {
    console.log("There you go, a sandwich with " + topping + "!");
}
//Hieronder call je de functie met een argument
makeSandwich("cheese");
makeSandwich("salami");




const calculatedDiscountPrice = (totalAmount, discount) => {
    return totalAmount - discount;
}
console.log(Math.round(calculatedDiscountPrice(138, 24)));



const calculatedDiscount = (totalAmount, discount) => {
    if (totalAmount > 25) {
        return totalAmount - discount;
    } else {
        return totalAmount;
    }

}
console.log(Math.round(calculatedDiscount(24.9, 8)));