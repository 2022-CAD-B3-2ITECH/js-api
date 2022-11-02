if (!window.SharedWorker) 
{
    console.warn("Web Worker not available");    
}
else
{
    console.log("i'm a.js");

    const content = document.getElementById("content");


    const options = {
        name: "demoSharedWorker"
    };

    const myWorker = (new SharedWorker('./scripts/worker.js', options)).port;
    myWorker.start();

    myWorker.onmessage = event => {
        content.innerHTML = event.data;
    }
}