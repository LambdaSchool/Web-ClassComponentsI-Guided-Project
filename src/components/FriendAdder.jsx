import React from 'react';


export class FriendAdder extends React.Component {
  state = {
    inputValue: '',
  }

  clearInput = () => {
    this.setState({ inputValue: '' });
  }

  changeHandler = event => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  onButtonClick = () => {
    // how do we use this.props.addFriend ????
    this.props.addFriend(this.state.inputValue);
    this.clearInput();
  }

  render() {
    return (
      <div className='sub-container'>
        <h3>Add a friend!</h3>
        name: <input type="text" value={this.state.inputValue} onChange={this.changeHandler} />
        <button onClick={this.onButtonClick}>Add Friend!</button>
      </div>
    );
  }
}

export default FriendAdder;
