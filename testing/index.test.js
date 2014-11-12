var assert = require("assert");
var util = require("util");
var util_browser = require("../index.js");
var util_browser_min = require("../index.min.js");

describe(__filename, function() {
	it("should inspect", function() {
		var temp = { foo : "bar", bar : [1,2], baz : true };
		temp.circle = temp;
		
		var result = util.inspect(temp);
		
		assert.equal(util_browser.inspect(temp), result);
		assert.equal(util_browser_min.inspect(temp), result);
	});
});