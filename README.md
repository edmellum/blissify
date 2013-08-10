blissify
========

browserify v2 plugin for bliss


## install

```
npm install blissify
```


## usage

create templates using [bliss](https://github.com/cstivers78/bliss/wiki); by default blissify transforms `.html` files

```
@!(name)
<h1>Hello @name!</h1>
```

require and use those templates in your view (backbone) or controller (spine)

```
var template = require('./templates/template.html');

$('body').html(template({name: 'Nali'}));
```

in your `bundler.js` use blissify as a transform

```
var browserify = require('browserify');
var blissify = require('blissify');

var b = browserify();
b.add('/entryIndex.js');
b.transform(blissify());

b.bundle().pipe(process.stdout);
```

bundle it up

```
node bundler
```

**pro tip:** you can pass a custom extension to blissify

```
bundler.transform(blissify('.bliss'));
```


## tests

drink up me 'earties, yo ho!


## license

MIT, see LICENSE
