if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(a, b) {

	var obj = function (a, b) {
		this.greeting = a;
      		this.name = b;
	};	
	
	obj.prototype.sayIt = function () {
        	return this.greeting + ", " + this.name;
	}

	return new obj(a, b);

    }
  };
});

