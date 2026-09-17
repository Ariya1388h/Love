// Array of "I Love You" in different languages with language codes
const languages = [
    { text: "دوستت دارم", lang: "persian", name: "Persian" },
    { text: "I love you", lang: "english-1", name: "English" },
    { text: "我爱你", lang: "chinese", name: "Chinese" },
    { text: "Te amo", lang: "spanish", name: "Spanish" },
    { text: "أحبك", lang: "arabic-1", name: "Arabic" },
    { text: "Je t'aime", lang: "french", name: "French" },
    { text: "Eu te amo", lang: "portuguese", name: "Portuguese" },
    { text: "Я тебя люблю", lang: "russian", name: "Russian" },
    { text: "Aku cinta kamu", lang: "indonesian", name: "Indonesian" },
    { text: "Ich liebe dich", lang: "german", name: "German" },
    { text: "I love you", lang: "english-2", name: "English" },
    { text: "بحبك", lang: "arabic-2", name: "Egyptian Arabic" },
    { text: "Tôi yêu bạn", lang: "vietnamese", name: "Vietnamese" },
    { text: "Ina son ka", lang: "hausa", name: "Hausa" },
    { text: "Seni seviyorum", lang: "turkish", name: "Turkish" },
    { text: "Nakupenda", lang: "swahili", name: "Swahili" },
    { text: "Mahal kita", lang: "tagalog", name: "Tagalog" },
    { text: "사랑해", lang: "korean", name: "Korean" },
    { text: "Aku tresna karo kowe", lang: "javanese", name: "Javanese" },
];

let currentIndex = 0;

const messageElement = document.getElementById('message');
const languageNameElement = document.getElementById('language-name');

const music = document.getElementById("background-music");

let isRunning = false;


// Function to change the text with animation and font
function changeText() {
    if (!isRunning) return;

    messageElement.style.animation = 'none';

    setTimeout(() => {
        const currentLanguage = languages[currentIndex];

        messageElement.textContent = currentLanguage.text;
        languageNameElement.textContent = currentLanguage.name;

        messageElement.className = `lang-${currentLanguage.lang}`;
        messageElement.style.animation = 'smoothFade 0.25s ease-in-out';

        let pauseTime = 500;

        currentIndex = (currentIndex + 1) % languages.length;

        if (isRunning) {
            setTimeout(changeText, pauseTime);
        }
    }, 10);
}


// Start switching when user taps/clicks on the website
function startExperience() {
    if (!isRunning) {
        isRunning = true;
        currentIndex = 1;

        changeText();
    }
}


// Play music on the first click
document.addEventListener("click", () => {
    music.play().catch(err => {
        console.error("Music play error:", err);
    });
}, { once: true });


// Start the text experience on click
document.addEventListener("click", startExperience);


// Also support touch
document.addEventListener("touchstart", startExperience);


// Display initial Persian text on page load
window.addEventListener('load', () => {
    if (languages.length > 0) {
        const initialLanguage = languages[0];

        messageElement.textContent = initialLanguage.text;
        languageNameElement.textContent = initialLanguage.name;
        messageElement.className = `lang-${initialLanguage.lang}`;
    }
});
