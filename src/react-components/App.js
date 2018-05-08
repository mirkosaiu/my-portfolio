import 'normalize.css';
import 'Css/Theme.css';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MobileView, isMobile } from 'react-device-detect'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'Reducers'

import Home from 'Components/Home';
import PersonalProjects from 'Components/PersonalProjects';
import JobExperiences from 'Components/JobExperiences';
import PageNotFound from 'Components/PageNotFound';
import MessageForMobileDevices from 'Components/MessageForMobileDevices';
import NavBar from 'Components/NavBar';
import Footer from 'Components/Footer';

const loggerMiddleware = createLogger()
const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
))

const App = () => {
  return (
    <div>
      <NavBar/>

      <div className="background">
        <div className="black-box main-box">

          <MobileView device={isMobile}>
            <MessageForMobileDevices/><space/>
          </MobileView>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/job-experiences" component={JobExperiences}/>
            <Route exact path="/personal-projects" component={PersonalProjects}/>
            <Route exact component={PageNotFound}/>
          </Switch>



        </div>

        <space/>


        <div className="black-box">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App/></Provider>
  </BrowserRouter>
  , document.getElementById('root'));
