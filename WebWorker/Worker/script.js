// Check if the browser supports Worker
if (!('Worker' in window))
{
    console.log("This browser don't support Worker");
}
else
{

    const myWorker = new Worker('worker.js', {
        name: 'MyFirstWorker'
    });

    // Send data to the worker
    myWorker.postMessage("Do something");

    // Recieve a message from Worker (myWorker)
    myWorker.onmessage = event => {
        console.log(`Message from Worker : ${event.data}`);
    }


    // Close the worker
    // myWorker.terminate();
    setTimeout(() => {myWorker.terminate()}, 5000);


    // console.log( window );

}