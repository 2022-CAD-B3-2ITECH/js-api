
// Cibler les Boutons HTML + #txtValue
const btns = document.querySelectorAll('button[data-src]');
const target = document.getElementById('txtValue');

btns.forEach(btn => {
    
    // Ecouter les evenements (click) sur les boutons
    btn.addEventListener('click', event => {

        // Recup de la valeur de data-src
        const src = btn.dataset.src;
        // console.log( src );


        // Execute la requete
        fetch(src) 
            // Lorsqu'on reçoit la réponse de la requete, on converti la réponse ne JSON
            .then(response => response.json())
            // Lorsque la réponse en convertie en json ...
            .then(data => {
                // console.log(data)
                target.innerText = `${data.firstname} ${data.lastname}`;
            })
            .catch(error => {
                console.log( error );
            })
        ;


    });

});