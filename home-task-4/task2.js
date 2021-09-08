function makeGroup() {
  let units = [];

  //let i = 0;
  for (let i = 0; i <= 10; i++) {
    let unit = function() { // create a unit function
      console.log(i); // that should show its number
    };
    units.push(unit); // add it to the array
  }

  // ...and return the array of units
  return units;
}

let group = makeGroup();
group[2]();