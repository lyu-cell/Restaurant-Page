import "./style.css"
import {homePage} from "./homePage.js"
import {menuPage} from "./menu.js"
import {contactPage} from "./contact.js";

const header = (function() {
    
    const header = document.querySelector("header");
    const nav = document.querySelector("nav")

    // create elements here...
    const homeBtn = document.createElement("div");
    const menuBtn = document.createElement("div");
    const contactBtn = document.createElement("div");
    const logo = document.createElement("div");
    const reserveBtn = document.createElement("div");

    // classes are added here...
    homeBtn.classList.add("homeBtn");
    menuBtn.classList.add("menuBtn");
    contactBtn.classList.add("contactBtn");
    logo.classList.add("logo");
    reserveBtn.classList.add("reserve");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact"
    logo.textContent = "Lyu&Lunch"
    reserveBtn.textContent = "Reserve A Seat"

    header.appendChild(logo)
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)
    nav.appendChild(reserveBtn)
})()


const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")

homePage()

homeBtn.addEventListener("click", () => {
    homePage()
})

menuBtn.addEventListener("click", () => {
    menuPage()
})

contactBtn.addEventListener("click", () => {
    contactPage()
})
