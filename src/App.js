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
      newCode: "",
      lt: "<",
      gt: ">",
      plus: "+",
      minus: "-",
      dot: ".",
      conma: ",",
      leftPrts: "[",
      rightPrts: "]"
    };
  }

  handleChange = (event) => {
    if(event.target.name==="brfk"){
      this.setState({newCode:this.codeConvert(event.target.value)});
      this.setState({[event.target.name]: event.target.value});
    }
    if(event.target.name==="newCode"){
      this.setState({brfk:this.codeConvertReverse(event.target.value)});
      this.setState({[event.target.name]: event.target.value});
    }
    else{
      this.setState({newCode:this.codeConvert(this.state.brfk)});
      this.setState({[event.target.name]: event.target.value});
    }
  }

  codeConvert = (s) =>{
    s = s.replaceAll("<",this.state.lt);
    s = s.replaceAll(">",this.state.gt);
    s = s.replaceAll("+",this.state.plus);
    s = s.replaceAll("-",this.state.minus);
    s = s.replaceAll(".",this.state.dot);
    s = s.replaceAll(",",this.state.conma);
    s = s.replaceAll("[",this.state.leftPrts);
    s = s.replaceAll("]",this.state.rightPrts);
    return s;
  }

  codeConvertReverse = (s) =>{
    s = s.replaceAll(this.state.lt,"<");
    s = s.replaceAll(this.state.gt,">");
    s = s.replaceAll(this.state.plus,"+");
    s = s.replaceAll(this.state.minus,"-");
    s = s.replaceAll(this.state.dot,".");
    s = s.replaceAll(this.state.conma,",");
    s = s.replaceAll(this.state.leftPrts,"[");
    s = s.replaceAll(this.state.rightPrts,"]");
    return s;
  }

  render() {
    return (

      <form>

        <label>
          brfk:
            <input type="text" name="brfk" value={this.state.brfk} onChange={this.handleChange} />
        </label>
        
        <input type="button" value="fxxk(sync)" onClick={this.handleChange}/>
        <br />

        <label>
          new:
            <textarea type="text" name="newCode" value={this.state.newCode} onChange={this.handleChange} />
        </label>

        <br />

        <label>
          &lt; :
          <input type="text" name="lt" value={this.state.lt} onChange={this.handleChange} />
        </label>
        <label>
          &gt; :
          <input type="text" name="gt" value={this.state.gt} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          + :
          <input type="text" name="plus" value={this.state.plus} onChange={this.handleChange} />
        </label>
        <label>
          - :
          <input type="text" name="minus" value={this.state.minus} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          . :
          <input type="text" name="dot" value={this.state.dot} onChange={this.handleChange} />
        </label>
        <label>
          , :
          <input type="text" name="conma" value={this.state.conma} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          [ :
          <input type="text" name="leftPrts" value={this.state.leftPrts} onChange={this.handleChange} />
        </label>
        <label>
          ] :
          <input type="text" name="rightPrts" value={this.state.rightPrts} onChange={this.handleChange} />
        </label>

      </form>
      
    );
  }
}

export default App;
