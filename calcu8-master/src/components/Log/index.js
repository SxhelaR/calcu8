import React from "react";
import style from "../Log/Log.module.css"
import Navbar from "../Navbar/index.js"
import Login from "../Login/index.js"


function Log() {
  return (
    <div className={style.wrapper}>
      <div  className={style.header}><Navbar /></div> 
      <div  className={style.content}><Login /></div>
      <div className={style.footer}></div>

    </div>
  );
}

export default Log;
