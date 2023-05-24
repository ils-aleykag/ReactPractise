import React from 'react'

export default function (props) {
  let myStyle = {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',

  }
  return (
  <>
  <div className='container'>
    <h2 className='my-3' style={myStyle}>About Us</h2>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
          </button>
       </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word Count, Character count or any other function!
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          It is a free to use app without any subscription, which is avaliable for you just on a click!
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong>Browser Compatible</strong>
       </button>
     </h2>
     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
       <div className="accordion-body" style={myStyle}>
         It works in webBrowser such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
       </div>
     </div>
   </div>
 </div>
</div>
</>
  )
}
