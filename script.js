let numOfClick = 0;


function button(event) {

    numOfClick = numOfClick + 1;
    if (numOfClick > 4) {
        alert("One Person Can Only buying 4 Tickets (Only)")
        return
    }
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
    if (cuponCode == "NEW15") {
        const totalGrand = document.getElementById("grand-total")
        const baseValue = parseInt(totalGrand.innerText);
        const discount = baseValue * 0.15;
        const discountValue = baseValue - discount;
        totalGrand.innerText = discountValue;

    } else if (cuponCode == "Couple 20") {
        const totalGrand = document.getElementById("grand-total")
        const baseValue = parseInt(totalGrand.innerText);
        const discount = baseValue * 0.20;
        const discountValue = baseValue - discount;
        totalGrand.innerText = discountValue;

    }
    document.getElementById("cupon-btn").setAttribute("hidden", true);
    document.getElementById("text-area").setAttribute("hidden", true);
})

// modal


document.getElementById("btn-close").addEventListener("click", function () {
    window.location.reload();

})


const nextBtn = document.getElementById("next-btn");
const passengerInput = document.getElementById("passenger");
const phoneInput = document.getElementById("phone");
const eMail = document.getElementById("E-mail");


function checkInputs() {
    const passengerValue = passengerInput.value;
    const phoneValue = phoneInput.value;
    const emailValue = eMail.value;

    if (passengerValue !== '' && phoneValue !== '' && emailValue !== '') {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

passengerInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);
eMail.addEventListener('input', checkInputs);