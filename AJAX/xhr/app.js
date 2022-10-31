"use strict";

// Cibler les Boutons HTML + #txtValue
const btns = document.querySelectorAll('button[data-src]');
const target = document.getElementById('txtValue');

btns.forEach(btn => {
    
    // Ecouter les evenements (click) sur les boutons
    btn.addEventListener('click', event => {

        // Recup de la valeur de data-src
        const src = btn.dataset.src;




        // Execute une requete sur le fichier définie par l'attribut data-src

        // Préparation de la requete
        // --


        // XHR Instance
        const xhr = new XMLHttpRequest();

        // Préparation de la requete
        const method = "GET"; // GET, POST, PUT, PATCH, DELETE, HEAD
        const url = src;
        xhr.open(method, url);

        // Execution de la requete
        xhr.send();
    

        // Evenements de la requete
        // --

        xhr.onload = () => {
            console.log(`ON LOAD`);
        };


        xhr.onerror = () => {
            console.log(`ON ERROR`);
        }


        xhr.onprogress = () => {
            console.log(`ON PROGRESS`);
        }


        xhr.onreadystatechange = () => {
            // console.log(`ON READYSTATE CHANGE`);
            // console.log(xhr.readyState);

            switch (xhr.readyState)
            {
                case 0: console.log(`ReadyState: ${xhr.readyState} : UNSENT`); break;
                case 1: console.log(`ReadyState: ${xhr.readyState} : OPENED`); break;
                case 2: console.log(`ReadyState: ${xhr.readyState} : HEADERS_RECEIVED`); break;
                case 3: console.log(`ReadyState: ${xhr.readyState} : LOADING`); break;
                case 4: console.log(`ReadyState: ${xhr.readyState} : DONE`); 
                        console.log(`Request Status: ${xhr.status}`);

                    switch (xhr.status)
                    {
                        case 200:
                            // Injecter le contenu du fichier dans la balise #txtValue
                            // console.log( xhr.response );
                            target.innerText = xhr.response;
                            break;

                        case 404:
                            console.log(`Le fichier ${src} est introuvable sur le serveur.`);
                            break;
                    }
                break;
            }

        }
    

    })

});
