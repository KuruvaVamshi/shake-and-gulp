/**
 * Shake & Gulp – Universal Image Preloader
 * 
 * Automatically discovers and preloads all external images on the page
 * (both <img src> and CSS background-url) so they render instantly.
 * Also preloads images from sibling drink pages the user is likely to visit next.
 */
(function () {
    // 1. Preload all ibb.co images found on THIS page
    //    (background image, logo, bottle, suggestion cards)
    var allImages = document.querySelectorAll('img[src*="i.ibb.co"]');
    var preloaded = {};

    allImages.forEach(function (img) {
        if (!preloaded[img.src]) {
            preloaded[img.src] = true;
            var p = new Image();
            p.src = img.src;
        }
    });

    // 2. Preload the CSS background image
    var bgMatch = document.body.style.cssText
        ? document.body.style.cssText.match(/url\(["']?(https:\/\/[^"')]+)["']?\)/)
        : null;
    if (!bgMatch) {
        // Try computed style
        var computedBg = window.getComputedStyle(document.body).backgroundImage;
        bgMatch = computedBg.match(/url\(["']?(https:\/\/[^"')]+)["']?\)/);
    }
    if (bgMatch && bgMatch[1] && !preloaded[bgMatch[1]]) {
        preloaded[bgMatch[1]] = true;
        var bgImg = new Image();
        bgImg.src = bgMatch[1];
    }

    // 3. Preload common images shared across all drink pages
    //    (logo, background, fssai, and all bottle images users may navigate to)
    var commonUrls = [
        // Background
        "https://i.ibb.co/hJR4H2VG/buttermilkbackground.png",
        // Logo
        "https://i.ibb.co/cSXcmScQ/Shake-Gulp-Logo.png",
        // All drink bottle images (so navigation arrows switch instantly)
        // Traditional Drinks
        "https://i.ibb.co/7dPpVxrY/Jeera-butermilk-shots-544x652.png",
        "https://i.ibb.co/CsmVtxTg/Masala-Buttermilk-544x652.png",
        "https://i.ibb.co/4wRH7CC0/Date-Buttermilk-544x652.png",
        "https://i.ibb.co/QjQrDvRf/Ragi-544x652.png",
        "https://i.ibb.co/93Gx7RXY/Sabja-Lassi-544x652.png",
        "https://i.ibb.co/V0w5CkMV/Buttermilk-544x652.png",
        "https://i.ibb.co/5XBZZR0g/Nimbu-Sabja-544x652.png",
        "https://i.ibb.co/zVPTgrjw/Nimbu-pudina-544x652.png",
        // Wellness Shots
        "https://i.ibb.co/Nv72jd4/Amla-shadow-elements-544x652.png",
        "https://i.ibb.co/GQ08dSY6/Moringa-544x652.png",
        "https://i.ibb.co/Ps3cPNPP/Neem-544x652.png",
        "https://i.ibb.co/n8qjj6ZZ/Gingger-shots-544x652.png",
        "https://i.ibb.co/wxcnDn5/Wheat-Grass-544x652.png",
        "https://i.ibb.co/PZW0sHP1/Gingger-Turmeric-shots-544x652.png",
        "https://i.ibb.co/67qt36GY/Barley-544x652.png"
    ];

    commonUrls.forEach(function (url) {
        if (!preloaded[url]) {
            preloaded[url] = true;
            var img = new Image();
            img.src = url;
        }
    });
})();
