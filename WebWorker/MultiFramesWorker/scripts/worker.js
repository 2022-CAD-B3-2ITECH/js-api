console.log('Load the file "worker.js"');

const ports = [];

onconnect = event => {
    const port = event.ports[0];
  
    port.onmessage = event => {
        ports.forEach(port => {
            port.postMessage(event.data);
        });
    };

    port.start()
    ports.push(port);
}