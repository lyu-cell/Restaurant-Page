function menuPage() {
    
    // get elements...
    const content = document.querySelector("#content");

    
    // create element here...
    const subContainer = document.createElement("div");
    const menuContainer = document.createElement("div");
    const steak = document.createElement("div");
    const egg = document.createElement("div");
    const fish = document.createElement("div");
    const bread = document.createElement("div");
    const steakTitle = document.createElement("div");



    // add classes here...
    subContainer.classList.add("subContainerMenu");
    menuContainer.classList.add("menuContainer");
    steak.classList.add("steak")
    steak.classList.add("menuItem")
    egg.classList.add("egg")
    egg.classList.add("menuItem")
    fish.classList.add("fish")
    fish.classList.add("menuItem")
    bread.classList.add("bread")
    bread.classList.add("menuItem")

    // append elements here...
    content.appendChild(subContainer);
    subContainer.appendChild(menuContainer);
    menuContainer.appendChild(steak)
    menuContainer.appendChild(egg)
    menuContainer.appendChild(fish)
    menuContainer.appendChild(bread)
}

export {menuPage}