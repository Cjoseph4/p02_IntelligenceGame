/* Written by: Cory Joseph 
 *
 *  This file contains all of the javascript functions for
 *  my intelligence game website.
 *
 */
 
function inputChecker(num1) {
	if (num1 == 4) {
      var x = "Correct!";
	  sessionStorage.counter = 1;
	} else if (isNaN(num1)) {
	  var x = "Must be a number";
	} else {
	  var x = "Incorrect";
	}
    document.getElementById("check").innerHTML = x;
}

function inputChecker2(num2) {
if (!sessionStorage.counter) {
	sessionStorage.counter = 0;
}
	if (num2 == 41) {
      var x = "Correct!";
	  sessionStorage.counter = Number(sessionStorage.counter)+1;
	} else if (isNaN(num2)) {
	  var x = "Must be a number";
	} else {
	  var x = "Incorrect";
	}
    document.getElementById("check").innerHTML = x;
}

function inputChecker3(num3) {
if (!sessionStorage.counter) {
	sessionStorage.counter = 0;
}
	if (num3 == 15101051) {
      var x = "Correct!";
	  sessionStorage.counter = Number(sessionStorage.counter)+1;
	} else if (isNaN(num3)) {
	  var x = "Must be a number";
	} else {
	  var x = "Incorrect";
	}
    document.getElementById("check").innerHTML = x;
}

function calculate() {
    if (!sessionStorage.counter) {
      sessionStorage.counter = 0;
    }
	var x = (Number(sessionStorage.counter) / 3) * 100;
	var x = x.toPrecision(4);
	document.getElementById("Result").innerHTML = "You scored: "+ x +"%";
}

function reset() {
	sessionStorage.counter = 0;
}


















