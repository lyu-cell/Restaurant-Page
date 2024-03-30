function contactPage() {
    
    // get elements he4re
    const content = document.querySelector("#content")

    // create elements here...
    const contactContainer = document.createElement("div");

    // add classes here...
    contactContainer.classList.add("subContainerContact")


    //append elements here...
    content.appendChild(contactContainer)
}

export {contactPage}