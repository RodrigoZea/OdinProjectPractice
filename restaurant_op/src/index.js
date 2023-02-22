import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

import clearpage from "./functions/clearpage.js";
import header from "./pages/header.js";

header();
home();

//add click listeners
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

homeButton.addEventListener('click', function(){
    clearpage();
    home();
});
menuButton.addEventListener('click', function(){
    clearpage();
    menu();
});
aboutButton.addEventListener('click', function(){
    clearpage();
    about();
});