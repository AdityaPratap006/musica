import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/home.page";
import Navbar from "./components/navbar/navbar.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.page";

import { auth } from "./firebase/firebase.utils";
import AccountPage from "./pages/account/account.page";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/account' render={() => (
            this.state.currentUser?<AccountPage/>:<Redirect to='/'/>
          )}/>
          <Route path="/signin"  render={() => (
            this.state.currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>
          )}/>
           
          
        </Switch>
      </div>
    );
  }
}

export default App;
