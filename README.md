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

## API ##

### Generators ###

**generator(dictionaries, options)**

Create a new `Generator`. When a new name is generated, a word is
chosen from each item in `dictionaries` in order.

Each dictionary may be a `Dictionary` instance, a string path to a
file of words separated by spaces or newlines, or a function that
should return a `Dictionary` when called.

The `options` are optional and are passed along to the new
`Generator` and any new `Dictionary`. They default to:

    {
      maxSize: undefined,
      encoding: 'utf-8',
      glue: '-'
    }

**Generator(options)**

A name generator. Be sure to `.use()` some dictionaries
afterward. Options may include:

    {
      glue: '-'
    }

**generator.use(dictionary, options)**

Add a new dictionary to this generator. When a new name is generated,
a word is chosen from each dictionary in order.

The `dictionary` may be a `Dictionary` instance, a string path to a
file of words separated by spaces or newlines, or a function that
should return a `Dictionary` when called. The `options` are passed
along to each newly-constructed `Dictionary`.

**generator.choose()**

Create a new name.

### Dictionaries ###

**adjective(options)**

Create a `Dictionary` of using the builtin adjectives list.

**noun(options)**

Create a `Dictionary` of using the builtin noun list.

**verb(options)**

Create a `Dictionary` of using the builtin verb list.

**read(path, options)**

Create a `Dictionary` by reading words from a file. The file should be
a list of words separated by spaces or newlines.

**Dictionary()**

A dictionary is a list of words.

**dict.read(path, options)**

Load words from `path` into this dictionary. Options default to:

    {
      maxSize: undefined,
      encoding: 'utf-8',
    }

Words larger than `maxSize` are ignored.

**dict.choose()**

Return a random word from this dictionary.



