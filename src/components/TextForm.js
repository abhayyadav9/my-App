// rfc= for react function based component

import React, { useState } from "react";
import clipboardCopy from 'clipboard-copy';


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converter to uppercase!","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converter to Lowercase","success")}

  const handleResetClick = () => {
    let newText1 = " ";
    setText(newText1);
    props.showAlert("All text is clear","success")
  };



  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied All text", "success")
  };
  

  const handleExtraSpace = () => {
    let newText1 = text.split(/[ ]+/);
    setText(newText1.join(" "));
    props.showAlert("All extra Space is Removed","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  // const [text1, setText1] = useState(" ");


  // setText("please write somethings")

  // const [lowerText, setLower] =useState("");

  // const [lowerText, setLowerText] = useState("");

  // const[ stringLength , setStringLength]= useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            // value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Please write somethings"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to upperCase{" "}
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to LowerCase{" "}
        </button>

        <button className="btn btn-primary mx-3 " onClick={handleResetClick}>
          Clear{" "}
        </button>

        <button className="btn btn-primary mx-3 " onClick={handleCopy}>
          Copy Text{" "}
        </button>

        <button className="btn btn-primary mx-3 " onClick={handleExtraSpace}>
          Remove Space{" "}
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} character
        </p>
        <p> You can Read in{0.008 * text.split(" ").length} Minutes</p>

        <h2>Preview</h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0 ? text : "Enter somethings above for preview"}
        </p>
      </div>
    </>
  );
}

// TextForm.propTypes = {
//   // title:PropTypes.string.  isRequired ,
//   heading:PropTypes.string

// };

// TextForm.defaultProps = {
//   heading1: "LowerCase",
// };
