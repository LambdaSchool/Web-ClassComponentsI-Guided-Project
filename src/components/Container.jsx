import React from 'react';
import Count from './Count';
import Friends from './Friends';
import FriendAdder from './FriendAdder';


class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [{ name: 'Tom' }, { name: 'Josh' }],
    };
  }

  increment = () => this.setState(
    st => ({ counter: st.counter + 1 }),
  )

  decrement = () => this.setState(
    st => ({ counter: st.counter - 1 }),
  )

  addFriend = name => this.setState(
    st => ({ friends: st.friends.concat({ name }) }),
  )

  render() {
    return (
      <div>
        <Count
          count={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />

        <Friends friends={this.state.friends} />

        <FriendAdder addFriend={this.addFriend} />
      </div>
    );
  }
}

export default Container;
