let cat = {
	name : 'Bertie' , 
	breed : 'Cymric',
	color : 'white' ,
	greeting : function(){
		console.log('Meow!');
	}
}
let catName = cat['name'];
console.log(catName);
cat.greeting();
cat.color ='black';
console.log(cat.color);
