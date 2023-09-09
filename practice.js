// console.log('Hello World');

// Looping objects, keys, values and entries

const restaurant = {
    restaurantName: 'Classlco Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: [' Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, //open 24 hours
            close: 24
        }
    },

};

// lopping throught object

// properties name
const properties = Object.keys(restaurant.openingHours);

console.log(properties);
let openStr = `we are open on ${properties.length} days: `;

for(const day of properties){
    openStr += `${day}, `
}
console.log(openStr);

// properties value
const valus = Object.values(restaurant.openingHours)
console.log(valus);

const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

for (const [key,{open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}