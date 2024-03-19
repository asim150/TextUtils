import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase is clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lowercase is clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleRevClick = () => {
        console.log("Reverse is clicked " + text);
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
    }

    const handleClear = () => {
        //   console.log("You have clicked on clear");
        if (text !== '') {
            let cleartext = "";
            setText(cleartext);
            //props.showAlert("Cleared the whole text", "danger");
        }
        else {
            //props.showAlert("There's Nothing To Clear Into TextBox", "warning");
        }
    }

    const handlecopyfunction = () => {
        if (text !== '') {
            var copyText = document.getElementById("myBox");
            copyText.select();
            navigator.clipboard.writeText(copyText.value);
            //props.showAlert("Copied the text : " + copyText.value, "success");
        }
        else {
            //props.showAlert("There's Nothing To Copy Into TextBox", "warning");
        }

    }

    const handleExtraspaces = () => {
        if (text !== '') {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            //props.showAlert("All extra spaces are cleared", "success");
        }
        else {
            //props.showAlert("There's Nothing Remove Spaces Into TextBox", "warning");
        }
    }


    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }

    // const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Text Analyzer and Converter</h1><br></br>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleRevClick}>Reverse String</button>
                    <button className='btn btn-danger mx-2' onClick={handleClear}>Clear</button>
                    <button className='btn btn-success mx-2' onClick={handlecopyfunction}>Copy to clipboard</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraspaces}>Remove Extraspaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Summary of your text</h2>
                <p>Number of words: {text.split(" ").length} </p>
                <p>Number of characters: {text.length} </p>
                <p>Reading time: {0.008 * text.split(" ").length}</p>
                <h4 className='text-center'>Preview Document</h4>

                <p className='border'>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
