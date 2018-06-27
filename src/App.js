import React, { Component } from 'react';
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

    this.binarySearch = (input, start = 0, end = this.state.list.length - 1) => {
      const number = parseInt(input);
      // base case
      if (start > end) {
        return `Item was not found and it took`;
      }

      //
      const middleIndex = Math.floor((start + end) / 2);

      const item = this.state.list[middleIndex];

      console.log(start, end, middleIndex);

      if (item === number) {
        return 'Item is found';
      }
      else if (item < number) {
        return this.binarySearch(number, middleIndex + 1, end);
      }
      else if (item > number) {
        return this.binarySearch(number, start, middleIndex - 1);
      }
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
    const userInput = this.input.value;
    const textOutput = this.binarySearch(userInput);
    console.log(textOutput);
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
