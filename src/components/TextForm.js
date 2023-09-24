import React, { useState } from "react";

export default function TextForm(props) {
   
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    //    console.log("you have clicked on handleupclick" + text)
    props.showAlert("Converted to uppercase!", "success")
    document.title = "Case Converter L2U"
  };
  const handleUpClick2 = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success")
    document.title = "Case Converter U2L"
  };
  const titleHandler = () => {
    const words = text.split(" ");
    
    // Capitalize the first letter of each word and join them back
    const titleCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
    
    setText(titleCase);
    props.showAlert("Converted to Titlecase!", "success")
    document.title = "Case Converter in Titlecase"
  };
  const deleteHandler = () => {
    setText("");
    props.showAlert("Text area has been cleared!", "success")
  };
  const reverseHandler = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("String has been reversed!", "success")
  };
  const HandlExtraSpace= () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!", "success")
  };
  const copyHandler = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copyed!", "success")
  };
  
  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "downloaded-text.txt"; // Set the desired file name
    a.click();
    URL.revokeObjectURL(url);
    props.showAlert("Text has been downloaded!", "success")
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
     
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{background: props.mode==='dark' ? "#232361" : "white",
        color: props.mode==='dark' ? "white" : "black"}}
        ></textarea>
      </div>
      <button className="btn btn-success m-3" onClick={handleUpClick}>
        UPPER CASE
      </button>
      <button className="btn btn-info m-3" onClick={handleUpClick2}>
        lower case
      </button>
      <button className="btn border-dark btn-light m-3" onClick={copyHandler}>
        Copy Text
      </button>
      <button className="btn btn-danger mx-3" onClick={deleteHandler}>
        Delete
      </button>
      <button className="btn btn-primary m-3" onClick={titleHandler}>
        Title Case
      </button>
      <button className="btn btn-outline-secondary mx-3" onClick={HandlExtraSpace}>
        Remove Space
      </button>
      <button className="btn btn-dark m-3" onClick={reverseHandler}>
        Reverse string
      </button>
      <button className="btn btn-warning mx-3" onClick={downloadText}>
        Download Text
      </button>
      <div>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </div>
  );
}
