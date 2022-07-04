//create a class
class Grocery {
    name!: string;
    quantity!: number;
    category!: string;
    price!: number;

    // add a constructor
    constructor(n: string, q: number, c: string, p: number){
        this.name = n;
        this.quantity = q;
        this.category = c;
        this.price = p;
    }
}

//add grocery items to an array milk,bread,eggs with quantity, category and price 
let list_of_items = [
    new Grocery("milk", 3, "dairy", 5),
    new Grocery("bread", 5, "bakery", 2),
    new Grocery("eggs", 4, "dairy", 2),
    new Grocery ("syrup", 7, "sauces", 1),
]

//access the html element with id app
const ele = document.getElementById("app");

// create a new <p> element for each item in the list and add to the html page
list_of_items.forEach ((e) => {
    const p = document.createElement("p");
    p.textContent = '${e.name} ${e.quantity} ${e.category} -> $${e.price}';
    ele?.appendChild(p);
}); 
