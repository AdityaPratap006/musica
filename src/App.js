import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/home.page";
import Navbar from "./components/navbar/navbar.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.page";
import AccountPage from "./pages/account/account.page";
import CheckoutPage from "./pages/checkout/checkout.page";


import {
  auth,
  createUserProfileDocument /*, createSongsCollection*/
} from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser, setAuthStateFetched } from "./redux/user/user.actions";

//Not needed any more as we have moved the songs data in the firestore
//import { songsList } from './songsData';

import { firestore, convertCollectionsSnapshotToMap } from './firebase/firebase.utils';

import { updateSongCollection } from './redux/songs/songs.actions';
import { removeCartItem } from "./redux/cart/cart.actions";

import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCurrentTrack } from "./redux/current-track/current-track.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //Authenticating user
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
           
          this.props.setCurrentUser({
            id: snapShot.id,
            photoURL: userAuth.photoURL,
            ...snapShot.data()
          });
          this.props.setAuthStateFetched(true);

          snapShot.data().purchaseList && snapShot.data().purchaseList.forEach(purchasedSongID => {

            this.props.removeCartItem({id:purchasedSongID})
          })
        });
      }
      else{
        this.props.setCurrentUser(null);
      }
       
      
    });

    //This was used to automate the  creation of songs collection in firestore
    //createSongsCollection(songsList);
    const songsCollectionRef = firestore.collection("songs");

        this.unsubscribeFromSnapshot = songsCollectionRef.onSnapshot(async snapshot => {
    
            const songsList = convertCollectionsSnapshotToMap(snapshot);
    
            this.props.updateSongCollection(songsList);
        })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className={`App`}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/account"
            render={() => (currentUser ? <AccountPage /> : <Redirect to="/" />)}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route
            exact
            path="/checkout"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <CheckoutPage/>
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  //currentTrack: selectCurrentTrack(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setAuthStateFetched: hasBeenFetched => dispatch(setAuthStateFetched(hasBeenFetched)),
  updateSongCollection: songs => dispatch(updateSongCollection(songs)),
  removeCartItem: song => dispatch(removeCartItem(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
