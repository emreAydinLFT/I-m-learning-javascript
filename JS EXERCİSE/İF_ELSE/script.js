/* let age = prompt("Enter your age:");

if (age > 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You need to wait ${18 - age} more years to drive.`);
}
*/

let not = prompt("Please enter your lesson note:");

if (not <= 100 && not >= 80) {
  console.log("A");
} else if (not <= 79 && not >= 70) {
  console.log("B");
} else if (not <= 69 && not >= 60) {
  console.log("C");
} else if (not <= 59 && not >= 50) {
  console.log("D");
} else if (not <= 49 && not >= 0) {
  console.log("F");
} else {
  console.log("Girilen değerde hata var");
}
