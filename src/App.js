import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/home.page";
import Navbar from "./components/navbar/navbar.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.page";
import AccountPage from "./pages/account/account.page";

import {
  auth,
  createUserProfileDocument /*, createSongsCollection*/
} from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser, setAuthStateFetched } from "./redux/user/user.actions";

//Not needed any more as we have moved the songs data in the firestore
//import { songsList } from './songsData';

import { firestore, convertCollectionsSnapshotToMap } from "./firebase/firebase.utils";
import { updateSongCollection } from './redux/songs/songs.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //Authenticating user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setAuthStateFetched(true);
          this.props.setCurrentUser({
            id: snapShot.id,
            photoURL: userAuth.photoURL,
            ...snapShot.data()
          });
        });
      }
      this.props.setAuthStateFetched(true);
      this.props.setCurrentUser(null);
    });

    //This was used to automate the  creation of songs collection in firestore
    //createSongsCollection(songsList);

    const songsCollectionRef = firestore.collection("songs");

    songsCollectionRef.onSnapshot(async snapshot => {

        const songsList = convertCollectionsSnapshotToMap(snapshot);

        this.props.updateSongCollection(songsList);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //this.unsubscribeFromSnapshot();
    this.props.setAuthStateFetched(false);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/account"
            render={() => (currentUser ? <AccountPage /> : <Redirect to="/" />)}
          />
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setAuthStateFetched: hasBeenFetched => dispatch(setAuthStateFetched(hasBeenFetched)),
  updateSongCollection: songs => dispatch(updateSongCollection(songs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
