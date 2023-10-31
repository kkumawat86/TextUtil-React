import React,{useState} from 'react'

export default function FormButton() {

    const [text,setText,setMyStyle]=useState();
    //const [text,]=useState();
   

const removeSpaceClicked= (event)=>
{
 let formattedText=text.replace(/\s\s+/g, ' ');
  console.log(formattedText)
  setText(formattedText)
}
const OnClearClick= ()=>
{
    setText(text);
}

const handleOnChange =(event)=>
{
    setText(event.target.value)

}

const onRedSelect=()=>
{
    setMyStyle(
        {
            color:'black',
            backgroundColor:'white'
        }
    )
}
const onGreenSelect=()=>
{}
const onBlackSelect=()=>
{}
const onBoldSelect=()=>
{}
const onItalicSelect=()=>
{}
const onUnderlineSelect=()=>
{}

  return (
    
      <>
      <div className="mb-3">
          <label for="textlabel" className="form-label">Enter text below</label>
          <textarea className="form-control" id="textbox" rows="3" value={text} onChange={handleOnChange}></textarea>
      </div>
      <div className="container my-3">
          <button type="button" className="btn btn-primary mx-2" onClick={OnClearClick}>Clear</button>
          <button type="button" className="btn btn-primary mx-2" onClick={removeSpaceClicked}>Remove extra space</button>
   
  <button class="btn btn-danger dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Change Text Color
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onSelect={onRedSelect}>Red</a></li>
    <li><a class="dropdown-item" href="#" onSelect={onGreenSelect}>Green</a></li>
    <li><a class="dropdown-item" href="#" onSelect={onBlackSelect}>Black</a></li>
  </ul>
  <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Change Text Style
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onSelect={onBoldSelect}><b>Bold</b></a></li>
    <li><a class="dropdown-item" href="#" onSelect={onItalicSelect}><i>Italic</i></a></li>
    <li><a class="dropdown-item" href="#" onSelect={onUnderlineSelect}><u>Underline</u></a></li>
  </ul>
  </div>
          </>
  )
}
