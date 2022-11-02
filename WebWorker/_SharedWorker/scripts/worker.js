console.log("I'm the Shared Worker");

const ports = [];

onconnect = event => {

    const port = event.port[0];
    // console.log( port );

    port.onmessage = event => {
        ports.forEach(_port => {
            console.log( _port);
            port.postMessage( event.data );
        })
    }

    port.start();
    ports.push(port);

}