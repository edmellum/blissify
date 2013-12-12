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
var template = require('template.html');

$('body').html(template({name: 'Nali'}));
```

install blissify locally to your project

```
npm install blissify
```

use it as Browserify transform module with `-t`

```
browserify -t blissify main.js > bundle.js
```

in your `bundler.js` use blissify as a transform

```
var browserify = require('browserify');
var blissify = require('blissify');

var b = browserify();
b.add('view.js');
b.transform(blissify);

b.bundle().pipe(process.stdout);
```

bundle it up

```
node bundler
```

**pro tip:** you can configure a custom extension for blissify

```
bundler.transform(blissify.configure('.bliss'));
```

## debug

to set the compiler in debug mode, set `verbose=true` when instatiating blissify

```
var blissify = require('blissify');
blissify.verbose = true;
```

when enabled, debug mode will `console.error` whenever a parse error occurs. this is super helpful if you're using [watchify](https://github.com/substack/watchify).

the log will look like:

```
[blissify] error: <badTemplate.html>
<errorStackTrace>
```

(note that when in debug mode, an error is not passed to the `through` stream.)


## tests

drink up me 'earties, yo ho!


## license

MIT, see LICENSE
