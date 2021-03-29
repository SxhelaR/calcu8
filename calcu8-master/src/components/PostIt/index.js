import React from "react";
import style from '../PostIt/PostIt.module.css'
import Header from "../Header/index.js"

class PostIt extends React.Component {
    render () {
        return (
            < div className ={style.postWrapper}>
              <div class={style.postIts}></div>
            <div class={style.postIt}></div>

        </div>

       
        )
    }
}

export default PostIt;

