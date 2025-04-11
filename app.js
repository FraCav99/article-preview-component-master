const popupOpenerBtn = document.getElementById("cta-popup-opener-btn");
const buttonTextLabel = document.getElementById("social-media-popup-btn");

const socialLinkPopup = document.getElementById("cta-popup");
const socialLinks = socialLinkPopup.querySelectorAll("a");

popupOpenerBtn.addEventListener("click", function () {
  const isPopupClose = socialLinkPopup.getAttribute("aria-hidden") === "true";
  if (isPopupClose) {
    openPopup();
  } else {
    closePopup();
  }
});

document.addEventListener("click", function (ev) {
  const target = ev.target;
  const clickedOutsidePopup =
    !socialLinkPopup.contains(target) && !popupOpenerBtn.contains(target);
  const isPopupOpen = socialLinkPopup.getAttribute("aria-hidden") === "false";

  if (clickedOutsidePopup && isPopupOpen) {
    closePopup();
  }
});

document.addEventListener("keyup", function (ev) {
  const isPopupOpen = socialLinkPopup.getAttribute("aria-hidden") === "false";
  if (ev.key === "Escape" && isPopupOpen) {
    closePopup();
  }
});

socialLinkPopup.addEventListener("keydown", function (evt) {
  if (evt.key !== "Tab") {
    return;
  }

  const active = document.activeElement;
  const firstLink = socialLinks[0];
  const lastLink = socialLinks[socialLinks.length - 1];

  if (evt.shiftKey) {
    if (firstLink === active) {
      evt.preventDefault();
      lastLink.focus();
    }
  } else if (lastLink === active) {
    evt.preventDefault();
    popupOpenerBtn.focus();
  }
});

function openPopup() {
  popupOpenerBtn.setAttribute("aria-expanded", true);
  buttonTextLabel.textContent = "Close Social Media Links Popup";

  socialLinkPopup.setAttribute("aria-hidden", false);
  socialLinkPopup.setAttribute("tabindex", "0");
  socialLinkPopup.focus();

  socialLinks.forEach((link) => {
    link.removeAttribute("tabindex");
    link.removeAttribute("aria-hidden");
  });
}

function closePopup() {
  popupOpenerBtn.setAttribute("aria-expanded", false);
  buttonTextLabel.textContent = "Open Social Media Links Popup";
  popupOpenerBtn.focus();

  socialLinkPopup.setAttribute("aria-hidden", true);
  socialLinkPopup.removeAttribute("tabindex");
  socialLinks.forEach((link) => {
    link.setAttribute("tabindex", "-1");
    link.setAttribute("aria-hidden", true);
  });
}
