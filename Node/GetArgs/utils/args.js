// Récupère la liste des arguments Node et génére un objet d'argument en sortie


module.exports = new function()
{
    // Liste des arguments transmient par node
    const input = process.argv;
    
    // Filtre les arguments
    const args = input.slice(2);
    
    // Creation de l'objet de sortie
    let output = {};
    
    // Manipulations des arguments restant
    args.forEach(arg => {
    
        // Convertion de la chaine en tableau
        let item    = arg.split('=');
    
        // Extraction des valeurs du tableau permettant de générer
        // les clé (key) et valeur (value de l'objet "output")
        let key     = item[0];
        let value   = item[1];
    
        // Injection des données dans l'objet "output"
        output[ key ] = value;
    
    });

    return output;
}
