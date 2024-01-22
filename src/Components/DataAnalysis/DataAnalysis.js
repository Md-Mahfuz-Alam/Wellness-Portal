import React from 'react'
import "./DataAnalysis.css"
import swal from 'sweetalert'
import DataList from './DataList'
import DataAnalysis2 from './DataAnalysis2'



const DataAnalysis = () => {
  
    
    const handleClick1=()=>{
    
    
       
     swal("Please go For Yoga  !", "");
   
    }
   
    const handleClick2=()=>{
      swal("Please go For Mediatation!", "");
       
       }
    const handleClick3=()=>{
      swal("Please go For Therapy!", "");
       }
    const handleClick4=()=>{
      swal("Please go For fitness Therapy!", "");
       }
     return <>
       
         
          
          <h3 className='head3'>Please click on the box the symptopms you have ⬇️</h3>
          <div className="containerX">
   
          <div className="container1" onClick={handleClick1}>
          <h4>Do You  have❓</h4>
          <ul>
           <li>Struggle to sleep</li>
           <li>Get uncomfortable sitting</li>
           <li>Find hard to focus</li>
           <li>Body becomes rigid</li>
          </ul>
          
   
          </div>
   
          <div className="container2" onClick={handleClick2}>
          <h4>Do You have❓</h4>
          <ul>
           <li>Depression</li>
           <li>Insomnia</li>
           <li>Chronic pain</li>
           <li>Stress</li>
          </ul>
   
          </div>
          </div>
          <div className="containerY">
   
          <div className="container3" onClick={handleClick3}>
          <h4>Do You have❓</h4>
          <ul>
           <li>Hopelessness</li>
           <li>Anger or resentment</li>
           <li>Social Withdrawal</li>
           <li>Anxious thoughts</li>
          </ul>
   
          </div>
   
          <div className="container4" onClick={handleClick4}>
          <h4>Do You have❓</h4>
          <ul>
           <li>Lack of balance</li>
           <li>fitness injusry</li>
           <li>decreased strength</li>
           <li>pain in body parts</li>
          </ul>
   
          </div>
   
          </div>
          <h2 style={{color:"darkblue", marginTop:"50px"}}> If you are confused about your Mental Health </h2>
          <a className='redirect' href="http://localhost:8501/">Click Here </a>
          <h3>For <span>prediction</span> of your Mental health</h3> 
         

     </>
   }

export default DataAnalysis