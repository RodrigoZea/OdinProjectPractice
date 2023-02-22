const home = () => {
    const content = document.querySelector('#content');

    const sampleDiv = document.createElement("div");
    sampleDiv.innerHTML += "Hello welcome to this restaurant site blah blah";
    
    content.appendChild(sampleDiv);

}

export default home;