import React from 'react';
import Count from './Count';
import Friends from './Friends';


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
