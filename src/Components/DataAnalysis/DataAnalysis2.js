import React from 'react'
import DataList from './DataList'


const DataAnalysis2 = () => {
  return <>
    <h3>Why we should care for Mental Health</h3>
          <h3>Let us have a data analysis about mental  health</h3>
          <h4>For Data Analysis</h4><button >Click here line 86</button>
          <div className='data_analysis_container'>
          <h1 className='heading'>Data Analysis</h1>
          <h3>Let us have a data analysis <span>using Big Data</span> about mental health 🧠</h3>
          <h3> -->We took a dataset and analyse some of its feature  </h3>

          <h1>1. Age range</h1>
          <img src={DataList[0].img1} alt="" />
          <h1>2. Gender </h1>
          <img src={DataList[1].img2} alt="" />
          <h1>3.Countrywise Data </h1>
          <img src={DataList[3].img4} alt="" />

          
          <h1>4.Do they have mental health consequences</h1>
          <img src={DataList[2].img3} alt="" />
          <h1>5.Do they consider they mental health as serious as physical health</h1>
          <img src={DataList[5].img6} alt="" />
          <h1>6. Does Family history affect mental health</h1>
          <img src={DataList[6].img7} alt="" />
          <h1>7.Do they seek help for mental health </h1>
          <img src={DataList[4].img5} alt="" />
          <h1>8. Correlation of features </h1>
          <img src={DataList[7].img8} alt="" />
          
         
          </div>
  </>
}

export default DataAnalysis2