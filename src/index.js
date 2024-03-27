import "./style.css"

function header() {
    
    const header = document.querySelector("header");
    const navBar = document.querySelector("nav");
    
    // elements are created here...
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const headLogo = document.createElement("div")
    const reserve = document.createElement("button")

    homeBtn.classList.add("homeBtn");
    menuBtn.classList.add("menuBtn");
    contactBtn.classList.add("contactBtn");
    headLogo.classList.add("headLogo");
    reserve.classList.add("reserve")

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "contact";
    headLogo.textContent = "Lyu&Lunches";
    reserve.textContent = "Reserve"

    navBar.appendChild(homeBtn)
    navBar.appendChild(menuBtn)
    navBar.appendChild(contactBtn)
    navBar.appendChild(reserve)
    header.appendChild(headLogo)
}

header()