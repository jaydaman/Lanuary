// This is where it all goes :)

function formDisplay() {
  var formExpand = document.getElementById("formFunction");
  if (formExpand.className === "form-container") {
    formExpand.className += " show";
  } else {
    formExpand.className = "form-container";
  }
}
