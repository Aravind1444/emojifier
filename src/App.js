import "./App.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🙂": "smiling",
  "😟": "worried",
  "🤩": "excited",
  "❤": "love",
  "🔥": "fire",
  "😎": "cool",
  "🙌": "hi-fi",
  "👌": "okay",
  "😳": "disbelief",
  "😂": "tears of joy",
  "👇🏻": "index pointing down",
  "🤗": "Hugging Face",
  "🥺": "Pleading Face",
  "😉": "Winking Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not defined in the database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header>
        <h1>Emojificator</h1>
      </header>

      <input onChange={emojiInputHandler} placeholder="Enter the emoji" />

      <h2>{meaning}</h2>

      <h3>Emojis We Know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
