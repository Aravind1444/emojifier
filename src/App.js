import "./App.css";
import React, { useState } from "react";

var emojiDictionary = {
  "๐": "smiling",
  "๐": "worried",
  "๐คฉ": "excited",
  "โค": "love",
  "๐ฅ": "fire",
  "๐": "cool",
  "๐": "hi-fi",
  "๐": "okay",
  "๐": "Grinning Face with Big Eyes",
  "๐" : "Grinning Face with Smiling Eyes",
  "๐" : "Beaming Face with Smiling Eyes",
  "๐": " Grinning Squinting Face",
  "๐": " Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",
  "๐": " Face with Tears of Joy",
  "๐": " Upside-Down Face",
  "๐": " Winking Face",
  "๐": " Smiling Face with Smiling Eyes",
  "๐": " Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": " Smiling Face with Heart-Eyes",
  "๐": " Face Blowing a Kiss",
  "๐": " Kissing Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",
  "๐": " Face Savoring Food",
  "๐": " Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ณ": "disbelief",
  "๐๐ป": "index pointing down",
  "๐ค": "Hugging Face",
  "๐ฅบ": "Pleading Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "ace with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head",
  "๐ค?": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Slightly Frowning Face",
  "โน๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ฆ": "Frowning Face with Opn Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Pouting Face",
  "๐?": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns",
  "๐": "Skull",
  "โ?๏ธ": "Skull and Crossbones",
  "๐ฉ": "Pile of Poo",
  "๐คก": "Clown Face",
  "๐น": "Ogre",
  "๐บ": "Goblin",
  "๐ป": "Ghost",
  "๐ฝ": "Alien",
  "๐พ": "Alien Monster",
  "๐ค": "Robot",
  "๐บ": "Grinning Cat",
  "๐ธ": "Grinning Cat with Smiling Eyes",
  "๐น": "Cat with Tears of Joy",
  "๐ป": "Smiling Cat with Heart-Eyes",
  "๐ผ": "Cat with Wry Smile",
  "๐ฝ": "Kissing Cat",
  "๐": "Weary Cat",
  "๐ฟ": "Crying Cat",
  "๐พ": "Pouting Cat",
  "๐": "Kiss Mark",
  "๐": "Waving Hand",
  "๐ค": "Raised Back of Hand",
  "๐๏ธ": "Hand with Fingers Splayed",
  "โ": "Raised Hand",
  "๐": "Vulcan Salute",
  "๐ค": "Pinching Hand",
  "โ๏ธ": "Victory Hand",
  "๐ค": "Crossed Fingers",
  "๐ค": "Love-You Gesture",
  "๐ค": "Sign of the Horns",
  "๐ค": "Call Me Hand ",
  "๐": "Backhand Index Pointing Left",
  "๐": "Backhand Index Pointing Right",
  "๐": "Backhand Index Pointing Up",
  "๐": "Middle Finger",
  "๐": "Backhand Index Pointing Down",
  "โ๏ธ": "Index Pointing Up",
  "๐": "Thumbs Up",
  "๐": "Thumbs Down",
  "โ": "Raised Fist",
  "๐": "Oncoming Fist",
  "๐ค": "Left-Facing Fist",
  "๐ค": "Right-Facing Fist",
  "๐": "Clapping Hands",
  "๐": "Open Hands",
  "๐คฒ": "Palms Up Together",
  "๐ค": "Handshake",
  "๐": "olded Hands",
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
            style={{ fontSize: "2rem", padding: "1rem 0.7rem", cursor: "pointer" }}
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
