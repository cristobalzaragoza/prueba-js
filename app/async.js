define(function() {
  return {
    async : function() {
    	var obj = $.Deferred();
	setTimeout(function(){ obj.resolve(true); }, 50);
	return obj.promise();
    },

    manipulateRemoteData : function() {
    	
    	var then = function(){
	
		var get = $.ajax({
			url: arguments[0]
		});

		var test = new Array();
		get.done(function(response){  
			for (var person in response.people)
				test.push(response.people[person].name);
		});

		return test.join(' ');
	}

    }
  };
});
