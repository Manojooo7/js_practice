const airline = 'TAP Airs Portugal';
const plane = 'A320';


console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[2]);

// we can also print the length of an string
console.log(plane.length);
// we can also do that directly on the strings
console.log('B737'.length);

/* strings also have methods and some of them 
are quite similar to array methods
// we can find the index of string value
string are alo 0 based
*/
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

/*slic methodes 

in slice methode we need the index of an value 
to slice it let understand this with an example
*/

console.log(airline.slice(4));
// output : Air Portgual
console.log(airline.slice(4, 7));
// output : Air


// dynamic extract 

console.log(airline.slice(0, airline.indexOf(' ')));
// output : Air Portgual
console.log(airline.slice(airline.lastIndexOf(' ')+1));
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

const checkMiddleSeat = function (seat) {
    // B and E are middle seat
    const getSeat = seat.slice(-1,)
    getSeat === 'B' || getSeat === 'E' ? console.log('congratualtion you get middle seat 😍')
    :console.log('Enjoy The Flight you are lucky 😎');

    // console.log(getSeat);

}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')


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