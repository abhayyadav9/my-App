import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "1px solide white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solide white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-4">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <h1>TextCraft Pro</h1>
                <br/>
                <p>Transform Your Words with Ease</p>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <section>
                  <h2>Welcome to TextCraft Pro!</h2>
                  <p>
                    Your go-to online text manipulation tool designed to make
                    text transformation a breeze.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <h2>Unleash the Power of TextCraft Pro:</h2>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <section>
                  <ul>
                    <li>
                      <strong>Uppercase & Lowercase Mastery:</strong> Elevate
                      your text with precision by converting it to uppercase for
                      emphasis or lowercase for a softer touch. TextCraft Pro
                      ensures your message is conveyed exactly as you envision.
                    </li>
                    <li>
                      <strong>Clean Formatting, Clear Expression:</strong> Bid
                      farewell to the hassle of unwanted formatting. Our tool
                      makes it a breeze to clear unnecessary styles, leaving
                      your text sleek, tidy, and ready to make an impact.
                    </li>
                    <li>
                      <strong>Targeted Text Removal:</strong> Precision matters,
                      and so does the content of your text. TextCraft Pro allows
                      you to surgically remove specific content, ensuring your
                      words are tailored to perfection.
                    </li>
                    <li>
                      <strong>Effortless Copy-Paste Magic:</strong> Copying text
                      has never been smoother. With a simple click, duplicate
                      your transformed text and paste it seamlessly into your
                      documents, presentations, or any platform you desire.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <h2>How TextCraft Pro Works:</h2>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <section>
                  <ol>
                    <li>
                      <strong>Input Your Text:</strong> Start by typing or
                      pasting your text into our user-friendly interface.
                    </li>
                    <li>
                      <strong>Choose Your Operation:</strong> Select from a
                      range of operations, including converting to uppercase,
                      lowercase, clearing formatting, removing text, or copying.
                      The power is in your hands.
                    </li>
                    <li>
                      <strong>Craft Your Text:</strong> Click the "Craft It"
                      button, and watch your text undergo the transformation you
                      desire. TextCraft Pro ensures the process is quick,
                      intuitive, and error-free.
                    </li>
                  </ol>
                </section>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <h2>Why TextCraft Pro Stands Out:</h2>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <section>
                  <ul>
                    <li>
                      <strong>Precision at Your Fingertips:</strong> Craft your
                      text with precision and finesse, leaving no room for
                      ambiguity or errors.
                    </li>
                    <li>
                      <strong>User-Centric Design:</strong> TextCraft Pro is
                      built with you in mind. Our user-friendly interface
                      ensures a seamless experience, even for those new to text
                      manipulation tools.
                    </li>
                    <li>
                      <strong>Versatility Redefined:</strong> Whether you're a
                      professional writer, student, or anyone who deals with
                      text regularly, TextCraft Pro adapts to your needs,
                      providing versatility like never before.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <button
            type="button"
            onClick={toggleStyle}
            className="btn btn-primary my-4"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
