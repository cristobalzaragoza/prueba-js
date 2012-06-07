if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(arr) {
	var test = "";
	for(var i=0; i<arr.length; i++){
		if((i % 2) != 0) test += ", ";
		test += arr[i];
	}
	return test;
    },

    speak : function(fn, obj) {
	return fn.call(obj);	
    },

    functionFunction : function(fn1) {
  	var fn3 = function(fn2) { return fn1 + ', ' + fn2; };
  	return fn3;
    },

    partial : function(fn, greeting, name) {
  	var fnp = function(end) { return fn(greeting, name, end); };
  	return fnp;
    },

    useArguments : function() {
    	var total = 0;
    	for(var i = 0; i<arguments.length; i++)
		total += arguments[i];
	return total;
    },

    callIt : function() {

    },

    curryIt : function(fn, x, y, z) {
	
    },

    makeClosures : function() {

    }
  };
});
