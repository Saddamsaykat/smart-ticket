const busSets = document.getElementsByClassName("btn-sets")
for (const busSet of busSets) {
    busSet.addEventListener("click", function (event) {
        busSet.style.backgroundColor = "green";
        busSet.style.fontSize = "20px";
        busSet.style.color = "White"

        const seatName = event.target.parentNode.childNodes[1].innerText
        console.log(seatName)
    })
}