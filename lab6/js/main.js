let navButton = document.querySelector(".navbar-toggler");
let icon = document.querySelector(".navbar-toggler-icon");

function navIcon() {
  switch (navButton.getAttribute("aria-expanded")) {
    case "false": {
      icon.classList.add("clicked");
      break;
    }
    case "true": {
      icon.classList.remove("clicked");
      break;
    }
  }
}

navButton.onclick = navIcon;
