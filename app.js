const popupOpenerBtn = document.getElementById("cta-popup-opener-btn");
const socialLinkPopup = document.getElementById("cta-popup");
const buttonTextLabel = document.getElementById("social-media-popup-btn");

popupOpenerBtn.addEventListener("click", function () {
  toggleSocialPopup(!socialLinkPopup.classList.contains("open"));
});

document.addEventListener("click", function (ev) {
  const target = ev.target;
  if (!socialLinkPopup.contains(target) && !popupOpenerBtn.contains(target)) {
    socialLinkPopup.classList.remove("open");
    popupOpenerBtn.setAttribute("aria-expanded", false);
    buttonTextLabel.textContent = buttonTextLabel.textContent.replace(
      "Close",
      "Open"
    );
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
  if (shouldBeOpen) {
    buttonTextLabel.textContent = buttonTextLabel.textContent.replace(
      "Open",
      "Close"
    );
  } else {
    buttonTextLabel.textContent = buttonTextLabel.textContent.replace(
      "Close",
      "Open"
    );
  }
}
