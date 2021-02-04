import './App.css';
import React, { Component } from 'react';
let count = 4;

function App() {
  return (
    <BrainFxxkBox />
  );
}


class BrainFxxkBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lt: "",
      gt: "",
    };
  }

  handleChange(event) {
  }

  render() {
    return (
      <form>

        <label>
          brfk:
          <input type="text" name="brfk" value={this.state.brfk} onChange={this.handleChange} />
        </label>
        <br />

        <label>
          &lt; :
          <input type="text" name="lt" value={this.state.lt} onChange={this.handleChange} />
        </label>
        <label>
          &gt;:
          <input type="text" name="gt" value={this.state.gt} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          +:
          <input type="text" name="plus" value={this.state.plus} onChange={this.handleChange} />
        </label>
        <label>
          -:
          <input type="text" name="minus" value={this.state.minus} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          .:
          <input type="text" name="dot" value={this.state.dot} onChange={this.handleChange} />
        </label>
        <label>
          ,:
          <input type="text" name="conma" value={this.state.conma} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          [:
          <input type="text" name="leftPrts" value={this.state.leftPrts} onChange={this.handleChange} />
        </label>
        <label>
          ]:
          <input type="text" name="rightPrts" value={this.state.rightPrts} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default App;
