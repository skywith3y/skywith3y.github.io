const messages = [
    "Are you sure?",
    "Really sure?",
    "Weh?",
    "Ayaw mo?",
    "Just think about it!",
    "If you say no, edi 'wag!",
    "Alam kong gusto mo!",
    "Sure ka na ba talaga?",
    "Ok fine, hindi na ako magtatanong!",
    "Mag yes ka na!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}