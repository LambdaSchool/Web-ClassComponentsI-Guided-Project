import React from 'react';

export default function Friends({ friends }) {
  return (
    <div className='sub-container'>
      <h3>This is my list of friends:</h3>
      {
        friends.map((friend, idx) => <div key={idx}>{friend.name}</div>)
      }
    </div>
  );
}
