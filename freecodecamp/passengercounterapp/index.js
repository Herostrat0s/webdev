// document.getElementById("count-el").innerText = 5;

// let count = 0;
//
// console.log(count);

// let myAge = 23;
//
// let humanDogRatio = 7;
//
// let mydogAge = myAge * humanDogRatio;
//
// console.log(mydogAge);

// initalize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}

function reset() {
  count = 0;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  console.log(count);
}
