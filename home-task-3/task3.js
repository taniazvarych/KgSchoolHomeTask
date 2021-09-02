let arr = [1, 3, 6, [11, 12], [15, [19, 23]]];

function flatten(array){

	return array.reduce(function(a, b) {
		if (Array.isArray(b)) {  
		 	return a.concat(flatten(b));
		} else {
		
  			return a.concat(b);
		}

	},[]);

}

console.log(flatten(arr));