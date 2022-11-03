// API Storage
// --
// Base de donnée dans le navigateur
// Max 10 Mb

// -> Le LocalStorage
// ---
// Espace de stockage de données permanent 
console.log( window.localStorage );

// -> Le SessionStorage
// ---
// Espace de stockage de données associé à la session 
console.log( window.sessionStorage );
console.log( '' );



// ----------------------------------------

const local_storage = window.localStorage;
const session_storage = window.sessionStorage;


// nombre d'éléments contenus dans l'objet Storage.
console.log( "nombre d'éléments contenus dans l'objet Storage" );
console.log( 'Length (local) : ', local_storage.length );
console.log( 'Length (session) : ', session_storage.length );
console.log( '' );


// Ajouter ou Modifier un element
// -> storage.setItem( key , value );
local_storage.setItem( 'firstname', "Bruce" );
session_storage.setItem( 'firstname', "Bruce" );

// Tableau et objet sous forme de chaine de caractères
// local_storage.setItem( 'jsondata', '{item1: "Item 1", item2: "Item 2"}' );



// Lire une valeur associé à une clé
// -> storage.getItem( key )
const session_firstname = session_storage.getItem( 'firstname' );
const local_firstname = local_storage.getItem( 'firstname' );

console.log( "Lire une valeur associé à une clé ");
console.log( 'Firstname (session) : ', session_firstname );
console.log( 'Firstname (local) : ', local_firstname );
console.log( '' );



// Lire une valeur associé à un index numérique
// -> storage.key( index )

const session_key = session_storage.key(0);
const local_key = local_storage.key(0);

console.log( "Lire une valeur associé à un index numérique ");
console.log( 'Key 0 (session) : ', session_key );
console.log( 'Key 0 (local) : ', local_key );
console.log( '' );




// Suppression d'un élément
// -> storage.removeItem( key );
// session_storage.removeItem( 'firstname' );
// local_storage.removeItem( 'firstname' );
// console.log( '' );




// Memoire utilisée par le storage
console.log( 'Space (session) : ', sessionStorageSpace() );
console.log( 'Space (local) : ', localStorageSpace() );
console.log( '' );








function localStorageSpace()
{
    const storage = window.localStorage;
    let total = 0;

    for (let key in storage)
    {
        if (!storage.hasOwnProperty(key)) continue;
        total += ((storage[key].length + key.length) * 2);
    }

    return (total / 1024).toFixed(2);
}

function sessionStorageSpace()
{
    const storage = window.sessionStorage;
    let total = 0;

    for (let key in storage)
    {
        if (!storage.hasOwnProperty(key)) continue;
        total += ((storage[key].length + key.length) * 2);
    }

    return (total / 1024).toFixed(2);
}
