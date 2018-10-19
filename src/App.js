import React, { Component } from 'react'
import './App.scss'

const isStartZero = /^0/,
      endsWithOperator = /[-x+/]$/,
      lastNumberHasDot = /\d+\.\d*$/
      
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      display: "0",
      formula: ""
    }
  }

  isAbleAddDot = (str) => {
    if(lastNumberHasDot.test(str) || endsWithOperator.test(str)) {
      return false
    } else {
      return true
    }
  }

  handleClickNumber = (event) => {
    let n = event.target.value
    this.setState(prevState => ({
      display: isStartZero.test(prevState.display) ?
                  n :prevState.display + n,
      formula: isStartZero.test(prevState.formula) ?
                n :prevState.formula + n
    }))
  }

  handleClickDecimal = () => {
    this.setState(prevState => ({
      display:  this.isAbleAddDot(prevState.display) ? 
        prevState.display + '.' : prevState.display,
      formula:  this.isAbleAddDot(prevState.formula) ? 
        prevState.formula + '.' : prevState.formula,
    }))
  }

  handleClickOperator = (event) => {
    let o = event.target.value
    this.setState(prevState => ({
      display: o,
      formula: endsWithOperator.test(prevState.formula) ?
                prevState.formula.replace(endsWithOperator, o) : 
                prevState.formula + o
    }))
  }

  handleClickEquals = () => {
    let f = this.state.formula.replace('x', '*')

    try {
      /* eval is eviL, 
       * 但輸入的formula是能掌控的，
       * 這裡也沒有效能需求。 沒問題 :D */
      let result = eval(f)
      this.setState({ 
        display: result, 
        formula: String(result)
      })
    } 
    catch (e) {
      /* 這是開發時方便找出不合理的 formula */
      console.log(e)
      console.log("formula: " + f)
    }
  }

  handleClickClear = () => {
    this.setState(({ 
      display: '0',
      formula: ''
    }))
  }

  render() {
    const { display, formula} = this.state
    return (
      <div className="test">
          <button id="equals" onClick={this.handleClickEquals}>=</button>

          <button id="zero"  value='0' onClick={this.handleClickNumber}>0</button>
          <button id="one"   value='1' onClick={this.handleClickNumber}>1</button>
          <button id="two"   value='2' onClick={this.handleClickNumber}>2</button>
          <button id="three" value='3' onClick={this.handleClickNumber}>3</button>
          <button id="four"  value='4' onClick={this.handleClickNumber}>4</button>
          <button id="five"  value='5'  onClick={this.handleClickNumber}>5</button>
          <button id="six"   value='6'  onClick={this.handleClickNumber}>6</button>
          <button id="seven" value='7'  onClick={this.handleClickNumber}>7</button>
          <button id="eight" value='8'  onClick={this.handleClickNumber}>8</button>
          <button id="nine"  value='9'  onClick={this.handleClickNumber}>9</button>
          
          <button id="add"      value='+' onClick={this.handleClickOperator}>+</button>
          <button id="subtract" value='-' onClick={this.handleClickOperator}>-</button>
          <button id="multiply" value='x' onClick={this.handleClickOperator}>*</button>
          <button id="divide"   value='/' onClick={this.handleClickOperator}>/</button>

          <button id="decimal" onClick={this.handleClickDecimal}>.</button>
          <button id="clear" onClick={this.handleClickClear}>AC</button>
          
          <h1>{formula}</h1>
          <p id="display">{display}</p>
          
      </div>
    )
  }
}

export default App
