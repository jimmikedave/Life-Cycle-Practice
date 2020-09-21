import React, {Component} from 'react';
import './App.css';
import Child from './child';

class App extends Component {

  // State can live outside the constructor, but once constructor is read
  // the states will change accordingly.

  // state = {
  //   name: "peter"
  // }

  // Life Cycle of components (3 things)
  // - initial render
  // - change state/prop (re-render based on change)
  // - destroy component (what would happen)

  // First thing that runs
  // Runs one time & only runs when it initially renders
  // Good place to set initial state
  constructor(){
    super(); // Mandatory when constructor() is used, without it "this" is uninitialized
    console.log('constructor')
    this.state = {
      name: "john"
    }
  }

  // The component has not mounted yet.
  // Ideal place to setState before the state renders.
  // Sometimes based on the props you want to change the state. 
  componentWillMount() {
    if(window.innerWidth > 500) {
      this.setState({innerWidth: window.innerWidth});
    }
    console.log("componentWillMount")
  }

  // The component did render... (After render())
  // Only runs once and only runs during the initial cycle.
  // You can make an AJAX call.
  // Set up subscriptions here. (Use componentDidUnmount for unsubscribing)
  componentDidMount() {
    console.log("componentDidMount")
  }

  // Don't try to change props in this method
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // Make a decesion if you want a component to re-render or not? Make the deceision here.
  // Based on the logic you need to make the decision on.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true; // true = sends the rendering false = rendering stops
  }

  // When you change state render and child render run
  changeState() {
    this.setState({name:'jill'});
  }

  // Similar to componentWillMount set some variables based on the new state and props
  // DO NOT RUN SET STATE HERE
  // Infinite loop because it will call itself
  componentWillUpdate() {
    console.log('componentWillUpdate')
}
  // Third party UI elements can be setup here.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  // Cleaning up is done here. 
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  unmountChild() {
    this.setState({name:'robert'});
  }

  // Do not call setState in render
  // Render is called every time state is changed
  render() {
    console.log('render')

    if(this.state.name === 'robert') {
      console.log('testing')
      return (<div/>);
    }

    return (
      <div className="App">
        name:{this.state.name}
        | innerWidth:{this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
