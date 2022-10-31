// VAR déclare une variable à portée Globale
var myVar_A = "A";

// LET Déclare une variable à portée locale
let myVar_B = "B";

// LET Déclare une variable (invariable) à portée locale
const myVar_C = "C";



// -----------------------------------------------------------------------------


// for (var i=0; i<10; i++)
// {
//     console.log(i);
// }
// console.log('----');
// console.log(i);


for (let i=0; i<10; i++)
{
    for (let j = 0; j < 3; j++) 
    {
        console.log(i);
    }
}
console.log('----');
// console.log(i);


// -----------------------------------------------------------------------------


// var a = "A";

// console.log(a);

// function print_varA() 
// {
//     console.log(a);
// }

// console.log(a);

// print_varA();