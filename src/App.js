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

  handleClickNumber = (number) => {
    this.setState(prevState => ({
      display: isStartZero.test(prevState.display) ?
        number : prevState.display + number,
      formula: isStartZero.test(prevState.formula) ?
        number : prevState.formula + number
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

  handleClickOperator = (operator) => {
    this.setState(prevState => ({
      display: operator,
      formula: endsWithOperator.test(prevState.formula) ?
                prevState.formula.replace(endsWithOperator, operator) : 
                prevState.formula + operator
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
      /* 方便開發時方便找出不合理的 formula */
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

        <div id="zero"  onClick={() => this.handleClickNumber('0')}>0</div>
        <div id="one"   onClick={() => this.handleClickNumber('1')}>1</div>
        <div id="two"   onClick={() => this.handleClickNumber('2')}>2</div>
        <div id="three" onClick={() => this.handleClickNumber('3')}>3</div>
        <div id="four"  onClick={() => this.handleClickNumber('4')}>4</div>
        <div id="five"  onClick={() => this.handleClickNumber('5')}>5</div>
        <div id="six"   onClick={() => this.handleClickNumber('6')}>6</div>
        <div id="seven" onClick={() => this.handleClickNumber('7')}>7</div>
        <div id="eight" onClick={() => this.handleClickNumber('8')}>8</div>
        <div id="nine"  onClick={() => this.handleClickNumber('9')}>9</div>
        
        <div id="subtract" onClick={() => this.handleClickOperator('-')}>-</div>
        <div id="multiply" onClick={() => this.handleClickOperator('x')}>x</div>
        <div id="divide"   onClick={() => this.handleClickOperator('/')}>/</div>
        <div id="add"      onClick={() => this.handleClickOperator('+')}>+</div>

        <div id="decimal" onClick={this.handleClickDecimal}>.</div>
        <div id="clear" onClick={this.handleClickClear}>AC</div>
        
        <h1 id="formula">{formula}</h1>
        <h1 id="display">{display}</h1>
      </div>
    )
  }
}

export default App
