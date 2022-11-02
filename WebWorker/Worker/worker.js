console.log("I'm the Worker");

// Recieve a message from script.js
onmessage = event => {
    console.log(`Message form script.js : ${event.data}`);
}

// Log an error message
onmessageerror = event => {
    event.preventDefault();
    console.log('Error received from main script:', event);
} 

postMessage("Worker is initialized");


// window is not available in a Worker
// console.log( window );
console.log( self );

setInterval(() => postMessage("Hello there !"), 2000);