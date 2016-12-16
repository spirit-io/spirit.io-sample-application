"use strict";
const fpromise = require('f-promise');
const config = require('./lib/config').config;

let SampleApp = require('./lib/app').SampleApp;
let app = new SampleApp(config).init();
app.on('initialized', () => {
    fpromise.run(() => {
        app.start(config.expressPort);
    }).catch(err => {
        console.error(err.stack);
    });
});