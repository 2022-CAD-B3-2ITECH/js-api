if (!window.SharedWorker) 
{
    console.warn("Web Worker not available");

}
else
{
    const myWorker = (new SharedWorker('worker.js', {name: "second"})).port;
    myWorker.start(); 

    const target = document.getElementById('target');

    myWorker.onmessage = event => {
        target.innerHTML = event.data;
        // console.log(event.data);
    };
}