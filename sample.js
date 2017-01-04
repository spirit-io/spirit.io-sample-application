"use strict";
const config = require('./lib/config').config;
let MyServer = require('./lib/app').MyServer;
new MyServer(config).init().start(config.port);