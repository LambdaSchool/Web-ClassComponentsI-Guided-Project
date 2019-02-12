import React from 'react';
import Count from './Count';


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => this.setState({ counter: 2 })

  render() {
    return (
      <div>
        <Count count={this.state.counter} />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
