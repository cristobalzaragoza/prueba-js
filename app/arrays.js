if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
	for(var i=0; i<arr.length; i++) 
		if(item == arr[i])
			return i;
    },

    sum : function(arr) {
	var total = 0;
	for(var i=0; i<arr.length; i++)
		total += arr[i];
	return total;
    },

    remove : function(arr, item) {
	var test = new Array();
	var j = 0;
	for(var i=0; i<arr.length; i++)
		if(item != arr[i]){
			test[j] = arr[i];
			j++;
		}
	return test;
    },

    append : function(arr, item) {
	arr.push(item);
	return arr;
    },

    truncate : function(arr) {
	var test = new Array();
	for(var i=0; i<(arr.length - 1); i++)
		test[i] = arr[i];
	return test;	
    },

    concat : function(arr1, arr2) {
	var test = new Array();
	for(var i=0; i<arr1.length; i++)
		test[i] = arr1[i];
	var j = i;
	for(var i=0; i<arr2.length; i++){
		test[j] = arr2[i];
		j++;
	}
	return test;
    },

    insert : function(arr, item, index) {
    	var j = 0;
    	var test = new Array();
	for(var i=0; i<arr.length; i++){
		if(i == index){
			test[j] = item;
			j++;
		} 
		test[j] = arr[i];
		j++;
	}
	return test;
    },

    count : function(arr, item) {
	var total = 0;
	for(var i=0; i<arr.length; i++)
		if(item == arr[i])
			total++;
	return total;
    },

    duplicates : function(arr) {
	arr = arr.sort();
	var test = new Array();
	for(var i=0; i<(arr.length - 1); i++)
 		if(arr[i + 1] == arr[i])
        		test.push(arr[i]);
        return test;
    },

    square : function(arr) {
    	for(var i=0; i<arr.length; i++)
    		arr[i] = Math.pow(arr[i],2);
	return arr;
    },

    findAllOccurrences : function(arr, target) {
    	var j = 0;
    	var test = new Array();
	for(var i=0; i<arr.length; i++){
		if(arr[i] == target){
			test[j] = i;
			j++;
		} 
	}
	return test;
    }
  };
});
