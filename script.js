//Assigns elements to a variable that we can modify and add attributes to.
var lightbulbImage = document.getElementById('myImage');
var onButton = document.getElementById('onButton');
var offButton = document.getElementById('offButton');
var body = document.body;

/* Assignes functionality to the buttons so that the lightbulb image   
 * changes when you click a button
 */
onButton.addEventListener("click", lightbulbOn);
offButton.addEventListener("click", lightbulbOff);

//Changes the image of the lightbulb image to the "on" version.
function lightbulbOn() {
	lightbulbImage.src='Images/pic_bulbon.gif';
	body.style.backgroundColor = "cornsilk";
}

//Changes the image of the lightbulb image to the "off" version.
function lightbulbOff() {
	lightbulbImage.src='Images/pic_bulboff.gif';
	body.style.backgroundColor = "grey";
}

//Displays different elements when navigation bar buttons are clicked.
function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("language");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  lightbulbOff();
}