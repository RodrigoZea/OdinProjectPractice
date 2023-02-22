const menu = () => {
    const content = document.querySelector('#content');

    const sampleDiv = document.createElement("div");
    sampleDiv.innerHTML += "menu";
    
    content.appendChild(sampleDiv);

}

export default menu;