import { useState } from "react"
import React from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        console.log("LowerCase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUPClick =()=> {
        console.log("Camel case was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleDownClick =()=> {
        console.log("Clear was clicked");
        let newText = "";
        setText(newText);
    }
    const handleOnChange =(event)=> {
        console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //setText("new text"); // correct way
    return (
        <>
        <div className = "container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to CamelCase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Clear</button>

        </div>
        <div className="container my-4" >
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} charcters</p>
            <p> {0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}