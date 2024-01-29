import React, { useState } from 'react';



export default function TextForm(props){
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        console.log("Upper Case Clicked");
    }
    const handleLoClick=()=>{
        let nwText=text.toLowerCase();
        setText(nwText);
        console.log("Lower Case Clicked");
    }
    const handleReverseClick=()=>{
        var nwText="";
        var str=text;
        for(let i=str.length-1;i>=0;i--){
            nwText+=str[i];
        }
        setText(nwText);
        console.log("Reverse the string");
        console.log(nwText);
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        console.log("Clears the text");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');

  return (
      <>
 <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>{/* here using {{}} in this we can use objects  */}
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="15"></textarea>
</div>
<button type='button' className="btn btn secondary mx-1" style={{color: props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn primary mx-1 " style={{color: props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn primary mx-1 " style={{color: props.mode==='dark'?'white':'black'}} onClick={handleReverseClick}>Reverse</button>
<button className="btn btn primary mx-1 " style={{color: props.mode==='dark'?'white':'black'}} onClick={handleClearClick}>Clear</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summarry</h1>
    <p>
         It will take {0.008*text.split(" ").length} minutes to read {text.split(" ").length}words and {text.length}characters
    </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
