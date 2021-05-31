import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { WhoWeAre,WhereWeWork,WhatWeDo,ContactUs } from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <WhoWeAre title={'Who We Are'}/>
        </Route>

        <Route path='/WhatWeDo'>
          <WhatWeDo title={'What We Do'}/>
        </Route>

        <Route path='/WhereWeWork'>
          <WhereWeWork title={'Where We Work'}/>
        </Route>

        <Route path='/ContactUs'>
          <ContactUs title={'Contact Us'}/>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
