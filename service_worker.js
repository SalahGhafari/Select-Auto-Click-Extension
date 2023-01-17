// JavaScript code for the service worker of the extension

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service_worker.js', {scope: '/'})
        .then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
}

// Add event listeners for the service worker
self.addEventListener('install', function(event) {
    // Code for handling the install event
});

self.addEventListener('activate', function(event) {
    // Code for handling the activate event
});

self.addEventListener('fetch', function(event) {
    // Code for handling the fetch event
});
