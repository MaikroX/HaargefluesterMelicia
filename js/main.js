/**
 *
 * This Function shows or hide an arrow to scroll up if the window is scrolled down for 200px
 */

var myScrollFunc = function () {
  let myID = document.getElementById("arrowUp");
  var y = window.scrollY;
  console.log("Das ist meine Id", myID);
  if (y >= 200) {
    myID.className = "scroll-up show";
  } else {
    myID.className = "scroll-up hide";
  }
};
window.addEventListener("scroll", myScrollFunc);
