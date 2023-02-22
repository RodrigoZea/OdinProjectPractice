// Add sunny images
import sunnyWheel from "../assets/imgs/sunny_wheel.png"
import sunnyHead from "../assets/imgs/sunny_head.png"
import sanji from "../assets/imgs/sanji.png"
// style
import '../styling/header.css'


const header = () => {
    const content = document.querySelector('#content');

    const header = document.createElement("div");
    header.id="header";

    // Header Banner
    const bannerDiv = document.createElement("div");
    bannerDiv.id="banner";
    
    const sanjiImg = document.createElement("img");
    sanjiImg.src = sanji;
    sanjiImg.id = "sanji-img";
    bannerDiv.append(sanjiImg);

    const titleDiv = document.createElement("div");
    titleDiv.id = "title-container";
    const bannerTitle = document.createElement("div");
    bannerTitle.id = "banner-title";
    bannerTitle.textContent="SANJI'S DINER";
    const bannerSubtitle = document.createElement("div");
    bannerSubtitle.id = "banner-subtitle";
    bannerSubtitle.textContent = "the most wanted food in the grand line";
    


    titleDiv.append(bannerTitle);
    titleDiv.append(bannerSubtitle);
    bannerDiv.append(titleDiv);

    header.append(bannerDiv);

    // Menu and logo container
    const menulogoContainer = document.createElement("div");
    menulogoContainer.id="menu-logo-container";

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

    menulogoContainer.append(imageContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container";
    // Home
    const homeButton = document.createElement("div");
    homeButton.id = "menu-button";
    homeButton.textContent = "HOME";
    buttonContainer.append(homeButton);
    // Menu
    const menuButton = document.createElement("div");
    menuButton.id = "menu-button";
    menuButton.textContent = "MENU";
    buttonContainer.append(menuButton);
    // About
    const aboutButton = document.createElement("div");
    aboutButton.id = "menu-button";
    aboutButton.textContent = "ABOUT";
    buttonContainer.append(aboutButton);

    menulogoContainer.append(buttonContainer);

    header.append(menulogoContainer);
    content.append(header);

}

export default header;