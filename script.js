const busSets = document.getElementsByClassName("btn-sets")
for (const busSet of busSets) {
    busSet.addEventListener("click", function (event) {
        busSet.style.backgroundColor = "green";
        busSet.style.fontSize = "20px";
        busSet.style.color = "White"

        const childNodes = event.target.parentNode.childNodes
        for (const childNode of childNodes) {
            if (childNode.nodeType === 1) {
                console.log(childNode.innerText);
            }
        }

    })
}