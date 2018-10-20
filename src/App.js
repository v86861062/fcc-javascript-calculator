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
    let n = event.target.dataset.number
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
    let o = event.target.dataset.operator
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
      <div className="calculator">
        <div id="equals" onClick={this.handleClickEquals}>=</div>

        <div id="zero"  data-number={'0'} onClick={this.handleClickNumber}>0</div>
        <div id="one"   data-number={'1'} onClick={this.handleClickNumber}>1</div>
        <div id="two"   data-number={'2'} onClick={this.handleClickNumber}>2</div>
        <div id="three" data-number={'3'} onClick={this.handleClickNumber}>3</div>
        <div id="four"  data-number={'4'} onClick={this.handleClickNumber}>4</div>
        <div id="five"  data-number={'5'} onClick={this.handleClickNumber}>5</div>
        <div id="six"   data-number={'6'} onClick={this.handleClickNumber}>6</div>
        <div id="seven" data-number={'7'} onClick={this.handleClickNumber}>7</div>
        <div id="eight" data-number={'8'} onClick={this.handleClickNumber}>8</div>
        <div id="nine"  data-number={'9'} onClick={this.handleClickNumber}>9</div>
        
        <div id="subtract" data-operator={'-'} onClick={this.handleClickOperator}>-</div>
        <div id="add"      data-operator={'+'} onClick={this.handleClickOperator}>+</div>
        <div id="multiply" data-operator={'x'} onClick={this.handleClickOperator}>x</div>
        <div id="divide"   data-operator={'/'} onClick={this.handleClickOperator}>/</div>

        <div id="decimal" onClick={this.handleClickDecimal}>.</div>
        <div id="clear" onClick={this.handleClickClear}>AC</div>
        
        <h1 id="formula">{formula}</h1>
        <h1 id="display">{display}</h1>
      </div>
    )
  }
}

export default App
