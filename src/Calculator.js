import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentValue: '',
      previousValue: '',
      operator: null,
      isOperatorClicked: false,
    };
  }

  handleNumberClick = (number) => { 
    if (this.state.display === '0' || this.state.isOperatorClicked) {
      this.setState({
        display: number,
        currentValue: number,
        isOperatorClicked: false,
      });
    } else {
      this.setState((prevState) => ({
        display: prevState.display + number,
        currentValue: prevState.currentValue + number,
      }));
    }
  };

  handleOperatorClick = (operator) => {
    if (this.state.operator) {
      this.handleEqualClick();
    }
    this.setState({
      operator,
      isOperatorClicked: true,
      previousValue: this.state.currentValue,
    });
  };

  handleEqualClick = () => {
    if (this.state.operator) {
      const { previousValue, operator, currentValue } = this.state;
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentValue);

      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
        case 'sin':
          result= Math.sin(parseFloat(currentValue));
          break;
        case 'cos':
          result= Math.cos(parseFloat(currentValue));
          break;
        case 'tan':
          result= Math.tan(parseFloat(currentValue));
          break;
        case 'exp':
          result = Math.exp(parseFloat(currentValue));
        default:
          return;
      }

      this.setState({
        display: result.toString(),
        currentValue: result.toString(),
        operator: null,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentValue: '',
      previousValue: '',
      operator: null,
      isOperatorClicked: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleNumberClick('7')}>7</button>
            <button onClick={() => this.handleNumberClick('8')}>8</button>
            <button onClick={() => this.handleNumberClick('9')}>9</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('4')}>4</button>
            <button onClick={() => this.handleNumberClick('5')}>5</button>
            <button onClick={() => this.handleNumberClick('6')}>6</button>
            <button onClick={() => this.handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('1')}>1</button>
            <button onClick={() => this.handleNumberClick('2')}>2</button>
            <button onClick={() => this.handleNumberClick('3')}>3</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={this.handleClearClick}>C</button>
            <button onClick={this.handleEqualClick}>=</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
          <button onClick={() => this.handleOperatorClick('sin')}>sin</button>
          <button onClick={() => this.handleOperatorClick('cos')}>cos</button>
          <button onClick={() => this.handleOperatorClick('tan')}>tan</button>
          <button onClick={() => this.handleOperatorClick('exp')}>exp</button>
        </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
