let firstName = prompt("what is your name?");
let age = prompt("what is your age? ");
let email = prompt("what is tour email?");
let gander = prompt("what is your gander? , male / famale");
let m = "male";
let f = "famle";
if (gander === m) {
  alert("ברוך הבא" + " " + firstName);
} else {
  alert("ברוכה הבאה" + " " + firstName);
}

let subscribe = confirm("would you like to subscribe to our newsletter?");

if (subscribe === true) {
  alert("thank you your email  was registered😊");
}
if (subscribe === false) {
  alert("your lost🙄");
}
if (!Number.isNaN(age)) {
}
if (age < 15) {
  alert("You will have to come with one of the parents");
}
if (age > 15 && age < 18) {
  alert("You will need a parent signature");
}
if (age > 18 && age < 120) {
  alert("You are considered an adult");
}
if (age >= 120) {
  alert("hope you are in haven😇");
}
