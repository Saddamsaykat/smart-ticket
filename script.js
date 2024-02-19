let numOfClick = 0;


function button(event) {

    numOfClick = numOfClick + 1;
    const dec = document.getElementById("total-sets");
    const sumSets = parseInt(dec.innerText) - 1;
    dec.innerText = sumSets;



    const seatCount = document.getElementById("seat-count");
    seatCount.innerText = numOfClick;

    const clickButton = event.target;
    const buttonText = clickButton.innerText;
    // button color change



    const classSets = document.createElement("p");
    classSets.innerText = "Economy";

    const price = document.createElement("p");
    price.innerText = "550";

    const buttonTextParagraph = document.createElement("p");
    buttonTextParagraph.innerText = buttonText;
    if (numOfClick > 4) {
        alert("One Person Can Only buying 4 Tickets (Only)")
        return
    }
    clickButton.style.backgroundColor = "green";
    clickButton.style.fontSize = "20px";
    clickButton.style.color = "white";



    const setsBuy = document.getElementById("all-sets-buy");
    setsBuy.appendChild(buttonTextParagraph);
    setsBuy.appendChild(classSets);
    setsBuy.appendChild(price);


    const setsPrizeRate = 550;
    sumValue = numOfClick * setsPrizeRate;
    const ticketPrizeBDT = document.getElementById("total-prize");
    ticketPrizeBDT.innerText = sumValue;

    const grandPrize = document.getElementById("grand-total");
    grandPrize.innerText = sumValue;

    event.target.setAttribute("disabled", true);
}

// cupon

document.getElementById("cupon-btn").addEventListener("click", function lessValue() {
    const cuponCode = document.getElementById("text-area").value;
    if (cuponCode == "new15") {
        const totalGrand = document.getElementById("grand-total")
        const baseValue = parseInt(totalGrand.innerText);
        const discount = baseValue * 0.15;
        const discountValue = baseValue - discount;
        totalGrand.innerText = discountValue;

    } else if (cuponCode == "Couple 20") {
        const totalGrand = document.getElementById("grand-total")
        const baseValue = parseInt(totalGrand.innerText);
        const discount = baseValue * 0.15;
        const discountValue = baseValue - discount;
        totalGrand.innerText = discountValue;

    }

})

// modal
const nextBtn = document.getElementById("next-btn");
const passengerInput = document.getElementById("passenger");
const phoneInput = document.getElementById("phone")

function enableButton() {
    if (passengerInput.value !== "" && phoneInput.value !== "") {
        nextBtn.removeAttribute("disabled");
    } else {
        nextBtn.removeAttribute("disabled", true);
    }
}
passengerInput.addEventListener("input", enableButton)
phoneInput.addEventListener("input", enableButton)


document.getElementById("btn-close").addEventListener("click", function () {
    document.getElementById("my_modal_5").style.display = "none";
})