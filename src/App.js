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
  "😃": "Grinning Face with Big Eyes",
  "😄" : "Grinning Face with Smiling Eyes",
  "😁" : "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "😳": "disbelief",
  "👇🏻": "index pointing down",
  "🤗": "Hugging Face",
  "🥺": "Pleading Face",
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
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "ace with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😦": "Frowning Face with Opn Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "💀": "Skull",
  "☠️": "Skull and Crossbones",
  "💩": "Pile of Poo",
  "🤡": "Clown Face",
  "👹": "Ogre",
  "👺": "Goblin",
  "👻": "Ghost",
  "👽": "Alien",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺": "Grinning Cat",
  "😸": "Grinning Cat with Smiling Eyes",
  "😹": "Cat with Tears of Joy",
  "😻": "Smiling Cat with Heart-Eyes",
  "😼": "Cat with Wry Smile",
  "😽": "Kissing Cat",
  "🙀": "Weary Cat",
  "😿": "Crying Cat",
  "😾": "Pouting Cat",
  "💋": "Kiss Mark",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand ",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "olded Hands",
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
