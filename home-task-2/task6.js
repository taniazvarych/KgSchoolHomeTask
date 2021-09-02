function Vector(coord) {
	this.vectorCoord = coord;
	

	 this.add = function(obj) {
	 	if (this.vectorCoord.length !== obj.vectorCoord.length) {
		return 'error';
		}
	 	const sum =[];
		 for (let i=0; i !== this.vectorCoord.length; i++){
		 	sum.push(this.vectorCoord[i] + obj.vectorCoord[i]);
		 }
		return sum;
	 },
	 this.subtract = function(obj) {
	 	if (this.vectorCoord.length !== obj.vectorCoord.length) {
		return 'error';
		}
	 		const sum =[];
		 	for (let i=0; i !== this.vectorCoord.length; i++){
		 	sum.push(this.vectorCoord[i] - obj.vectorCoord[i]);
		 	}
			return sum;
	},
	this.dot = function(obj) {
		if (this.vectorCoord.length !== obj.vectorCoord.length) {
		return 'error';
		}
	 		let sum = 0;
		 	for (let i=0; i !== this.vectorCoord.length; i++){
		 	sum += this.vectorCoord[i] * obj.vectorCoord[i];
		 	}
			return sum;
	},
		this.toString =function() {
			return this.vectorCoord.toString();
		}

}
const a = new Vector([1, 2, 3]);
const b = new Vector ([3, 4, 5]);
const c = new Vector ([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.add(c));

