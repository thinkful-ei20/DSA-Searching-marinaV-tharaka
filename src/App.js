import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOutput: '',
      list: [1, 2, 3, 4, 5, 6, 25, 20, 30, 72, 89]
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

    this.binarySearch = (input, start, end, count) => {
      let minIndex = start === undefined ? 0 : start;
      let maxIndex = end === undefined ? this.state.list.length : end;
      let tick = count === undefined ? 0 : count;
      const number = parseInt(input);
      // base case
      if (minIndex > maxIndex) {
        return `Item was not found. It took ${tick} time(s) to iterate over the data set using Binary Search algorithm`;
      }

      //
      const middleIndex = Math.floor((minIndex + maxIndex) / 2);

      const item = this.state.list[middleIndex];

      console.log(minIndex, maxIndex, middleIndex, tick);

      if (item === number) {
        tick++;
        console.log(tick);
        return `It took ${tick} time(s) to iterate over the data set using Binary Search algorithm`;
      }
      else if (item < number) {
        tick++;
        return this.binarySearch(number, middleIndex + 1, maxIndex, tick);
      }
      else if (item > number) {
        tick++;
        return this.binarySearch(number, minIndex, middleIndex - 1, tick);
      }
    };

  }



  calcLinearSearch = e => {
    e.preventDefault();
    const userInput = this.input.value;
    const textOutput = this.linearSearch(userInput);
    this.setState({
      textOutput
    });
  };

  calcBinarySearch = e => {
    e.preventDefault();
    const userInput = this.input.value;
    const textOutput = this.binarySearch(userInput);
    this.setState({
      textOutput
    });
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
