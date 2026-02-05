const letterText = "My dearest love,\n\nEvery moment with you is a treasure. You make my heart skip a beat. Happy Valentine's Day!\n\nYours forever, [Your Name]";
const letterElement = document.getElementById('letter');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function typeLetter() {
    if (index < letterText.length) {
        letterElement.textContent += letterText.charAt(index);
        index++;
        setTimeout(typeLetter, 100);
    } else {
        nextBtn.style.display = 'block';
    }
}

typeLetter();

nextBtn.addEventListener('click', () => {
    alert("I love you more than words can say! 💕");
});