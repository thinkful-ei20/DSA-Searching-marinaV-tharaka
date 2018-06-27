import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userInput: null,
      count: 0,
      list: [89, 30, 25, 32, 72]
    };
    this.linearSearch = number => {
      //some logic

    };

  }

  calcLinearSearch = e => {
    e.preventDefault();
    const userInput = this.input.value;
    const count = this.linearSearch(userInput);
    console.log(count);
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
        <div>It took ${this.count} numbers of times.</div>
      </React.Fragment>
    );
  }
}

export default App;
