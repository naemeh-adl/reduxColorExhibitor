import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {textFieldChangedAction} from './actions'
import { render } from '@testing-library/react';

const mapStateToProps=(state)=>({
      textFieldValue:state.textFieldValue
});
const mapDispatchToProps=(dispatch)=>{
  return{
  changeColor:(event)=> dispatch(textFieldChangedAction(event.target.value))}
};
class App extends Component{
  constructor(){
      super();
      }
     
  render(){
    const {textFieldValue, changeColor}=this.props;
    console.log('hi');//textFieldValue'');
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Enter color: </h1>
          <input
              type="text"
            //  value={textFieldValue}
              onChange={changeColor}
          />
          <h1>
            Color:
          </h1>
          <textarea style={{backgroundColor:textFieldValue}}>here is color!</textarea>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
