const data = { a:1, b:2 };
function deleteProperty(obj, prop){
	delete obj[prop];
	return obj;

}



console.log(deleteProperty(data,'b'));