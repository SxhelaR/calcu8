import React from "react";
import style from "../Number/Number.module.css";

class Number extends React.Component {
  render() {
    return (
        <button className={style.dashedThin}>{this.props.value}</button>

    );
  }
}



export default Number;
