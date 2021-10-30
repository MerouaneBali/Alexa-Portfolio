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

document.querySelectorAll("button").forEach((button) => {
  const hover = gsap.to(button, {
    duration: 0.3,
    scale: 1.08,
    paused: true,
    reversed: true,
    // ease: Power4.easeInOut,
  });

  button.addEventListener("mouseenter", () => hover.play());
  button.addEventListener("mouseleave", () => hover.reverse());
});

let tl = gsap.timeline({});

tl.from("#hero__main-content summary .stagger", {
  duration: 0.5,
  delay: 1,
  opacity: 0,
  y: 30,
  stagger: 0.1,
  ease: Power4.easeOut,
})
  .from(
    "#hero__main-content__pfp",
    {
      // duration: 0.5,
      // opacity: 1,
      // scale: 1,
      keyframes: [
        // { opacity: 0, scale: 0, duration: 1 },
        { opacity: 1, scale: 1.2, duration: 0.7 },
        { opacity: 1, scale: 1, duration: 0.5 },
      ],
      // startAt: { opacity: 0, scale: 0 },
      ease: Power4.easeInOut,
    },
    "-=60%"
  )
  .from("#hero__main-content__pfp g image", {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: Power4.easeOut,
  })
  .from("nav a", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: Power4.easeOut,
  })
  .from(
    "#hero__social img",
    {
      duration: 0.5,
      opacity: 0,
      x: "-100%",
      stagger: 0.1,
      ease: Power4.easeOut,
    },
    "-=50%"
  )
  .from(
    "#hero__scroll-more",
    {
      duration: 0.5,
      opacity: 0,
      y: "100%",
      ease: Power4.easeOut,
    },
    "-=50%"
  );

gsap
  .from("#hero__scroll-more__scroll-wheel", {
    ease: Power4.easeInOut,
    keyframes: [
      { y: -3, duration: 0.3, duration: 0.3 },
      { y: 3, duration: 0.3 },
      { y: 0, duration: 0.3, delay: 0.3 },
      { y: -3, duration: 0.3, duration: 0.3, delay: 0.3 },
      { y: 3, duration: 0.3 },
      { y: 0, duration: 0.3, delay: 0.3 },
    ],
  })
  .repeat(10)
  .repeatDelay(1);

gsap.registerPlugin(ScrollTrigger);

const aboutTimeline = gsap.timeline({});

aboutTimeline
  .from("#about .section-heading *", {
    opacity: 0,
    y: "50%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from("#about article #image", {
    duration: 0.3,
    opacity: 0,
    // x: "50%",
  })
  .from("#about article #biography .stagger", {
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
    y: "100%",
  });

ScrollTrigger.create({
  trigger: "#about",
  start: "top-=1px top",
  animation: aboutTimeline,
});

const skillsTimeline = gsap.timeline({});

skillsTimeline
  .from("#skills .section-heading *", {
    opacity: 0,
    y: "50%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from(".skills__container__details__skill", {
    opacity: 0,
    y: "50%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from(".skills__container__details__skill .progress-bar", {
    width: "0%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from(
    "#skills .container svg",
    {
      duration: 0.3,
      opacity: 0,
    },
    "-=150%"
  );

ScrollTrigger.create({
  trigger: "#skills",
  start: "top-=1px top",
  animation: skillsTimeline,
});

const projectsTimeline = gsap.timeline({});

projectsTimeline
  .from("#projects .section-heading *", {
    opacity: 0,
    y: "50%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from("#projects .splide", {
    opacity: 0,
    // y: "50%",
    // stagger: 0.2,
    duration: 0.3,
  });

ScrollTrigger.create({
  trigger: "#projects",
  start: "top-=1px top",
  animation: projectsTimeline,
});

const testimonialsTimeline = gsap.timeline({});

testimonialsTimeline
  .from("#testimonials .section-heading *", {
    opacity: 0,
    y: "50%",
    stagger: 0.2,
    duration: 0.3,
  })
  .from("#testimonials ul li", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
  });

ScrollTrigger.create({
  trigger: "#testimonials",
  start: "top-=50% top",
  animation: testimonialsTimeline,
});
