/* light/dark mode toggle */  /* timestamp on button to prevent DOS */
var themeToggleBtn = document.getElementById("theme-toggle");
var root = document.querySelector('html');
var clipP = document.querySelector('#clip')
function themeToggle() {
    console.log("toggle pressed");
    themeToggleBtn.classList.toggle("dark-mode");
    root.classList.toggle("dark-mode");
    clipP.classList.toggle("dark-mode");

    let pressed = (themeToggleBtn.getAttribute("aria-pressed") === "true");
   /* Change aria-pressed to the opposite state */
    themeToggleBtn.setAttribute("aria-pressed", !pressed);
}
/* burger-menu */
const btn_open_menu = document.getElementById("btn-open-menu");
const stripe_1 = document.querySelector(".stripe1");
const stripe_2 = document.querySelector(".stripe2");
const stripe_3 = document.querySelector(".stripe3");
const menu = document.getElementById("menu");

function openMenu(){
    stripe_1.classList.toggle("menu-closed");
    stripe_2.classList.toggle("menu-closed");
    stripe_3.classList.toggle("menu-closed");
    menu.classList.toggle("hide-menu");
    menu.classList.toggle("show-menu");

    let pressed = (btn_open_menu.getAttribute("aria-pressed") === "true");
   /* Change aria-pressed to the opposite state */
    btn_open_menu.setAttribute("aria-pressed", !pressed);
}
/* cookie banner */
const closeCookieBanner = document.querySelector("#cookie-banner");
const cookieCircle = document.querySelector("#cookie-circle");
closeCookieBanner.addEventListener("click", closingCookieBanner);
function closingCookieBanner(){
    cookieCircle.classList.add("closing");
}
/* time-out for theme toggle btn and menu open-close btn */
themeToggleBtn.addEventListener("click", smallTimeOut);
btn_open_menu.addEventListener("click", smallTimeOut);
/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button */
function smallTimeOut(){
    this.disabled = true;
    window.setTimeout(() => this.disabled = false, 1500);
}
/* close menu after click on menu item */
menu.addEventListener("click", openMenu);