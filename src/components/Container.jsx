import React from 'react';
import Count from './Count';
import Friends from './Friends';
import FriendAdder from './FriendAdder';
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
      friends: [{ name: 'Tom', age: 30 }, { name: 'Luke', age: 27 }],
    };
    this.decrement = this.decrement.bind(this);
  }

  // state = {
  //   counter: 7,
  //   friends: [{ name: 'Tom' }, { name: 'Luke' }],
  // }

  increment = howMuch => {
    // this.state.counter = this.state.counter + 1; // WRONG!!!
    // this.setState({ counter: this.state + 1 }); // not good enough: we need "current state",
    // and because React batches state update operations, `this.state` might not be the right thing
    this.setState(st => ({ counter: st.counter + howMuch }));

    // you can't count on updated this.state here!!!
    // Use second argument of setState to pass a callback if you need to
    // do something depending on updated state, or use componentDidUpdate lifecycle hook
  }

  decrement(howMuch) {
    // We need to bind this method in the constructor.
    // Use arrow function to avoid this
    this.setState(st => ({ counter: st.counter - howMuch }));
  }

  addFriend = (name, age) => {
    // we don't need to do `this.addFriend = this.addFriend.bind(this)`
    // in the constructor with the arrow function syntax.
    // Do not use destructive array methods on st.friends!! (push, etc)
    this.setState(st => ({ friends: st.friends.concat({ name, age }) }));
  }

  render() {
    // do not use setState in the render method!!!

    return (
      // The purpose of the container is to distribute state and
      // state-altering callbacks via props, to the child components
      <div className='container'>
        <Count
          count={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Friends
          friends={this.state.friends}
        />

        <FriendAdder addFriend={this.addFriend} />
      </div>
    );
  }
}

export default Container;
