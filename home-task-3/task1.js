const myObj = { name: "Obj", length: 2 };



function transformObject(myObj){
		let map = Object.entries(myObj).map(([key, value]) => [value, key]);

		return Object.fromEntries(map);

}
console.log(transformObject(myObj));