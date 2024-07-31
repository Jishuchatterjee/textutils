import React,{useState} from 'react'


export default function TextForm(props) {
    let disbled=true;
    
    const handleUpClick=()=> {
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
        
    }
    
    const handleOnChange=(event)=> {
        setText(event.target.value)
        
        

    }

    const handleLowClick= ()=> {
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick=()=> {
        setText('')
        props.showAlert("Text Cleared","success");
    }

    const handleCopy=()=> {
        var text= document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }

    const handleExtraSpaces =()=> {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }
    const [text,setText] =useState('');
    return (
        <>
        <div style={{backgroundColor:props.mode==='dark'?'#2661b6':'white'}}>
        <div className="container"  >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8" placeholder="Enter the Text" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#86bad1':'white',color:props.mode==='dark'?'white':'black'}}
      ></textarea>
    </div>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h1>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=> { 
            return element.length!==0}).length} words and {text.length} characters.</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").filter((element)=> { 
            return element.length!==0}).length} Minutes read</p>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Nothing to preview!"}</p>
      
       
        
        
   

    </div>
    </div>
    </>
  );
}
