function toggleMenu() {
  var nav = document.querySelector("nav");

  nav.classList.contains("responsive")
    ? nav.classList.remove("responsive")
    : nav.classList.add("responsive");
}

const navItems = document.querySelectorAll("nav a");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    const targetSectionId = navItem.dataset.targetSection;

    const targetSection = document.querySelector(`#${targetSectionId}`);

    targetSection
      ? window.scrollTo(0, targetSection.offsetTop)
      : window.scrollTo(0, 0);
  });
});

const contactModal = document.getElementById("contact-modal");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

const openContactModal = () => {
  contactModal.style.display = "block";
  disableScroll();
};

const closeContactModal = () => {
  contactModal.style.display = "none";
  enableScroll();
};

window.onclick = function (event) {
  if (event.target == contactModal) {
    event.target.style.display = "none";
    enableScroll();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    arrows: !(window.innerWidth <= 800),
  });
  splide.mount();
});
