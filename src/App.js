import Logo from "./logo";
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstHalf, setfirstHalf] = useState([]);
  // const [secondHalf, setsecondHalf] = useState([]);
  const [text, setText] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const inputText = event.target.elements["my-input"].value;
    const inputArray = inputText.split(" ");
    let spaces = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].includes("\n\n")) {
        let splitEntry = inputArray[i].split("\n\n");
        spaces.push(splitEntry[0] + "\n\n");
        spaces.push(splitEntry[1]);
      } else if (inputArray[i].includes("\n")) {
        let splitEntry = inputArray[i].split("\n");
        spaces.push(splitEntry[0] + "\n");
        spaces.push(splitEntry[1]);
      } else {
        spaces.push(inputArray[i]);
      }
    }
    let firstHalfArr = [];
    let secondHalfArr = [];
    spaces.forEach((word) => {
      let firstHalf = word.slice(0, Math.floor(word.length / 2));
      let secondHalf = word.slice(Math.floor(word.length / 2), word.length);
      firstHalfArr.push('<span class="bold">' + firstHalf + "</span>");
      secondHalfArr.push(secondHalf);
    });
    let answer = [];
    for (let i = 0; i < firstHalfArr.length; i++) {
      answer.push(firstHalfArr[i] + secondHalfArr[i]);
    }
    const formattedText = answer
      .join(" ")
      .replace(/\n\n/g, " <br><br/>")
      .replace(/\n/g, " <br><br/>");
       setText(formattedText);
  }

  return (
    <div className="App">
      <form className="text_adder" onSubmit={handleFormSubmit}>
        <Logo />
        <label for="my-input"></label>
        <br></br>
        <textarea
          type="text"
          id="my-input"
          name="my-input"
          placeholder="  Paste text here..."
        />
        <br></br>
        <button type="submit" id="submit">
          Speed Read
        </button>
        <br></br>
      </form>
      <div className="boldText">
        <p
          className="outputText"
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </div>
  );
}

export default App;
