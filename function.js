'use strict';
const bookings = [];

// we creating a function with three arguments and we set some default values for the argumrnts
const createBooking = function(flightNum, numPassengerd = 1 , price = 199 * numPassengerd){

    // ES5 //
    // numPassengerd = numPassengerd || 1;
    // price = price || 199;

    // then we create an object inside the fuction and pass those function arguments 
    const booking = {
        flightNum, 
        numPassengerd, 
        price
    };
    console.log(booking);
    // and then we push the values of the object to the bookings array 
    bookings.push(booking)
}

// when we call the function without passing any values 
//during the function invoketions the the default values 
//will be printed that we set above numPassengerd = 1 , price = 199
createBooking('LH123');

// and if we invoke or call the function with assigning arguments values 
//the the default calues goanna overerite and assign values will be printed
createBooking('LH123',2,800);

// i changed set the price of the flight tickt from 199 to 199 * numPassengerd
// that means price will be calculated dynamically depend on the number of passenges

// keep in mind that during calling the function the second value will be always map
// to the second arguments of the function that we're calling 
createBooking('LH123',3);
createBooking('LH123',5);
// but if we want to skip the value of passenges and let it default the 
//we can do it like this seeting the values to undefined mean not seeting any value 
createBooking('LH123',undefined,1999);


const flight = 'LH234'
const jonas = {
    name: 'Manoj Mondal',
    passport: 2778895345
};

// const checkIn = function(flightNum,passenges){
// // this is not a good practice to change a function peramiter 
// flightNum= 'LH99';
// passenges.name = 'Mr. ' + passenges.name;

// if(passenges.passport === 2778895345){
//     alert('check-in')
// }else{
//     alert('wrong passport!')
// }

// }
// checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);


// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey')

// greeterHey('jonas')
// greeterHey('steven')

// greet('Hello')('jonas')

// using array function

// const greetArr = greeting => person => console.log(`${greeting} ${person}`);
// greetArr('Hi')('jonas')

// call an dapply mehtods 

const lufthansa = {
    airline: 'Lufthasa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${this.flightNum}`, name})
    },
}


lufthansa.book(239, 'Manoj Mondal')
lufthansa.book(635, 'Sontu Mondal')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book

// does not work
// book(23, 'Subham')

book.call(eurowings,23, 'subham') 
console.log(eurowings);
book.call(lufthansa,233, 'Roshni') 
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 748, 'Prosenjit')
console.log(swiss);
