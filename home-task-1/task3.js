function solveQuadraticEquation(a,b,c){
	if (a === 0) {
		return "a can't be 0";
		
	}

	let x1, x2;
	let d = b * b - 4 * a * c;
	if (d < 0) {
		return "no solution";
	} else if (d === 0) {
		x1 = x2 = -b / (2 * a);
	} else if (d > 0){
		x1 = (-b - Math.sqrt(d)) / (2 * a);
		x2 = (-b + Math.sqrt(d)) / (2 * a);
		
	}
	return x1 + ', ' + x2;

}

console.log(solveQuadraticEquation(2, 2, 1)); // -1, 2
