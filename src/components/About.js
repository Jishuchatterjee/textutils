import React, {useState} from 'react'
export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color: 'white',
    //     backgroundColor:'#2661b6'
    // })
    let myStyle={
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'#2661b6':'white'
    }
    

   
    return (
      <div className="container" >
        <h1 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample"   >
        <div className="accordion-item">
          <h2 className="accordion-header"   >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}  >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}     >
              Textutils gives you the way to analyze the text quickly and efficiently.Be it word count,character count or letters count.
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
            Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}     >
              Textutils is a free tool for analyzing the text for any purposes like word countand character count.It allows you to perform many opertions on your text.
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
            Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}   >
              This word counter tool can run on any browser and can read any text in documents.
            </div>
          </div>
        </div>
      </div>
    
      </div>
    );
}
