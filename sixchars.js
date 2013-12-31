

var maxValue = 1073741823;

module.exports = SixChars;
function SixChars(chars){
	if(!(this instanceof SixChars)) return new SixChars(chars);

	if(chars.length!==32)
		throw new Error("chars *must* be 32 characters");

	chars.split('').sort(function(a,b){
		if(a===b) throw new Error('Cannot have duplicate characters');
		return a<b;
	});

	this.chars = chars;
}

SixChars.prototype = {
	generate: function generate(number) {
		var s = number;
		if (typeof number != "number")
			throw new Error("The value must be a number");
		if (number > maxValue)
			throw new Error("Value too large for a 6 digit code.");
		if (number < 0)
			throw new Error("Value must be positive number");

		var temp = [];
		var last5bits;
		var first = 0;
		var start = 0;
	
		for (var i = 0; i < 6; i++) {
			last5bits = number & 0x1f;
			start = ((i * 5) + first) % 32;
			if (i == 0) first = last5bits;
			temp[i] = this.chars[(last5bits + start) % 32];
			number = number >> 5;
		}
		return temp.join('');
	},
	parse: function parse(code) {
		if (!code || code.length != 6)
			return false;
	
		code = code.toUpperCase();
	
		var first = 0;
		var returnVal = 0;
		var start = 0;
	
		for (var i = 0; i < 6; i++) {
			var value = this.chars.indexOf(code[i]);
			if (value == -1)
				return false;
	
			start = ((i * 5) + first) % 32;
			if (i == 0) first = value;
			value = (value + 32 - start) % 32;
			value = value << (i * 5);
			returnVal = returnVal | value;
		}
		return returnVal;
	}
};
