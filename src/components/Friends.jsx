import React from 'react';

// Implement `Friends` component so it takes an array of friends,
// each friend being an object like so: { name: 'Peter' },
// and renders a list of friends' names.
// Wrap everything in a div with the class of 'sub-container' so styles will work.
export default function Friends({ friends }) {
  return (
    <div className="sub-container">
      <h3>These are my friends:</h3>
      {
        friends.map((friend, idx) => (
          <div key={idx}>{friend.name}</div>
        ))
      }
    </div>
  );
}
