const home = () => {
    const content = document.querySelector('#content');

    const sampleDiv = document.createElement("div");
    sampleDiv.innerHTML += "home";
    
    content.appendChild(sampleDiv);

}

export default home;