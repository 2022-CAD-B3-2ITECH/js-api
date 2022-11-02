if (!window.SharedWorker) 
{
    console.warn("Web Worker not available");
}
else
{
    const firstWorker = (new SharedWorker('worker.js', {name: "first"})).port;
    firstWorker.start(); 

    const textarea = document.getElementsByName('original')[0];
    textarea.addEventListener('keyup', () => {
        firstWorker.postMessage(textarea.value);
    });

    firstWorker.onmessage = event => {
        target.innerHTML = event.data;
    };


    // -------


    const secondWorker = (new SharedWorker('worker.js', {name: "second"})).port;
    secondWorker.start(); 

    secondWorker.onmessage = event => {
        target.innerHTML = event.data;
    };
}