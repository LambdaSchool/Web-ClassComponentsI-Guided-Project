import React from 'react';
import Count from './Count';
import Friends from './Friends';

// 1- Implement `Count` functional component.
// 2- Implement `Friends` functional component.
// 3- Refactor `Container` so it has a constructor.
// 4- Initialize state in constructor with fields `count` and `friends`.
// 5- Have `Count` and `Friends` components consume state instead of hard-coded values.
// 6- Create `increment` and `decrement` methods in Container (learn `setState`).
// 7- Pass methods to Count component.
// 8- Create an `addFriend` method in Container that takes `newFriendName`.
// 9- Create a `FriendsAdder` class component that consumes the `addFriend` method.
// 10- Flesh out `FriendsAdder` with a text input and submit button.

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.initialCount,
      friends: [{ name: 'Tom' }, { name: 'Luke' }],
      someOtherSliceOfState: 0,
    };
    this.decrement = this.decrement.bind(this);
  }

  // state = {
  //   counter: 7,
  //   friends: [{ name: 'Tom' }, { name: 'Luke' }],
  // }

  increment = () => {
    // this.state.counter = this.state.counter + 1; // WRONG!!!
    // this.setState({ counter: this.state + 1 }); // not good enough: we need "current state",
    // and because React batches state update operations, `this.state` might not be the right thing
    this.setState(
      this.setState(st => ({ counter: st.counter + 1 })),
    );

    // you can't count on updated this.state
  }

  decrement() {
    this.setState(st => ({ counter: st.counter - 1 }));
  }

  render() {
    const { counter, friends } = this.state;

    return (
      <div className='container'>
        <Count
          count={counter}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Friends
          friends={friends}
        />
      </div>
    );
  }
}

export default Container;
