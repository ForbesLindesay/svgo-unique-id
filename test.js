'use strict';

const assert = require('assert');
var FS = require('fs'),
    SVGO = require('svgo'),
    svgo = new SVGO({
        plugins: [{
          uniqueID: require('./'),
        }]
      });


svgo.optimize(FS.readFileSync(require.resolve('./test.svg'), 'utf8'), {path: require.resolve('./test.svg')}).then(function(result) {

    console.log(result.data);
    assert.strictEqual(result.data, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><defs><path id="bdWfnta" d="M50 5l45 92.5H5z"/><path id="bdWfntb" d="M5 50L97.5 5v90z"/></defs><g fill="#FFF" fill-rule="evenodd" transform="translate(12 12)"><use xlink:href="#bdWfnta"/><use xlink:href="#bdWfntb"/></g></svg>')

    // {
    //     // optimized SVG data string
    //     data: '<svg width="10" height="20">test</svg>'
    //     // additional info such as width/height
    //     info: {
    //         width: '10',
    //         height: '20'
    //     }
    // }
    return svgo.optimize(FS.readFileSync(require.resolve('./test2.svg'), 'utf8'), {path: require.resolve('./test2.svg')});
}).then(function(result) {

    console.log(result.data);
    assert.strictEqual(result.data, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><defs><path id="eukCRya" d="M95 50L5 95V5z"/><path id="eukCRyb" d="M50 5l45 92.5H5z"/></defs><g fill="#FFF" fill-rule="evenodd" transform="translate(12 12)"><use xlink:href="#eukCRya"/><use xlink:href="#eukCRyb"/></g></svg>')

    // {
    //     // optimized SVG data string
    //     data: '<svg width="10" height="20">test</svg>'
    //     // additional info such as width/height
    //     info: {
    //         width: '10',
    //         height: '20'
    //     }
    // }

});
