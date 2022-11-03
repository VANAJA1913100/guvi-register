function myFunction() {
  var txt;
  if (confirm("You registered successfully!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}