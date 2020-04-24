import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import webpackLogo from './assets/images/webpack.png';

ReactDOM.render(
  <>
    <h1>Hello React</h1>
    <img className='logo' src={webpackLogo} alt='Webpack Logo' />
  </>,
  document.getElementById('root')
);
