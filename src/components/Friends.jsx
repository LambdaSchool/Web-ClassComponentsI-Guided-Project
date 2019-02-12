import React from 'react';

export default function Friends({ friends }) {
  return (
    <div>
      {
        friends.map((friend, idx) => <div key={idx}>{friend.name}</div>)
      }
    </div>
  );
}
