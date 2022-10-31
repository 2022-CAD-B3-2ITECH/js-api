function fairerQqcALAncienne( success, failed )
{
    // Recupère une valeur en tre 0 et 1
    var value = Math.random();

    if (value > 0.8) {
        success()
    } else {
        failed();
    }

}

function doOnSuccess()
{
    console.log("L'opé est un succés");
}

function doOnFailed()
{
    console.log("L'opé est un echec");
}

// console.log("test A");
// fairerQqcALAncienne(doOnSuccess, doOnFailed);
// console.log("test B");

function faireQqc()
{
    return new Promise((success, failed) => {

        var value = Math.random();

        if (value > 0.8) {
            success();
        } else {
            failed();
        }
    });
}

console.log("test A");
const promise = faireQqc();
promise.then(doOnSuccess, doOnFailed);
console.log("test B");