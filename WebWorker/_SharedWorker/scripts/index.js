if (!window.SharedWorker) 
{
    console.warn("Web Worker not available");
}

else 
{
    console.log("i'm index.js");
    const original = document.getElementsByName('original')[0];
    original.addEventListener('keyup', onKeyUp);
    
    const options = {
        name: "demoSharedWorker"
    };
    
    const myWorker = (new SharedWorker('./scripts/worker.js', options)).port;
    myWorker.start();
    
    
    
    function onKeyUp(event)
    {
        myWorker.postMessage( event.target.value )
        // console.log( event.target.value );
    }
}


