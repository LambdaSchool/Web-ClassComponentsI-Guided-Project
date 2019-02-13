import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './App.less';


ReactDOM.render(<Container initialCount={3} />, document.querySelector('#target1'));
