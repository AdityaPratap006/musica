import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/home.page';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.page';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
