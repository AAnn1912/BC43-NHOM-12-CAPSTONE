var sunHide = document.getElementById("sun");
var moonHide = document.getElementById("moon");

moonHide.className = "moon";
sunHide.className = "sun-hide";

function swItchDark() {
  moonHide.className = "moon-hide";
  sunHide.className = "sun";
}
function swItchLight() {
  moonHide.className = "moon";
  sunHide.className = "sun-hide";
}
