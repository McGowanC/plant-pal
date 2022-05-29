function constructNode(el, elContent) {
    let element = document.createElement(el);
    let elementContent = document.createTextNode(elContent);
    element.append(elementContent);
    console.log(element);

}

constructNode("h1","this is a dynamic text");




// function constructNode(elementType, elementContent) {
//     let element = document.createElement(elementType);
//     let elementContent1 = document.createTextNode(elementContent);
//     let finalElement = element.appendChild(elementContent1);
//     console.log(finalElement);
//     let targetEl = document.querySelector('.common-houseplants h2')
//     targetEl.appendChild(finalElement);
// }

// constructNode("div", "whatup");