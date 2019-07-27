import React, { Component } from 'react';

class App extends Component {
  state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  

  handleAddClick = (e) => {
    const currentVal = this.state.displayValue;
    this.setState({
      operation: '+',
      previousValue: currentVal,
    }, () => {
      console.log(this.state)
    });
  }

  handleClearClick = (e) => {
    this.setState({
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
    }, () => {
      console.log(this.state)
    });
  }

  handleDecimalClick = (e) => {
    const numDisplayed = this.state.displayValue;
    if (!numDisplayed.toString().includes('.')) {
      const newNum = numDisplayed + '.';
      this.setState({ displayValue: newNum }, () => {
        console.log(this.state)
      });
    }
  }

  handleDivideClick = (e) => {
    const currentVal = this.state.displayValue;
    this.setState({
      operation: '/',
      previousValue: currentVal,
    }, () => {
      console.log(this.state)
    });
  }

  handleEqualClick = (e) => {
    let result = this.state.displayValue;
    if (this.state.operation === '+') {
      result = parseInt(this.state.previousValue) + parseInt(this.state.displayValue);
    }
    if (this.state.operation === '-') {
      result = parseInt(this.state.previousValue) - parseInt(this.state.displayValue);
    }
    if (this.state.operation === 'x') {
      result = parseInt(this.state.previousValue) * parseInt(this.state.displayValue);
    }
    if (this.state.operation === '/') {
      result = parseInt(this.state.previousValue) / parseInt(this.state.displayValue);
    }
    this.setState({ displayValue: result });
  }

  handleMultiplyClick = (e) => {
    const currentVal = this.state.displayValue;
    this.setState({
      operation: 'x',
      previousValue: currentVal,
    }, () => {
      console.log(this.state)
    });
  }

  handleNumClick = (e) => {
    const numDisplayed = this.state.displayValue;
    const numPressed = e.target.innerText;
    const op = this.state.operation;

    if (op === null && numDisplayed === 0) {
      this.setState({ displayValue: numPressed }, () => {
        console.log(this.state)
      });
    } else if (op !== null && numDisplayed !== 0) {
      this.setState({ displayValue: numPressed }, () => {
        console.log(this.state)
      });
    } else {
      const newNum = numDisplayed + numPressed;
      this.setState({ displayValue: newNum }, () => {
        console.log(this.state)
      });
    }
  }

  handlePercentClick = (e) => {
    const newNum = this.state.displayValue / 100;
    this.setState({ displayValue: newNum }, () => {
      console.log(this.state)
    });
  }

  handleSignClick = (e) => {
    const currentVal = this.state.displayValue;
    if (currentVal > 0) {
      this.setState({ displayValue: -(currentVal) }, () => {
        console.log(this.state)
      })
    }
    if (currentVal < 0) {
      this.setState({ displayValue: Math.abs(currentVal) }, () => {
        console.log(this.state)
      })
    }
  }

  handleSubtractClick = (e) => {
    const currentVal = this.state.displayValue;
    this.setState({
      operation: '-',
      previousValue: currentVal,
    }, () => {
      console.log(this.state)
    });

  }

  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <div className='row display'>{this.state.displayValue}</div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleClearClick(e)}>AC</div>
            <div className='col button' onClick={e => this.handlePercentClick(e)}>%</div>
            <div className='col button' onClick={e => this.handleSignClick(e)}>±</div>
            <div className='col orange' onClick={e => this.handleDivideClick(e)}>÷</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>7</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>8</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>9</div>
            <div className='col orange' onClick={e => this.handleMultiplyClick(e)}>x</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>4</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>5</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>6</div>
            <div className='col orange' onClick={e => this.handleSubtractClick(e)}>-</div>
          </div>
          <div className='row'>
            <div className='col button' onClick={e => this.handleNumClick(e)}>1</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>2</div>
            <div className='col button' onClick={e => this.handleNumClick(e)}>3</div>
            <div className='col orange' onClick={e => this.handleAddClick(e)}>+</div>
          </div>
          <div className='row'>
            <div className='col-2 button' onClick={e => this.handleNumClick(e)}>0</div>
            <div className='col button' onClick={e => this.handleDecimalClick(e)}>.</div>
            <div className='col orange' onClick={e => this.handleEqualClick(e)}>=</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
