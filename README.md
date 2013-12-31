SixChars
========

SixChars is light-weight code that generates a random looking
string that represents a number (between 0 and 1,073,741,823).

It is useful for things like referral links or invite codes.

For example, you can embed a referrer's userid like this:<br>
http://example.com/welcome/LK8HBY

** This is NOT for secure encryption! **


```javascript
var key = "WLZFX9KSEJG8647AHM5CQB3TPVY20RND";
var sixchars = require("./sixchars")(key);

console.log(sixchars.generate(1));
// LK8HBY

console.log(sixchars.parse("LK8HBY"));
// 1
```
...thats pretty much all there is.


### Keys
You need to provide the SixChars constructor a 32 unique character key.

Don't feel like crafting the key yourself? Here- run this:

```javascript
var chars = '023456789ABCDEFGHJKLMNPQRSTVWXYZ';

var a = chars.split('');

//credit for randomizer goes to: http://stackoverflow.com/a/3943985
var n = a.length;

for(var i = n - 1; i > 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
}
console.log(a.join(''));
```

License
-------
The MIT License (MIT) Copyright (c) 2014 William Wicks

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
