let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function sumList(list) {
  let element = list;
   let sum = 0;
  while (element) {
   sum +=element.value;
    element = element.next;
  }
return sum;
}

function sumList2(obj) {

let sum = 0;
 
 if (!obj) 
  return sum;
for (let subObj of Object.values(obj)) {
  if (typeof subObj === "number") {
    sum += subObj;
  } else {
    sum += sumList2(subObj);
  }
}

return sum;
}



console.log(sumList(list));

console.log(sumList2(list));