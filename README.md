# 💛 I Love You — Multilingual Love Experience

A small interactive web project that displays **“I Love You” in different languages**, synchronized with a background song.

Click anywhere on the page to start the experience. The message changes rapidly through different languages while the music plays in the background.

## ✨ Features

* 🌍 **19 languages** featuring different translations of “I Love You”
* 🎵 Background music starts on the user's first click
* 💫 Smooth text transition animations
* 🔤 Different CSS classes/fonts can be applied to each language
* 📱 Works with both desktop and mobile interactions
* 🔄 Automatically loops through all languages
* ⚡ Text changes are timed to match the fast pulse of the music

## 🌎 Languages

The project currently includes:

* 🇮🇷 Persian — دوستت دارم
* 🇬🇧 English — I love you
* 🇨🇳 Chinese — 我爱你
* 🇪🇸 Spanish — Te amo
* 🇸🇦 Arabic — أحبك
* 🇫🇷 French — Je t'aime
* 🇵🇹 Portuguese — Eu te amo
* 🇷🇺 Russian — Я тебя люблю
* 🇮🇩 Indonesian — Aku cinta kamu
* 🇩🇪 German — Ich liebe dich
* 🇪🇬 Egyptian Arabic — بحبك
* 🇻🇳 Vietnamese — Tôi yêu bạn
* 🇳🇬 Hausa — Ina son ka
* 🇹🇷 Turkish — Seni seviyorum
* 🇰🇪 Swahili — Nakupenda
* 🇵🇭 Tagalog — Mahal kita
* 🇰🇷 Korean — 사랑해
* 🇮🇩 Javanese — Aku tresna karo kowe

## 🎵 Music

The project uses an MP3 file located at:

```text
music/music.mp3
```

Music playback begins after the user's first interaction with the page, avoiding browser autoplay restrictions.

## 📁 Project Structure

```text
.
├── index.html
├── script.js
├── styles.css
└── music/
    └── music.mp3
```

## 🚀 Running the Project

No framework or build system is required.

Simply open `index.html` in a browser.

For the best experience, you can also run it using a local development server such as VS Code's Live Server.

## 🛠️ Technologies

* HTML5
* CSS3
* Vanilla JavaScript
* HTML5 Audio API

No external JavaScript libraries or frameworks are required.

## 🎼 Timing

The text transitions are designed around the fast pulse of **“Golden Brown” by The Stranglers**, using approximately **187 BPM**.

The approximate duration of one beat is:

```text
60,000 / 187 ≈ 321 ms
```

This allows the language changes to move quickly with the song.

## ❤️ Purpose

This project was created as a simple interactive way of expressing the same message across different languages:

> **I love you.**

Different languages, same feeling.

## 📜 License

This project is provided for personal and educational use.

The music file is not included as part of the project license. Make sure you have the appropriate rights to use any music you add to the project.
