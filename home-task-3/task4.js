const array = [1,3,4,2,3,1,4,5];

function uniqueArray(arr){
	let set = Array.from(new Set(arr)).sort((a, b) => a - b);
	return set;
}

console.log(uniqueArray(array));