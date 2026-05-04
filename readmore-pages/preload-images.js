/**
 * Shake & Gulp – Universal Image Preloader (Readmore Pages)
 * 
 * Preloads common shared images so pages render instantly.
 */
(function () {
    var preloadUrls = [
        // Logo
        "https://i.ibb.co/cSXcmScQ/Shake-Gulp-Logo.png"
    ];
    preloadUrls.forEach(function (url) {
        var img = new Image();
        img.src = url;
    });
})();
