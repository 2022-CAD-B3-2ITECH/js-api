console.log('Load the file "b.js"');

const input = document.getElementsByName('input')[0];
const output = document.getElementById('output');
const options_a = {
    name: 'demoSharedWorker_a'
};
const options_b = {
    name: 'demoSharedWorker_b'
};

if (!('SharedWorker' in window)) 
{
    console.warn("Web Worker not available");
}
else 
{
    // Worker B
    const myWorker_b = (new SharedWorker('./scripts/worker.js', options_b)).port;
    myWorker_b.start();

    // Worker A
    const myWorker_a = (new SharedWorker('./scripts/worker.js', options_a)).port;
    myWorker_a.start();

    // ---

    // Set data to the Worker B
    input.addEventListener('keyup', event => myWorker_b.postMessage(event.target.value));

    // Receive data from Worker A
    myWorker_a.onmessage = event => {
        output.innerHTML = event.data;
    }
}