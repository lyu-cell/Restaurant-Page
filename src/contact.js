function contactPage() {
    
    // get element...
    document.querySelector("#content").remove()

    // create element...
    const content = document.createElement("div")
    const subContainerContact = document.createElement("div");
    const formContainer = document.createElement("div");
    const contactHeadlineContainer = document.createElement("div")
    const infoContainer = document.createElement("div");
    const form = document.createElement("form")
    const infoAndFormContainer = document.createElement("div")
    const contactHeadlineMain = document.createElement("p")
    const contactHeadlineSub = document.createElement("p")
    const numberInfo = document.createElement("p")
    const emailInfo = document.createElement("p")
    const locationInfo = document.createElement("p")
    const nameLabel = document.createElement("LABEL");
    const nameInput = document.createElement("input");
    const emailLabel = document.createElement("LABEL")
    const emailInput = document.createElement("input")
    const locationLabel = document.createElement("LABEL")
    const locationInput = document.createElement("input")
    const infoPara = document.createElement("p")
    const formSubmitBtn = document.createElement("button")
    const nameContainer = document.createElement("div")
    const inputContainer = document.createElement("div")


    formSubmitBtn.textContent = "Submit"
    contactHeadlineMain.textContent  = "Contact US"
    contactHeadlineSub.textContent = "Got any questions? Feel free to reach out to us below!"
    numberInfo.textContent = "Number:  019********"
    emailInfo.textContent = "Email: @lyuCell.gmail.com"
    locationInfo.textContent = "Location: Lost Vegan, Road 9"
    nameLabel.setAttribute("for", "name")
    nameLabel.textContent = "Name:"
    nameInput.setAttribute("id", "name")
    emailLabel.textContent = "Email: "
    emailInput.setAttribute("id", "email")
    emailLabel.setAttribute("for", "email")
    locationLabel.setAttribute("for", "location")
    locationInput.setAttribute("id", "location")
    locationLabel.textContent = "Location: "
    infoPara.textContent = "Contact Info"

    // add classes...
    content.setAttribute("id", "content");
    subContainerContact.classList.add("subContainerContact");
    formContainer.classList.add("formContainer");
    contactHeadlineContainer.classList.add("contactHeadlineContainer")
    infoContainer.classList.add("infoContainer")
    infoAndFormContainer.classList.add("infoAndFormContainer")
    nameInput.className = "name"
    contactHeadlineMain.classList.add("contactHeadlineMain")
    contactHeadlineSub.classList.add("contactHeadlineSub")
    infoPara.classList.add("infoPara")
    formSubmitBtn.classList.add("formSubmitBtn")
    inputContainer.classList.add("inputContainer")
    nameContainer.classList.add("nameContainer")

    // append element...
    document.querySelector("body").appendChild(content);
    content.appendChild(subContainerContact);
    subContainerContact.appendChild(formContainer);
    formContainer.appendChild(contactHeadlineContainer)
    formContainer.appendChild(infoAndFormContainer)
    infoAndFormContainer.appendChild(infoContainer)
    infoAndFormContainer.appendChild(form)
    contactHeadlineContainer.appendChild(contactHeadlineMain)
    contactHeadlineContainer.appendChild(contactHeadlineSub)
    infoContainer.appendChild(infoPara)
    infoContainer.appendChild(numberInfo)
    infoContainer.appendChild(emailInfo)
    infoContainer.appendChild(locationInfo)
    form.appendChild(nameContainer)
    form.appendChild(inputContainer)
    nameContainer.appendChild(nameLabel)
    nameContainer.appendChild(emailLabel)
    nameContainer.appendChild(locationLabel)
    inputContainer.appendChild(nameInput)
    inputContainer.appendChild(emailInput)
    inputContainer.appendChild(locationInput)
    form.appendChild(formSubmitBtn)
}

export {contactPage}