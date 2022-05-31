var allowed=$('.dropdown-content-allowed');

function dropAllowed(){
  allowed.toggleClass("displaynone");
}

var domestic=$('.dropdown-content-domestic');

function dropDomestic() {
  domestic.toggleClass("displaynone");
}

var dropdowncontainer=$('.dropdown-content');

function myFunction() {
  dropdowncontainer.toggleClass("displaynone");

}
var dropdowncontentcompanies=$('.dropdown-content-companies');

function largecompanies(){
  dropdowncontentcompanies.toggleClass("displaynone");
}



var jolly=$('.jolly').text();
var darrel=$('.darrel').text();
var bugs=$('.bugs').text();
var buttons=$('.buttons').text();

var application=$('.finish');

application.on("click", submit);

function submit() {
  event.preventDefault();

  var name=$('.name').val();
  var choice=$('input[name="choice"]:checked').val();
  var animalName=$('.animalName').val();
  var date=$('.date').val();
  var time=$('.time').val();

if (animalName==="Jolly") {
  var shelter=jolly;
}
else if (animalName==="Darrel") {
  var shelter=darrel;
}
else if (animalName==="Bugs") {
  var shelter=bugs;
}
else if (animalName==="Buttons") {
  var shelter=buttons;
}
else {
  alert("Error. Request not processed. Check capitalization or spelling and try again.")
}

  alert(`${name} has successfully set up a meeting with ${animalName} in ${shelter} on ${date} at ${time} for ${choice}!`)
}

//slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

