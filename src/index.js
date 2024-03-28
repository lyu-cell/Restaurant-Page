import "./style.css"
import {homePage} from "./homePage.js"

const header = (function() {
    
    const header = document.querySelector("header");
    const nav = document.querySelector("nav")

    // create elements here...
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const logo = document.createElement("div");
    const reserveBtn = document.createElement("button");

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
    reserveBtn.textContent = "Reserve"

    header.appendChild(logo)
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)
    nav.appendChild(reserveBtn)
})()