let numOfClick = 0;

function button(event) {

    numOfClick = numOfClick + 1;

    const seatCount = document.getElementById("seat-count");
    seatCount.innerText = numOfClick;

    const clickButton = event.target;
    const buttonText = clickButton.innerText;
    clickButton.style.backgroundColor = "green";
    clickButton.style.fontSize = "20px";
    clickButton.style.color = "white";
    const classSets = document.createElement("p");
    classSets.innerText = "Economy";

    const price = document.createElement("p");
    price.innerText = "550";

    const buttonTextParagraph = document.createElement("p");
    buttonTextParagraph.innerText = buttonText;

    const setsBuy = document.getElementById("all-sets-buy");
    setsBuy.appendChild(buttonTextParagraph);
    setsBuy.appendChild(classSets);
    setsBuy.appendChild(price);


}