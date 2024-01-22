import React from 'react';
import {Header, Events, LogoBox, MyEvents} from "../../../Components";

const home = (props) => {
  return (
    <>
    <h1 style={{color:"darkgreen",fontWeight:"bolder",}}>We Care your Mental Health 🧠 </h1>
      { 
        (!props.isLogged)
          ? <> <Header/><Events changedLogging={props.changedLogging} /> </> 
          : <> <Header/><LogoBox/><MyEvents/></> 
      }
    </>
  );
}

export default home;