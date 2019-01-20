var mapLink = document.querySelector(".modal-button-map")
var mapPopup = document.querySelector(".modal-map")
var mapClose = mapPopup.querySelector(".modal-close-button")

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
})

var contactLink = document.querySelector(".button-write-us")
var contactPopup = document.querySelector(".modal-contact")
var contactClose = contactPopup.querySelector(".modal-close-button")

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
})

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
})

var guaranteeSwitch = document.querySelector(".guarantee-switch")
var deliverySwitch = document.querySelector(".delivery-switch")
var creditSwitch = document.querySelector(".credit-switch")
var guaranteeSlide = document.querySelector(".guarantee")
var deliverySlide = document.querySelector(".delivery")
var creditSlide = document.querySelector(".credit")

/*guaranteeSwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  guaranteeSlide.classList.add("slide-show");
  deliverySlide.classList.remove("slide-show");
  guaranteeSlide.classList.remove("slide-show");  
})*/

guaranteeSwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  guaranteeSwitch.classList.add("active");
  if (deliverySwitch.classList.contains("active")) {
    deliverySwitch.classList.remove("active");
  }
  if (creditSwitch.classList.contains("active")) {
    creditSwitch.classList.remove("active");
  }  
  guaranteeSlide.classList.add("active-slide");
  if (deliverySlide.classList.contains("active-slide")) {
    deliverySlide.classList.remove("active-slide");
  }
  if (creditSlide.classList.contains("active-slide")) {
    creditSlide.classList.remove("active-slide");
  }  
})

deliverySwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliverySwitch.classList.add("active");
  if (guaranteeSwitch.classList.contains("active")) {
    guaranteeSwitch.classList.remove("active");
  }
  if (creditSwitch.classList.contains("active")) {
    creditSwitch.classList.remove("active");
  }
  deliverySlide.classList.add("active-slide");
  if (guaranteeSlide.classList.contains("active-slide")) {
    guaranteeSlide.classList.remove("active-slide");
  }
  if (creditSlide.classList.contains("active-slide")) {
    creditSlide.classList.remove("active-slide");
  }
})

creditSwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditSwitch.classList.add("active");
  if (guaranteeSwitch.classList.contains("active")) {
    guaranteeSwitch.classList.remove("active");
  }
  if (deliverySwitch.classList.contains("active")) {
    deliverySwitch.classList.remove("active");
  }
  creditSlide.classList.add("active-slide");
  if (deliverySlide.classList.contains("active-slide")) {
    deliverySlide.classList.remove("active-slide");
  }
  if (guaranteeSlide.classList.contains("active-slide")) {
    guaranteeSlide.classList.remove("active-slide");
  } 
})