const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
  
function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`=> Lat : ${crd.latitude}`);
    console.log(`=> Lon : ${crd.longitude}`);
    console.log(`=> Acc : ${crd.accuracy}`);
    // console.log(`=> More or less ${crd.accuracy} meters.`);
    // console.log(crd);
    // console.log(pos);
}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  
// navigator.geolocation.getCurrentPosition(success, error, options);
navigator.geolocation.watchPosition(success, error, options);
