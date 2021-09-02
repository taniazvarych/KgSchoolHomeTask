let str = "Today is rainy Sunday";
let str3 ="Full text";




function ellipsis(string, max){
	if (string.length>max) {
    		let str1 = string.slice(0, max-1) + '…';
    		// console.log(str1.length)
			return str1;
	}else{
		return string;
		}
}
console.log(ellipsis(str3, 15));
console.log(ellipsis(str, 15));