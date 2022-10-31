
// Cibler les Boutons HTML + #txtValue
const btns = document.querySelectorAll('button[data-src]');
const target = document.getElementById('txtValue');

btns.forEach(btn => {
    
    // Ecouter les evenements (click) sur les boutons
    btn.addEventListener('click', event => {

        // Recup de la valeur de data-src
        const src = btn.dataset.src;
        // console.log( src );


        fetch(src)
            .then(response => console.log( response.body ));


    });

});