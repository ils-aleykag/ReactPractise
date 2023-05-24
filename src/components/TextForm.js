import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=> {
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=> {
      setText('')
      props.showAlert("Text is cleared","success");
    }
    const handleReplaceClick = ()=> {
      let newText = text.replaceAll(fWord,rWord);
      setText(newText);
    }
    const speak = ()=> {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speak mode is On","success");
    }
    const handleCopy = ()=> {
      navigator.clipboard.writeText(text);
      //document.getSelection().removeAllRanges();
      props.showAlert("Copy to clipboard","success");
    }
    const handleExtraSpace = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space is removed","success");
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handlefindChange = (event)=>{
      findWord(event.target.value);
    }
    const handleReplaceChange = (event)=>{
      console.log(replaceWord(event.target.value));
      props.showAlert("Text has been replaced","success");
    }
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReplaceClick}>Replace word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
      <h3 >Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text:'Nothing to preview!'}</p>
    
    <div className="mb-3">
        <h3>Enter find word</h3>
        <textarea className="form-control" id="myBox" rows="1" value={fWord} onChange={handlefindChange}></textarea>
    </div>
    <div className="mb-3">
        <h3>Enter Replace word</h3>
        <textarea className="form-control" id="myBox" rows="1" value={rWord} onChange={handleReplaceChange}></textarea>
    </div>
    </div>
    </>
  )
}
