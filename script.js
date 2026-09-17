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
const audio = document.getElementById('bgMusic');
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
        
        // Determine pause duration based on language
        let pauseTime = 200; // same pause for all languages
        
        currentIndex = (currentIndex + 1) % languages.length;
        
        // Schedule next change with appropriate delay
        if (isRunning) {
            setTimeout(changeText, pauseTime);
        }
    }, 10);
}

// Start switching when user taps on the website
document.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        
        // Start from next language (skip initial Persian)
        currentIndex = 1;
        
        // Play music with fade in
        try {
            audio.volume = 0.1; // Start at low volume
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('✓ Music playing successfully');
                        
                        // Fade in the volume gradually
                        let volumeLevel = 0.1;
                        const fadeInInterval = setInterval(() => {
                            if (volumeLevel < 1) {
                                volumeLevel += 0.05;
                                audio.volume = Math.min(volumeLevel, 1);
                            } else {
                                clearInterval(fadeInInterval);
                            }
                        }, 50);
                    })
                    .catch((error) => {
                        console.error('✗ Audio playback error:', error.message);
                    });
            }
        } catch (error) {
            console.error('✗ Error trying to play audio:', error);
        }
        
        changeText();
    }
});

document.addEventListener('touchstart', () => {
    if (!isRunning) {
        isRunning = true;
        
        // Start from next language (skip initial Persian)
        currentIndex = 1;
        
        // Play music with fade in
        try {
            audio.volume = 0.1; // Start at low volume
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('✓ Music playing successfully');
                        
                        // Fade in the volume gradually
                        let volumeLevel = 0.1;
                        const fadeInInterval = setInterval(() => {
                            if (volumeLevel < 1) {
                                volumeLevel += 0.05;
                                audio.volume = Math.min(volumeLevel, 1);
                            } else {
                                clearInterval(fadeInInterval);
                            }
                        }, 50);
                    })
                    .catch((error) => {
                        console.error('✗ Audio playback error:', error.message);
                    });
            }
        } catch (error) {
            console.error('✗ Error trying to play audio:', error);
        }
        
        changeText();
    }
});

// Play audio when page loads
window.addEventListener('load', () => {
    // Display initial Persian text on page load
    if (languages.length > 0) {
        const initialLanguage = languages[0];
        messageElement.textContent = initialLanguage.text;
        languageNameElement.textContent = initialLanguage.name;
        messageElement.className = `lang-${initialLanguage.lang}`;
    }
});

// Optional: Stop changing text if audio ends (uncomment if needed)
// audio.addEventListener('ended', () => {
//     clearInterval(textChangeInterval);
// });
