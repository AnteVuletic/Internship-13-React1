import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColoredText from './Coloredtext';
class App extends Component {
  constructor(){
    super();
    this.state={
      currentColor: 0,
      colorArray: ['black','red','blue','green'],
      activeIndexes: [false,false,false]
    }
  }
  handleActive = (index) =>{
    this.setState((previousState)=>{
      previousState.activeIndexes[index] = !previousState.activeIndexes[index];
      return{
        activeIndexes: previousState.activeIndexes
      }
    });
  }
  handleColor = (colorIndex) =>{
    this.setState({currentColor: colorIndex});
    console.log(this.state.currentColor)
  }
  render() {
    return (
    <>
      <h1>Colors</h1>
      <p style={{fontWeight : this.state.currentColor === 1 ? "bold": "normal"}} onClick={() => this.handleColor(1)}>Red</p>
      <p style={{fontWeight : this.state.currentColor === 2 ? "bold": "normal"}} onClick={() => this.handleColor(2)}>Blue</p>
      <p style={{fontWeight : this.state.currentColor === 3 ? "bold": "normal"}} onClick={() => this.handleColor(3)}>Green</p>
      <h1>Indexes</h1>
      <p onClick={() => this.handleActive(0)}>1</p>
      <p onClick={() => this.handleActive(1)}>2</p>
      <p onClick={() => this.handleActive(2)}>3</p>
      <h1>Result</h1>
      <ColoredText color = {this.state.colorArray[this.state.currentColor]} active={this.state.activeIndexes[0]} id={1}></ColoredText>
      <ColoredText color = {this.state.colorArray[this.state.currentColor]} active={this.state.activeIndexes[1]} id={2}></ColoredText>
      <ColoredText color = {this.state.colorArray[this.state.currentColor]} active={this.state.activeIndexes[2]} id={3}></ColoredText>
    </>
    );
  }
}

export default App;
