import React from 'react';
import Count from './Count';


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => this.setState(
    st => ({ counter: st.counter + 1 }),
  )


  decrement = () => this.setState(
    st => ({ counter: st.counter - 1 }),
  )

  render() {
    return (
      <div>
        <Count
          count={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}
