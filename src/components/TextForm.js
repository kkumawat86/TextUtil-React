import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]= useState('Enter text here!');//default values is 'Enter text here!'
  // text="Enter Text 2" Wrong way to change state
  // setText("Enter Text 3") Correct way to change state
  const handleUpperClick =() =>
  {
    console.log("Upper case was clicked")
    setText(text.toUpperCase())
  }

  const handleOnChange =(event) =>
  {
    console.log("On Change")
    setText(event.target.value)
  }
const handleLowerClick = ()=>
{
    setText(text.toLowerCase())

}
const handleRemoveSpaceClick= (event)=>
{
 let formattedText=text.replace(/\s\s+/g, ' ');
  console.log(formattedText)
  setText(formattedText)
}
const handleCopy=()=>
{
let text =document.getElementById("mybox")
text.select();
text.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);

}
  const handleClear =()=>
  {
    setText('')
  }
    return (
    <>
    <div className='container'>
    <h3>{props.heading}</h3>
    <div className="mb-4">
    <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
    <div className="btn btn-primary my-3 mx-2" onClick={handleUpperClick}>Covert to Uppercase</div>
    <div className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>Covert to Lowercase</div>
    <div className="btn btn-primary my-3 mx-2" onClick={handleRemoveSpaceClick}>Remove Extra Space</div>
    <div className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy To Clip Board</div>
    <div className="btn btn-primary mx-2" onClick={handleClear}>Clear</div>
    {/* <div className="btn btn-primary">Covert to lower case</div> */}
    </div>
    </div>
    <div className='container'>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
   </>
  )
}
