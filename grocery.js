//create a class
var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(n, q, c, p) {
        this.name = n;
        this.quantity = q;
        this.category = c;
        this.price = p;
    }
    return Grocery;
}());
//add grocery items to an array milk,bread,eggs with quantity, category and price 
var list_of_items = [
    new Grocery("milk", 3, "dairy", 5),
    new Grocery("bread", 5, "bakery", 2),
    new Grocery("eggs", 4, "dairy", 2),
    new Grocery("syrup", 7, "sauces", 1),
];
//access the html element with id app
var ele = document.getElementById("app");
// create a new <p> element for each item in the list and add to the html page
list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = '${e.name} ${e.quantity} ${e.category} -> $${e.price}';
    ele === null || ele === void 0 ? void 0 : ele.appendChild(p);
});
