const airline = 'TAP Airs Portugal';
const plane = 'A320';


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[2]);

// we can also print the length of an string
// console.log(plane.length);
// we can also do that directly on the strings
// console.log('B737'.length);

/* strings also have methods and some of them 
are quite similar to array methods
// we can find the index of string value
string are alo 0 based
*/
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

/*slic methodes 

in slice methode we need the index of an value 
to slice it let understand this with an example
*/

// console.log(airline.slice(4));
// output : Air Portgual
// console.log(airline.slice(4, 7));
// output : Air


// dynamic extract 

// console.log(airline.slice(0, airline.indexOf(' ')));
// output : Air Portgual
// console.log(airline.slice(airline.lastIndexOf(' ')+1));
// output : Portgual (+1 is to remove the space before Portgual)

/*
NOTE: the length of an extected or sliced string will be
end - start of the index value that we prived as an argument
during the slice so 7-4 = 3 and length of the extract string is also 3
A I R
*/

/**
 remember that the output of an slice methode is an 
 sub-string of the main string it didn't create a
 new string nither modiify the actual string because
 string are "premitive data" it just remove 4 indxes 
 from the original string and return 
it on the console
 */


// 

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seat
//     const getSeat = seat.slice(-1,)
//     getSeat === 'B' || getSeat === 'E' ? console.log('congratualtion you get middle seat 😍')
//     :console.log('Enjoy The Flight you are lucky 😎');

    
// }

// console.log(getSeat);
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')


/*
Now before we move on here, let's just stop for a second
and understand why all of this actually works. So we know 
that strings are just primitives. So why do they have methods?
Shouldn't methods only be available on objects such as a race?
Well that is actually true. However, JavaScript is really 
smart. And so here is how this works. Whenever we call a 
method on a string, JavaScript will automatically behind 
the scenes convert that string primitive to a string object
with the same content. And then it's on that object  where 
the methods are called. And then when the operation is done
the object is converted back to a regular string primitive. 
and this process is called boxing.
*/

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// fix captilization in name
const passenger = 'jOnAs'; //Jonsa
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower//.slice(1)

// console.log(passengerCorrect); 

// comparing email

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';


const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = loginEmail.toLowerCase().trim()

// console.log(email === trimmedEmail);

// console.log(trimmedEmail);

// replacing

const priceGB = '$288,97';
const priceIN = priceGB.replace('$', '₹').replace(',','.');

// console.log(priceIN);

const annuuncemnet = "All pasenger come to boarding door 23. Boarding door 23!";

// console.log(annuuncemnet.replaceAll('door', 'gate'));

//Bolleans
const plane1 = 'Airbus A320neo';

// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('A'));

// plane1.startsWith('Airbus') && plane1.endsWith('neo')? console.log('part of the new Airbus family'): console.log('Not from the family');

const chceckBagage = function(item){

    const bag = item.toLowerCase()

    // bag.includes('knife')? console.log('need to check this bag'): console.log('no need to check');
}

chceckBagage('i have some food, water bottle and a pocket Knife')
chceckBagage('i have a laptop, a camera')

// Split and Join Method

// below we split this entire string by '+'
console.log('a+very+nice+string'.split('+'));

// below we split this entire string by empty space ' '
console.log('Manoj Mondal'.split(' '));

const [firstName, lastName] = 'Manoj Mondal'.split(' ');

// joining
const newName=['Mr.', firstName, lastName.toUpperCase()].join(' ')

console.log(newName);

// {const capitalizedName = function(name){
//     // here we split the name by space
//     const names =name.split(' ');
//     const namesUpper =[]

//     for(const n of names){
        
//         /* below we first convert the first letter of the name
//         to uppercase eith the toUpperCase() methode then we slcie
//         the name from the 2nd word and join it with the capital word

//         manoj mondal>{ M M > anoj ondal>} the  we add this twho string 
//         which convert to Manoj Mondal 
        
//         */

//         // namesUpper.push(n[0].toUpperCase()+n.slice(1))

//         // here we replace the small word of the first sentece 
//         //with capital captial word 

//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//     }

//     console.log(namesUpper.join(' '));
// }

// capitalizedName('manoj mondal')
// capitalizedName('roshni mallick')
// capitalizedName('subham rai')

// // padding

// const message = 'go to gate 23!';

// // this padStart() methode wil convert the length of the 
// //mesege to 25 by adding + at start

// // and the padEnd method will add some + at the end of the string 
// // until the length of the string go up to 35
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// // real world example

// /*
// This is an real world exapmle we usallly saw that every in online platform we never see the 
// full numbers of the credit card rather we only saw the lat 4 digit so where we create a function
// maskCreditCard which do the same

// */

// const maskCreditCaard = function(number){
//     // here we convert the argument from number to string
//     const str = number + '';

//     // here we slice  the the string from last 4 digit by using negetive value
//     const last = str.slice(-4);

//     // and here we add padding of * with the sliced 4 digit upto it's original length
//     return last.padStart(str.length, '*')

// }

// console.log(maskCreditCaard(4566522))
// console.log(maskCreditCaard(4566522244566324))
// console.log(maskCreditCaard('485662225845552'))


// // repeat method

// const message2 = 'Bad Weather ......... all departre Delayed';

// console.log(message.repeat(5));

// const planesInLine = function(n){
//     console.log(`There are ${n} plans in line ${'✈'.repeat(n)}`);
// }

// planesInLine(5)
// planesInLine(12)
// planesInLine(18)











