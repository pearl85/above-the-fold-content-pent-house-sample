var penthouse = require('penthouse'),
    path = require('path'),
    fs = require('fs'),
    __basedir = './';
 
penthouse({
    url: 'https://localhost/index.html',
    css: path.join(__basedir + 'main-desktop.css'),
    // OPTIONAL params 
    width: 1200,                    // viewport width 
    height: 900,                    // viewport height 
    forceInclude: [
      '.keepMeEvenIfNotSeenInDom',
      /^\.regexWorksToo/
    ],
    timeout: 60000,                 // ms; abort critical CSS generation after this timeout 
    strict: false,                  // set to true to throw on CSS errors (will run faster if no errors) 
    maxEmbeddedBase64Length: 1000,  // characters; strip out inline base64 encoded resources larger than this 
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53', // specify which user agent string when loading the page 
    renderWaitTime: 10000,            // ms; render wait timeout before CSS processing starts (default: 100) 
    blockJSRequests: true
}, function(err, criticalCss) {
    if (err) {
        // handle error 
        throw err;
    }
 
    fs.writeFileSync('outfile-desktop.css', criticalCss);
});