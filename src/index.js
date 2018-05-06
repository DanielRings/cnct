import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import  App from './App';
import { Book, Engage, Appointment, Telemedicine } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/engage" component={Engage} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/telemedicine" component={Telemedicine} />
      </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
