import React from 'react';
import ReactDom from 'react-dom';

// Renders the application in a certain route of our HTML document.
import App from './App'; 

ReactDom.render(<App/>, document.querySelector('#root'));

