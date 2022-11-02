if (!window.SharedWorker) 
{
    console.warn("Web Worker not available");

}
else
{


    const myWorker = (new SharedWorker('worker.js', {name: "first"})).port;
    myWorker.start(); 

    const target = document.getElementById('target');

    myWorker.onmessage = event => {
        target.innerHTML = event.data;
    };


    // -------

    
    const secondWorker = (new SharedWorker('worker.js', {name: "second"})).port;
    secondWorker.start(); 


    const textarea = document.getElementsByName('original')[0];
    textarea.addEventListener('keyup', () => {
        secondWorker.postMessage(textarea.value);
    });

    secondWorker.onmessage = event => {
        target.innerHTML = event.data;
    };
}