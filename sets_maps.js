/*
a set is basically just a collection 
of unique values. So that means that 
a set can never have any duplicates.
*/

const ordersSet = new Set([
    'pizza',
    'pasta',
    'Risoto',
    'pasta',
    'pizza',
    'Risoto'
]);

/*
a set contain only uniq values
if there is an duplicate value
it will be ignorde like above example
*/
// console.log(new Set ('Maanoj'));


// we can get length or size of an Set by using size methode
// note to get length of an set we use '.size' not '.length'
ordersSet.size;

// we can use '.has' methode to check 
// if any value exist in the set
ordersSet.has('pizza');

// we can use '.add' methode to add 
// an value in the set
ordersSet.add('burgur');

// we can use '.delete' methode to delete 
// an value in the set
ordersSet.delete('pasta');

// we can use '.clear' methode to clear 
// all value in the set
// ordersSet.clear();

// console.log(ordersSet);

// set are also itarbale so we can loop thorugh it

for (const order of ordersSet) {
    // console.log(`Today's speicaila items ${order} `);
}


const employee = ['John', 'Jesica', 'Mark', 'Michaile', 'John', "Jesica"]

// creating set from array
const employeeSet = new Set(employee)
// creating array from set
const employeeSetA = [...new Set(employee)]

// console.log(employeeSet);
/*
in sets there are actually no indexes. And in 
fact, there is no way of getting values out of 
a set. And if we think about this, then it makes 
sense. So there's really no need for getting data 
out of a set. That's because if all values are 
unique, and if their order does not matter, then 
there is no point of retrieving values out of a set.
All we need to know is whether a certain value is in 
the set or not. And that's why we have the has method.
If your goal is to actually store values in order and 
then retrieve it, then the best use case, is to just 
use an array. You wouldn't use a set for that. And so 
again, there's no need for getting values out of a set,
because if you need it, then you will just use an array.
*/

// Maps


const rest = new Map();
/*
And the easiest way to create a map is to 
actually create an empty map just like 
this without passing anything in. And 
then, to fill up the map we can use 
the set method.
*/

rest.set('name', 'Classico Italiano')
.set(1, 'Kalyan', 'Khadakpada')
.set(2, 'Kurla', 'Mumbai')

rest
    .set('categories', ['italian', 'pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, `we are open :D`)
    .set(false, 'we are close :(')

// read data from the map
// console.log(rest.get(true));
console.log(rest.get('name'));


const time = 8;

console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2)
rest.clear()
console.log(rest);
console.log(rest.size);