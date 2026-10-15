"use strict";

const menuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#navigation-mobile");

if (menuButton && mobileNavigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute(
      "aria-label",
      isExpanded ? "Ouvrir le menu" : "Fermer le menu"
    );
    mobileNavigation.hidden = isExpanded;
  });

  mobileNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavigation.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}
