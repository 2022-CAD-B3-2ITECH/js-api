console.log('Load the file "a.js"');

const input = document.getElementsByName('input')[0];
const output = document.getElementById('output');
const options_a = {
    name: 'demoSharedWorker_a'
}
const options_b = {
    name: 'demoSharedWorker_b'
}

if (!('SharedWorker' in window)) 
{
    console.warn("Web Worker not available");
}
else 
{
    // Worker A
    const myWorker_a = (new SharedWorker('./scripts/worker.js', options_a)).port;
    myWorker_a.start();

    // Worker B
    const myWorker_b = (new SharedWorker('./scripts/worker.js', options_b)).port;
    myWorker_b.start();

    // ---

    // Set data to the Worker A
    input.addEventListener('keyup', event => myWorker_a.postMessage(event.target.value));

    // Receive data from Worker B
    myWorker_b.onmessage = event => {
        output.innerHTML = event.data;
    }
}