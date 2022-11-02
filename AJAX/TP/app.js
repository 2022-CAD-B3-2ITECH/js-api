"use strict";


// Retourve les nouex HTML
// --

// Retrouve la balise #content
const content = document.getElementById('content');


/**
 * Initailise la navigation
 * - recupère la liste des balises <a>
 * - Ecoute le click des balises <a>
 */
function initNav()
{
    // Retrouve toutes les balises <a> du document
    const links = document.querySelectorAll('a');


    // Ecouteur d'evenement
    // --

    // Boucle sur les balises <a>
    links.forEach(link => {
        
        // On ecoute le "click" sur chaque balise
        link.addEventListener('click', clickLink);

    });

}


// Fonctions callback
// --

async function clickLink(event)
{
    // Bloque la redirection du lien
    event.preventDefault();

    // Retrouve le noeux HTML qui a permit de déclencher l'événement
    const link = event.target;

    // Recupère la valeur de l'attribut HREF
    const href = link.href;
    // const href = link.getAttribute('href');


    content.innerHTML = await getPage(href);
    initNav();

}


/**
 * Recupère le contenu d'une page
 * 
 * @param {string} url 
 * @returns {string}
 */
async function getPage(url)
{
    const response = await fetch(url);
    return await response.text();
}


// On récupère la page "A" au chargement complet de la fenetre
window.onload = async event => {
    content.innerHTML = await getPage('/AJAX/TP/a.html');
    initNav();
};

initNav();