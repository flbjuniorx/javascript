const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "br",
    utilsScript:
       "./assets/libs/intl-tel-input/js/utils.js",
   });