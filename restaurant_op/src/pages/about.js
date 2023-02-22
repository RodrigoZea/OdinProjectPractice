const about = () => {
    const content = document.querySelector('#content');

    const sampleDiv = document.createElement("div");
    sampleDiv.innerHTML += "about";
    
    content.appendChild(sampleDiv);

}

export default about;