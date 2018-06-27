import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOutput: '',
      list: [89, 30, 25, 32, 72]
    };
    this.linearSearch = number => {
      //some logic
      let num = parseInt(number);
      let linearCount = 0;

      for(let i = 0; i < this.state.list.length; i++) {
        linearCount++;
        if(this.state.list[i] === num) {
          return `It took ${linearCount} times to find the number for the linear search.`;
        }
      }
      return `Item was not found and it took ${linearCount} times to iterate through data.`;
    };

  }



  calcLinearSearch = e => {
    e.preventDefault();
    const userInput = this.input.value;
    const textOutput = this.linearSearch(userInput);
    this.setState({textOutput: textOutput});
  };

  calcBinarySearch = e => {
    e.preventDefault();
    const value = this.input.value;
    console.log(value);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            Enter number:
            <input type="text" ref={input => this.input = input} />
            <button
              type="button"
              onClick={this.calcLinearSearch}
            >Linear Search</button>
            <button
              type="button"
              onClick={this.calcBinarySearch}
            >Binary Search</button>
          </label>
        </form>
        <div>{this.state.textOutput}</div>
      </React.Fragment>
    );
  }
}

export default App;
