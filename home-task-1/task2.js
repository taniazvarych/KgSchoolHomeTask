function drawChessboard(){

	for (let i=1; i <= 8; i++) {
		let row = ''
		for (let j = 1; j <=8; j++) {
			row += (j + i) % 2 ? 'b' : 'w';
		}
		console.log(row);
	}
}
	

drawChessboard(); 
