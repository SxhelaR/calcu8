import React from "react";
import style from "../Calculator/Calculator.module.css";
import Number from "../Number/index.js";

class Calculator extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    inputValue: ""
  }
}

updateInputValue(e) {
  this.setState({
    inputValue: e.target.value
  })
}

  render() {
    return (
      <div className={style.outline}>
        <input className={style.input} value={this.state.inputValue} onChange={e => this.updateInputValue(e)}>{this.props.value}</input>
        <div className={style.group}>
          <Number value={"+"}/>
          <Number value={"/"}/>
            <Number value={"*"}/>
            <Number value={"-"}/>
            <Number value={9}/>
            <Number value={8}/>
            <Number value={7}/>
            <Number value={6}/>
            <Number value={5}/>
            <Number value={4}/>
            <Number value={3}/>
            <Number value={2}/>
            <Number value={1}/>
            <Number value={0}/>
            <Number value={"AC"}/>
            <Number value={"="}/>
        </div>
      </div>
    );
  }
}

export default Calculator;
