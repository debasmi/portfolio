document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const texts = ["passionate web developer", "fast learner"];
let currentTextIndex = 0;
let currentCharIndex = 0;

const dynamicTextElement = document.getElementById("dynamic-text");

function typeText() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        dynamicTextElement.textContent += texts[currentTextIndex][currentCharIndex];
        currentCharIndex++;
        setTimeout(typeText, 100); // Adjust typing speed
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    if (currentCharIndex > 0) {
        dynamicTextElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deleteText, 50); // Adjust deleting speed
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Pause before typing next text
    }
}

typeText();

