import React from 'react';


export default class FriendAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue = event => {
    this.setState({ inputValue: event.target.value });
  }

  addFriendAndEraseInput = () => {
    this.props.addFriend(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <>
        <span>Type your new friends name:</span>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />

        <button onClick={this.addFriendAndEraseInput}>Add friend!</button>
      </>
    );
  }
}
