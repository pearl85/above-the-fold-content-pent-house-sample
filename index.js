var penthouse = require('penthouse'),
    path = require('path'),
    fs = require('fs'),
    __basedir = './';
 
penthouse({
    url: 'https://localhost/index.html',
    css: path.join(__basedir + 'main.css'),
    // OPTIONAL params 
    width: 320,                    // viewport width 
    height: 568,                    // viewport height 
    forceInclude: [
      '.keepMeEvenIfNotSeenInDom',
      /^\.regexWorksToo/
    ],
    timeout: 60000,                 // ms; abort critical CSS generation after this timeout 
    strict: true,                  // set to true to throw on CSS errors (will run faster if no errors) 
    maxEmbeddedBase64Length: 1000,  // characters; strip out inline base64 encoded resources larger than this 
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', // specify which user agent string when loading the page 
    renderWaitTime: 10000,            // ms; render wait timeout before CSS processing starts (default: 100) 
    blockJSRequests: true
}, function(err, criticalCss) {
    if (err) {
        // handle error 
        throw err;
    }
 
    fs.writeFileSync('outfile.css', criticalCss);
});