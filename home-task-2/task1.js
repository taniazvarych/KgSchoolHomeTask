let sum = { a : 1, b : 2 };
let sum2 = {c : 3};

let sum3 = { a : 1, b : 2 };
let sum4 = { a : 3, c : 3};

let sum5 = { a : false, b : null };
let sum6 = { a : true, b : 2, c : 3};

let sum7 = { a : 1, b : 2};
let sum8 = 'test';

function extend(arr, arr1) {
	if (typeof arr === "object" && typeof arr1 === "object"){

		for (let key in arr1) {
			if (key in arr){
				delete arr1[key];
			}
		}

			Object.assign (arr, arr1);
			return arr;
	}
	else if(typeof arr === "object")
		return arr;
			
	else if(typeof arr1 === "object")
		return arr1;
				
}
console.log(extend(sum, sum2));
console.log(extend(sum3, sum4));
console.log(extend(sum5, sum6));
console.log(extend(sum7, sum8));
