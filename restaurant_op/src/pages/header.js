// Add sunny images
import sunnyWheel from "../assets/imgs/sunny_wheel.png"
import sunnyHead from "../assets/imgs/sunny_head.png"
// style
import '../styling/header.css'


const header = () => {
    const content = document.querySelector('#content');

    const header = document.createElement("div");
    header.id="header";

    // Logo
    const imageContainer = document.createElement("div");
    imageContainer.id="image-container";

    const sunnyWheelImage = document.createElement("img");
    sunnyWheelImage.src = sunnyWheel;
    sunnyWheelImage.id = "sunny-wheel";
    imageContainer.append(sunnyWheelImage);

    const sunnyImage = document.createElement("img");
    sunnyImage.src = sunnyHead;
    sunnyImage.id = "sunny-img";
    imageContainer.append(sunnyImage);

    //header.append(imageContainer);
    header.append(imageContainer);

    // Home
    const homeButton = document.createElement("div");
    homeButton.id = "menu-button";
    homeButton.textContent = "HOME";
    header.append(homeButton);
    // Menu
    const menuButton = document.createElement("div");
    menuButton.id = "menu-button";
    menuButton.textContent = "MENU";
    header.append(menuButton);
    // About
    const aboutButton = document.createElement("div");
    aboutButton.id = "menu-button";
    aboutButton.textContent = "ABOUT";
    header.append(aboutButton);

    content.append(header);

}

export default header;