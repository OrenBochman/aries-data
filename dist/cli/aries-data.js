#!/usr/bin/env node
'use strict';

// Babel up
require('babel-core/register');
require('babel-polyfill');

// Parse arguments.
// var argv = require('minimist')(process.argv.slice(2), {
//     string: ['decider', 'activities', 'domain', 'tasklist'],
// });
//
// Get boot params and fire it up.
// require('./boot').default(argv);

var argv = require('minimist')(process.argv.slice(2), {
    string: ['repo']
});

require('./execute').default(argv).catch(function (e) {
    console.log(e);
});