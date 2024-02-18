const busSets = document.getElementsByClassName("btn-sets")
for (const busSet of busSets) {
    busSet.addEventListener("click", function (event) {
        busSet.style.backgroundColor = "green";
        busSet.style.fontSize = "20px";
        busSet.style.color = "White"
        console.log(busSet.innerText);


    })
}

function btnSetsAll(eventFncVal) {
    const dataSet = eventFncVal.innerText
    console.log(dataSet);
}