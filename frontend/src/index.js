import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import Nav from './nav.js';
import { Dharun } from './dharun.js';
import Routing from './routing.js';
import Cardview from './cardview.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Routing/>
  {/*<BrowserRouter>
    <Cardview />
</BrowserRouter>*/}

  
    
  </>

);
