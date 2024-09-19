import React from 'react'
// import mayank from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/mayank.jpg';
// import sanjana from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sanjana.jpg';
// import sneha from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sneha.jpg';
// import shreyash from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/das.jpg';
// import shrushti from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/shrushti.jpg';
// import sandali from 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sandali.jpg';
import './Team.css';



function Team() {
  return (
    <>
    <div className="entire">
    <div className="heading">
    <h1>Introduction of Seniors Members</h1>
    </div>
    <div className='big'>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/mayank.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Operations Officer</p>
        </div>
        </div>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sanjana.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Technical Officer - Software</p>
        </div>
      </div>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sandali.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Public Relations Officer</p>
        </div>
      </div>
    </div>
    <div className='big'>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/sneha.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Technical Officer - Hardware</p>
        </div>
      </div>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/shrushti.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Creative Officer</p>
        </div>
      </div>
      <div className="small">
        <img src='https://bookstoreapp1.s3.eu-north-1.amazonaws.com/das.jpg' alt="" />
        <div className="pa">
        <p className='para'>Chief Finance Officer</p>
        </div>
      </div>
    </div>
    </div>
    
    
    
    

      
      

    </>
    
  )
}

export default Team;


