// console.log( navigator );
// console.log( navigator.vendor );





console.log( 'Navigator' );
console.log( '===============================================================' );

console.log( '=> vendor\t\t\t\t',           navigator.vendor );
console.log( '=> vendorSub\t\t\t',          navigator.vendorSub );
console.log( '=> product\t\t\t\t',          navigator.product );
console.log( '=> productSub\t\t\t',         navigator.productSub );

// Renvois le nombre de point de contact simultané supporté par le navigateur
console.log( '=> maxTouchPoints\t\t',       navigator.maxTouchPoints );

// Renvois un booleen si les cookie sont activés ou non
console.log( '=> cookieEnabled\t\t',        navigator.cookieEnabled );

// Memoire de l'appareil en Gigaoctets
console.log( '=> deviceMemory\t\t\t',       navigator.deviceMemory );
console.log( '=> doNotTrack\t\t\t',         navigator.doNotTrack );
console.log( '=> language\t\t\t\t',         navigator.language );
console.log( '=> languages\t\t\t\t',        navigator.languages );
console.log( '=> mimeTypes\t\t\t',          navigator.mimeTypes );
console.log( '=> onLine\t\t\t\t',           navigator.onLine );
console.log( '=> plugins\t\t\t\t',          navigator.plugins );
console.log( '=> userAgent\t\t\t',          navigator.userAgent );

console.log( '' );

console.log( '=> webdriver \t\t\t',         navigator.webdriver );
console.log( '=> buildID \t\t\t\t',         navigator.buildID );
console.log( '=> contacts \t\t\t',          navigator.contacts );
console.log( '=> securitypolicy \t\t',      navigator.securitypolicy );
console.log( '=> standalone \t\t\t',        navigator.standalone );
console.log( '=> appCodeName \t\t\t',       navigator.appCodeName );
console.log( '=> appName \t\t\t\t',         navigator.appName );
console.log( '=> appVersion \t\t\t',        navigator.appVersion );
console.log( '=> activeVRDisplays \t',      navigator.activeVRDisplays );
console.log( '=> battery \t\t\t\t',         navigator.battery );
console.log( '=> oscpu \t\t\t\t',           navigator.oscpu );
console.log( '=> platform \t\t\t',          navigator.platform );

// console.log( '=> scheduling\t\t\t',         navigator.scheduling );
// console.log( '=> credentials\t\t\t',        navigator.credentials );
// console.log( '=> geolocation\t\t\t',        navigator.geolocation );
// console.log( '=> keyboard\t\t\t\t',         navigator.keyboard );
// console.log( '=> locks\t\t\t\t',            navigator.locks );
// console.log( '=> mediaCapabilities\t',      navigator.mediaCapabilities );
// console.log( '=> mediaDevices\t\t\t',       navigator.mediaDevices );
// console.log( '=> permissions\t\t\t',        navigator.permissions );
// console.log( '=> presentation\t\t\t',       navigator.presentation );
// console.log( '=> serial\t\t\t',             navigator.serial );
console.log( '=> serviceWorker\t\t\t',      navigator.serviceWorker );
console.log( '=> storage\t\t\t\t',          navigator.storage );
// console.log( '=> xr \t\t\t\t\t',            navigator.xr );
// console.log( '=> wakeLock \t\t\t',          navigator.wakeLock );

console.log( '' );



// console.log( '===============================================================' );
// console.log( 'Navigator connection (navigator.connection.xxx)' );
// console.log( '---------' );

// // Estimation de bande passante en mégabits par seconde
// console.log( '=> downlink\t\t\t',       navigator.connection.downlink );

// // Type de connexion 'slow-2g', '2g', '3g', or '4g'.
// console.log( '=> effectiveType\t',      navigator.connection.effectiveType );

// // Estimation du temps d'aller-retour effectif de la connexion actuelle
// console.log( '=> rtt\t\t\t\t',          navigator.connection.rtt );

// // si l'utilisateur a défini une option d'utilisation réduite des données sur l'agent utilisateur
// console.log( '=> saveData\t\t\t',       navigator.connection.saveData );

// console.log( '=> onchange\t\t\t',       navigator.connection.onchange );

// console.log( '' );