blissify
========

browserify v2 plugin for bliss


## install

```
npm install blissify
```


## usage

1. create templates (default `.html` extensions) using [bliss](https://github.com/cstivers78/bliss/wiki)

```
@!(name)
<h1>Hello @name!</h1>
```

2. require and use those templates in your view (backbone) or controller (spine)
```
var template = require('./templates/template.html');

$('body').html(template({name: 'Nali'}));
```

3. in your `bundler.js` use blissify as a transform
```
var browserify = require('browserify');
var blissify = require('blissify');
var fs = require('fs');
var path = require('path');

var bundler = browserify('/index.js');
bundler.transform(blissify());

var out = fs.createWriteStream(path.resolve(__dirname, 'bundle.js'));
var stream = bundler.bundle();
out.write(stream);
```

4. bundle it up
```
node bundle
```


## tests

drink up me 'earties, yo ho!


## license

MIT, see LICENSE