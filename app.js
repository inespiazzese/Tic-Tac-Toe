var counter = 0;
var getId = (id) => {
  console.log(id);
  var element = document.getElementById(id).getAttribute("value");
  console.log(element);
  if (element === "0") {
    if (counter % 2 === 0) {
      $("#" + id).append("X");
      document.getElementById(id).setAttribute("value", 1);
      counter++;
      console.log(document.getElementById(id).getAttribute("value"));
    } else {
      $("#" + id).append("O");
      document.getElementById(id).setAttribute("value", 1);
      counter++;
    }
  } else {
    alert("already filled ");
  }
};
