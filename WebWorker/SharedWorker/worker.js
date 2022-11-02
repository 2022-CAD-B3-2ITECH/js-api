console.log('Worker');

const ports = [];

onconnect = event => {
    const port = event.ports[0];
  
    // port.postMessage(event);

    port.onmessage = event => {
        ports.forEach(port => {
            console.log( ports );
            port.postMessage(event.data);
        });

    //     console.log(`Message received from main script: ${event.data}`);
        // console.log( event );
    };

    port.start()
    ports.push(port);
};

// onmessage = event => {
//     console.log(`Message received from main script: ${event.data}`);
//     // console.log( event );
// }

// onmessageerror = event => {
//     event.preventDefault();
//     console.log('Error received from main script:', event);
// }

