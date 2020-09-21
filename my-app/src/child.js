import React, {Component} from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super(); 
    console.log('child constructor')
  }

  componentWillMount() {
    console.log("child componentWillMount")
  }

  componentDidMount() {
    console.log("child componentDidMount")
  }

  // Don't try to change props in this method
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate')
    return true; // false stops the re-rendering 
  }

  componentWillUpdate() {
      console.log('child componentWillUpdate')
  }

  // Cleaning up is done here. 
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  render() {
    console.log('child render')
    return (
      <div className="App">
        child name: {this.props.name}
      </div>
    );
  }
}

export default Child;
