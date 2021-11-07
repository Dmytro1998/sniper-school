import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const Mainapp = () =>( 
  <BrowserRouter>
  <App/>
  </BrowserRouter>


)
ReactDOM.render(
  
 
    <Mainapp />
 ,
  document.getElementById('root')
);


