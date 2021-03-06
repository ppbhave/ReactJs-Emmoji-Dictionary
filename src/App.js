import "./styles.css";
import React, { useState } from "react";

var userName = prompt("Eter your user name");

export default function App() {
  var bgcolor = "yellow";

  const emojiDictionary = {
    "๐": "Grinning Face",
    "๐": "Grinning Face with Big Eyes",
    "๐": "Grinning Face with Smiling Eyes",
    "๐": "Beaming Face with Smiling Eyes",
    "๐": "Grinning Squinting Face",
    "๐": "Grinning Face with Sweat",
    "๐คฃ": "Rolling on the Floor Laughing",
    "๐": "Face with Tears of Joy",
    "๐": "Slightly Smiling Face",
    "๐": "Upside-Down Face",
    "๐": "Winking Face",
    "๐": "Smiling Face with Smiling Eyes",
    "๐": "Smiling Face with Halo",
    "๐ฅฐ": "Smiling Face with Hearts",
    "๐": "Smiling Face with Heart-Eyes",
    "๐คฉ": "Star-Struck",
    "๐": "Face Blowing a Kiss",
    "๐": "Kissing Face",
    "โบ๏ธ": "Smiling Face",
    "๐": "Kissing Face with Closed Eyes",
    "๐": "Kissing Face with Smiling Eyes",
    "๐ฅฒ": "Smiling Face with Tear",
    "๐": "Face Savoring Food",
    "๐": "Face with Tongue",
    "๐": "Winking Face with Tongue",
    "๐คช": "Zany Face",
    "๐": "Squinting Face with Tongue",
    "๐ค": "Money-Mouth Face",
    "๐ค": "Hugging Face",
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
    "๐ค": "Face with Thermometer",
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
    "๐ฅธ": "Disguised Face",
    "๐": "Smiling Face with Sunglasses",
    "๐ค": "Nerd Face",
    "๐ง": "Face with Monocle",
    "๐": "Confused Face",
    "๐": "Worried Face",
    "๐": "Slightly Frowning Face",
    "โน๏ธ": "Frowning Face",
    "๐ฎ": "Face with Open Mouth",
    "๐ฏ": "Hushed Face",
    "๐ฒ": "Astonished Face",
    "๐ณ": "Flushed Face",
    "๐ฅบ": "Pleading Face",
    "๐ฆ": "Frowning Face with Open Mouth",
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
    "๐": "ย?Hand with Fingers Splayed",
    "โย?": "aised Hand",
    "๐": "Vulcan Salute",
    "๐": "OK Hand",
    "๐ค": "Pinched Fingers",
    "๐ค": "Pinching Hand",
    "โ๏ธ": "Victory Hand",
    "๐ค": "Crossed Fingers",
    "๐ค": "Love-You Gesture",
    "๐ค": "Sign of the Horns",
    "๐ค": "Call Me Hand",
    "๐": "Backhand Index Pointing Left",
    "๐": "Backhand Index Pointing Right",
    "๐": "Backhand Index Pointing Up",
    "๐": "Middle Finger",
    "๐": "Backhand Index Pointing Down",
    "โ๏ธ": "Index Pointing Up",
    "๐": "Thumbs Up",
    "๐": "Thumbs Down",
    "โย?": "aised Fist",
    "๐": "Oncoming Fist",
    "๐ค": "Left-Facing Fist",
    "๐ค": "Right-Facing Fist",
    "๐": "Clapping Hands",
    "๐": "Raising Hands",
    "๐": "Open Hands",
    "๐คฒ": "Palms Up Together",
    "๐ค": "Handshake",
    "๐": "Folded Hands",
    "โ๏ธ": "Writing Hand",
    "๐": "Nail Polish",
    "๐คณ": "Selfie",
    "๐ช": "Flexed Biceps",
    "๐ฆพ": "Mechanical Arm",
    "๐ฆฟ": "Mechanical Leg",
    "๐ฆต": "Leg",
    "๐ฆถ": "Foot",
    "๐": "Ear",
    "๐ฆป": "Ear with Hearing Aid",
    "๐": "Nose",
    "๐ง?": "Brain",
    "๐ซ": "Anatomical Heart",
    "๐ซ": "Lungs",
    "๐ฆท": "Tooth",
    "๐ฆด": "Bone",
    "๐": "Eyes",
    "๐": "ย?Eye",
    "๐": "Tongue",
    "๐": "Mouth",
    "๐ถ": "Baby",
    "๐ง": "Child",
    "๐ฆ": "Boy",
    "๐ง": "Girl",
    "๐ง": "Person",
    "๐ฑ": "Person: Blond Hair",
    "๐จ": "Man",
    "๐ง": "Person: Beard",
    "๐ง": "Older Person",
    "๐ด": "Old Man",
    "๐ต": "Old Woman",
    "๐": "Person Frowning",
    "๐โ": "Man Frowning",
    "๐โ": "Woman Frowning",
    "๐": "Person Pouting",
    "๐โ": "ย?Man Pouting",
    "๐๏ธ": "โ๏ธย?Woman Pouting",
    "๐": "Person Gesturing No",
    "๐โ": "โ๏ธย?Man Gesturing No",
    "๐๏ธ": "โ๏ธย?Woman Gesturing No",
    "๐": "Person Gesturing OK",
    "๐โ": "โ๏ธย?Man Gesturing OK",
    "๐๏ธ": "โ๏ธย?Woman Gesturing OK",
    "๐": "Person Tipping Hand",
    "๐โ": "Man Tipping Hand",
    "๐โ๏ธ": "ย?Woman Tipping Hand",
    "๐": "Person Raising Hand",
    "๐โ": "โ๏ธย?Man Raising Hand",
    "๐๏ธ๏ธ": "โ๏ธย?Woman Raising Hand",
    "๐ง": "Deaf Person",
    "๐งโ๏ธ": "ย?Deaf Man",
    "๐ง๏ธ": "โ๏ธย?Deaf Woman",
    "๐": "Person Bowing",
    "๐โ": "โ๏ธย?Man Bowing",
    "๐๏ธ": "โ๏ธย?Woman Bowing",
    "๐คฆ": "Person Facepalming",
    "๐คฆโ": "โ๏ธย?Man Facepalming",
    "๐คฆ๏ธ": "โย?Woman Facepalming",
    "๐คท": "Person Shrugging",
    "๐คทโ": "โ๏ธย?Man Shrugging",
    "๐คท๏ธ": "Woman Shrugging"
  };

  const [likeCOunt, setLikeCOunt] = useState(0);

  const [realtimeInputText, InputTextHandler] = useState("");

  var onCLickLike = () => {
    setLikeCOunt(likeCOunt + 1);
  };

  var onCLickDislike = () => {
    setLikeCOunt(likeCOunt - 1);
  };

  var onInputChange = (event) => {
    if (emojiDictionary[event.target.value]) {
      InputTextHandler(emojiDictionary[event.target.value]);
    } else {
      InputTextHandler("Unknown Emoji");
    }
  };
  let emojis=Object.keys(emojiDictionary);
  const [meaning, meaningSetter] =   useState("");
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <h2>Search Emoji or click one</h2>
      <h3 style={{ color: "blue", backgroundColor: bgcolor }}>
        Author: {userName}
      </h3>
      <input type="text" onChange={onInputChange}></input>
      <br /> Emoji Meaning: {realtimeInputText} <br />
      <button onClick={onCLickLike}>like</button>
      <button onClick={onCLickDislike}>dislike</button>
      <br />
      Total appreciation score :{likeCOunt} <br/> <br/>
      ***{meaning}*** <br/><br/>
   { emojis.map(function (emoji){
        return <span style={{cursor:"pointer"}}
            key={emoji} onClick={()=> meaningSetter(emojiDictionary[emoji])} > {emoji} </span>
  }) }
    </div>
  );
}
