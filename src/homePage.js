function homePage() {
    
    // get elements here...
    const content = document.querySelector("#content");

    // elements are created here...
    const headlineContainer = document.createElement("div")
    const headline = document.createElement("div");
    const extraHerLine = document.createElement("div");
    const orderBtn = document.createElement("button")
    const subContainer = document.createElement("div")


    // classes to elements are added here...
    headline.classList.add("headline");
    extraHerLine.classList.add("extraHeadline")
    headlineContainer.classList.add("headlineContainer")
    orderBtn.classList.add("orderBtn")
    subContainer.classList.add("subContainer")

    headline.textContent = "Welcome To Lyu&Lunch"
    extraHerLine.textContent = "Order Which Ever item You Like From Our Vast Menu"
    orderBtn.textContent = "Order Now"

    content.appendChild(subContainer)
    subContainer.appendChild(headlineContainer)
    headlineContainer.appendChild(headline)
    headlineContainer.appendChild(extraHerLine)
    headlineContainer.appendChild(orderBtn)

}

export {homePage}