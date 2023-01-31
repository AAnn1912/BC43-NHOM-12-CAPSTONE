var sunHide = document.getElementById("sun");
var moonHide = document.getElementById("moon");

moonHide.className = "sun";
sunHide.className = "moon-hide";

function swItchDark() {
  moonHide.className = "moon-hide";
  sunHide.className = "sun";
}
function swItchLight() {
  moonHide.className = "moon";
  sunHide.className = "sun-hide";
}

window.onscroll = function () {
  var scroll = window.scrollY;

  if (scroll >= 80) {
    document.querySelector("#menu").classList.add("nav-fixed");
  } else {
    document.querySelector("#menu").classList.remove("nav-fixed");
  }
};

//  CHANGE THEME MODE DARK LIGHT

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
