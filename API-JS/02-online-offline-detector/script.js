// if (navigator.onLine) {
//     console.log('connecté');
// } else {
//     console.log('hors ligne');
// }
  
// window.addEventListener('offline',  event => console.log( 'You appear Offline' ) );
// window.addEventListener('online',   event => console.log( 'You appear Online' ) );

navigator.connection.addEventListener('change', connectionHandler);
window.addEventListener('load', connectionHandler);

function connectionHandler( event )
{
    const type = navigator.connection.effectiveType;
    const isOnline = navigator.onLine;

    if (!isOnline)
    {
        console.log( 'You appear Offline' );
    }

    else {
        switch (type)
        {
            case 'slow-2g':
                console.log( 'You appear Online with a very slow connection' )
                break;
            case '2g':
                console.log( 'You appear Online with a slow connection' )
                break;
            case '3g':
                console.log( 'You appear Online with a good connection' )
                break;
            case '4g':
                console.log( 'You appear Online with a fast connection' )
                break;
        }
    }
}