// import css
// import './pages/index.css' postcss export css file directly inside the dist. It loads faster in this way
// importing scripts
import menuextend from "../js/menuappear.js"
import insertmyurl from "../js/insertmyurl.js";
import altAttribution from "../js/automaticAlt.js";
import whatsattrib from "../js/whatsaopAttribution.js";
import socialattribution from "../js/socialattribution.js"
import contact from "../js/contactModule.js";
import firstCaracterAppears from "../js/firstCaracterAppears.js";
import scrollHeaderBgChanger from "../js/scrollHeaderBgChanger.js";


const menuIcon = document.querySelector('#menuIcon');
const contactButton = document.querySelector('#contact-button');

  // this is getting the url of the page
  const page = window.location.href;
  const exclusion = ['contatti, clienti']
// this is a function that handles the eventListeners depending by the page
const homeEventHandler = () => {

if (page.includes('index.html') || !page.includes(exclusion)) {
  window.addEventListener('load', firstCaracterAppears()

 )
} else if (page.includes("contatti")) {

  contactButton.addEventListener('click', contact);
} else {

}
};

// eventListeners
menuIcon.addEventListener('click', menuextend);
// Add scroll Event after DOM is fully charged 
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', scrollHeaderBgChanger);
});
window.addEventListener('load', () => {
  
  insertmyurl();
  altAttribution();
  whatsattrib();
  socialattribution();
  homeEventHandler();
})

// cookie buttons selectors 
const consent = document.querySelector('#giveconsent');
const hide = document.querySelector('#hidecookiebanner');

// cookie functions

  // Function to set the cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }
  // Function to get the cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }
  // Fn to hide cookie banner
  function hideCookieBanner() {
    var cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
  }
  // fn to show the cookie banner only if it didn't show before
  function showCookieBanner() {
    var cookieConsent = getCookie("cookie_consent");
    if (!cookieConsent) {
      var cookieBanner = document.getElementById("cookie-banner");
      if (cookieBanner) {
        cookieBanner.style.display = "block";
      }
    }
  }
  // cookie functions - END
  // Show cookie banner onLoad
  document.addEventListener("DOMContentLoaded", function() {
    getCookie()
    showCookieBanner();
  });
 // Fn to give consent and hide the banner 
 function giveConsent() {
    setCookie("cookie_consent", true, 365); // Imposta il cookie di consenso per 365 giorni
    hideCookieBanner();
  }
//cookie reject or consent
consent.addEventListener('click', giveConsent)
hide.addEventListener('click', hideCookieBanner)

