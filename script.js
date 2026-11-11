// NICA TECH CONCEPT — navigation and motion behaviour
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Reveal selected content as it enters the viewport.
const revealTargets = document.querySelectorAll(
  ".tech-card, .process-step, .project-feature, .stats-row, .section-heading, .contact-panel"
);
revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("visible"));
}

// Pause the continuous disciplines ticker when the page is not visible.
const marquee = document.querySelector(".marquee-track");
document.addEventListener("visibilitychange", () => {
  if (marquee) marquee.style.animationPlayState = document.hidden ? "paused" : "running";
});

// Keep the current year accurate without editing the footer manually.
const yearText = document.querySelector(".footer-bottom span");
if (yearText) yearText.textContent = `© ${new Date().getFullYear()} NICA TECH CONCEPT. All rights reserved.`;
