import React from "react";
import Calculator from "../Calculator/index.js";
import Navbar from "../Navbar/index.js"
import PostIt from "../PostIt/index.js"
import Header from "../Header/index.js"
import style from "../Main/Main.module.css"


function Main() {
  return (
    <div className={style.wrapper}>
      <div  className={style.header}><Navbar /></div> 
      <div  className={style.sidebar}><Calculator /></div>
      <div  className={style.sontent}>
        <p className={style.edit}>2+2=4-1=3</p>
        < h5 className ={style.subheading}> quick maths </h5><p className={style.edit}>(Big Shaq)</p >
        <PostIt />
          <Header />
        </div>

      <div  className={style.footer}></div> 
    </div>
  );
}

export default Main;
