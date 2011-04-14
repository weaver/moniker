# Moniker #

A random name generator for Node.js.

## Synopsis ##

To use Moniker, create a generator. Generators create random names
using dictionaries. Moniker has built-in `noun`, `verb`, and
`adjective` dictionaries, or you can create your own.

    var Moniker = require('moniker');
    var names = Moniker.generator([Moniker.adjective, Moniker.noun]);
    console.log(names.choose());

    // Example output: murky-hands

## Installation ##

Install Moniker using NPM:

    npm install moniker

