var myInput = document.getElementById("my-input");

myInput.onfocus = function () {
  "use strict";
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
myInput.onblur = function () {
  "use strict";
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.setAttribute("data-place", "");
};
