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
      brfk: "",
      newCode: ""
    };
  }

  handleChange = (event) => {
    if(event.target.name==="brfk"){
      this.setState({newCode:this.codeConvert(event.target.value)})
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name==="newCode"){
    }
    else{
      this.setState({[event.target.name]: event.target.value});
    }
  }

  codeConvert = (s) =>{
    return s;
  }

  render() {
    return (
      <form>

        <label>
          brfk:
            <input type="text" name="brfk" value={this.state.brfk} onChange={this.handleChange} />
        </label>

        <label>
          new:
            <input type="text" name="newCode" value={this.state.newCode} onChange={this.handleChange} />
        </label>

        {/*
        <br />

        <label>
          &lt; :
          <input type="text" name="lt" value={lt} onChange={this.handleChange} />
        </label>
        <label>
          &gt;:
          <input type="text" name="gt" value={gt} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          +:
          <input type="text" name="plus" value={plus} onChange={this.handleChange} />
        </label>
        <label>
          -:
          <input type="text" name="minus" value={minus} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          .:
          <input type="text" name="dot" value={dot} onChange={this.handleChange} />
        </label>
        <label>
          ,:
          <input type="text" name="conma" value={conma} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          [:
          <input type="text" name="leftPrts" value={leftPrts} onChange={this.handleChange} />
        </label>
        <label>
          ]:
          <input type="text" name="rightPrts" value={rightPrts} onChange={this.handleChange} />
        </label>
      */}
      </form>
      
    );
  }
}

export default App;
