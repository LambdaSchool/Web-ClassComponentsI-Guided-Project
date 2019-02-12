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
  render() {
    return (
      <div className='container'>
        <Count
          count={7}
          increment={() => console.log('incrementing!')}
          decrement={() => console.log('decrementing!')}
        />

        <Friends
          friends={[{ name: 'Tom' }, { name: 'Luke' }]}
        />
      </div>
    );
  }
}

export default Container;
