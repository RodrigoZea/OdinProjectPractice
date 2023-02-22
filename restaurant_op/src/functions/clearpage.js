// consulted from https://github.com/pret3nti0u5/Restaurant-Page/blob/master/src/functions/render.js
// should remove all rendered divs or elements from the page EXCEPT for the header. this is the right way of what I wanted to do.
const clearpage = () => {
    const content = document.querySelector('#content');
    content.style = "";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

export default clearpage;