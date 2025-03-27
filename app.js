const popupOpenerBtn = document.getElementById("cta-popup-opener-btn");
const socialLinkPopup = document.getElementById("cta-popup");

let isPopupOpen = false;

popupOpenerBtn.addEventListener("click", toggleSocialPopup);

document.addEventListener("click", function (ev) {
  const target = ev.target;
  if (!socialLinkPopup.contains(target) && !popupOpenerBtn.contains(target)) {
    isPopupOpen = false;
    socialLinkPopup.classList.remove("open");
    popupOpenerBtn.setAttribute("aria-expanded", false);
  }
});

document.addEventListener("keyup", function (ev) {
  if (ev.key === "Escape" && isPopupOpen) {
    toggleSocialPopup();
  }
});

function toggleSocialPopup() {
  isPopupOpen = !isPopupOpen;
  socialLinkPopup.classList.toggle("open");
  popupOpenerBtn.setAttribute("aria-expanded", isPopupOpen);
}
