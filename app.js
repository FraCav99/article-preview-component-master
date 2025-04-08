const popupOpenerBtn = document.getElementById("cta-popup-opener-btn");
const buttonTextLabel = document.getElementById("social-media-popup-btn");

const socialLinkPopup = document.getElementById("cta-popup");
const socialLinks = socialLinkPopup.querySelectorAll("a");

popupOpenerBtn.addEventListener("click", function () {
  toggleSocialPopup(!socialLinkPopup.classList.contains("open"));
});

document.addEventListener("click", function (ev) {
  const target = ev.target;
  if (!socialLinkPopup.contains(target) && !popupOpenerBtn.contains(target)) {
    socialLinkPopup.classList.remove("open");
    socialLinkPopup.removeAttribute("tabindex");

    popupOpenerBtn.setAttribute("aria-expanded", false);
    buttonTextLabel.textContent = "Open Social Media Links Popup";
  }
});

document.addEventListener("keyup", function (ev) {
  if (ev.key === "Escape" && socialLinkPopup.classList.contains("open")) {
    toggleSocialPopup(false);
  }
});

function toggleSocialPopup(shouldBeOpen) {
  socialLinkPopup.classList.toggle("open");
  popupOpenerBtn.setAttribute("aria-expanded", shouldBeOpen);
  buttonTextLabel.textContent = `${
    shouldBeOpen ? "Close" : "Open"
  } Social Media Links Popup`;

  if (shouldBeOpen) {
    socialLinkPopup.setAttribute("tabindex", "0");
    socialLinks.forEach((link) => link.removeAttribute("tabindex"));
    socialLinkPopup.focus();
  } else {
    socialLinkPopup.removeAttribute("tabindex");
    socialLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
    popupOpenerBtn.focus();
  }
}
