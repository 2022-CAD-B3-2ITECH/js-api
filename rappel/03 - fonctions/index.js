// Fonctions native

let str = "Lorem ipsum";
str = str.toUpperCase();
// console.log( str );

// -----------------------------------------------------------------------------

// Fonctions utilisateurs - nommée

function sayHello(to)
{
    console.log(`Hello ${to}`);
}

// sayHello("John");
// sayHello("Bob");

// -----------------------------------------------------------------------------

// Fonctions utilisateurs - anonyme

const addition = function(a, b)
{
    console.log( a+b );
}
// addition(10,5);


// -----------------------------------------------------------------------------

// Fonctions Callback

// setInterval(function(){
//     const date = new Date();

//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

// }, 1000);



// -----------------------------------------------------------------------------

// fonction fléchées

const test = () => {
    console.log('Affiche la fonction test');
}


const btn = document.getElementById('myBtn');

btn.addEventListener('click', event => console.log( event.target));