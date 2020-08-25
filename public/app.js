if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("./sw.js");
  }

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}