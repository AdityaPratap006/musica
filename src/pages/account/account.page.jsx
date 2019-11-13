import React from 'react';
import './account.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser, setAuthStateFetched } from '../../redux/user/user.actions';

const AccountPage = ({ currentUser, setCurrentUser, history }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (

        <div className='account-page'>
            <div className='account-card'>
                <div className='profile-pic'>
                    {
                        currentUser.photoURL?
                        <img alt="Profile Pic" src={currentUser.photoURL}/>
                        :<div className='profile-pic-alternative'>
                            {currentUser.displayName[0]}
                        </div>
                    }
                </div>
                <h1>Hi {currentUser.displayName.split(' ')[0]}!</h1>
                <div className='user-info'>
                    <p> <span>Email: </span> {currentUser.email} </p>
                    <p> <span>Display Name: </span> {currentUser.displayName} </p>
                </div>
                <CustomButton onClick={() => {
                    auth.signOut();
                    console.log(auth.signOut)
                    window.localStorage.clear()

                }}>LOG OUT</CustomButton>
            </div>

        </div>

    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setAuthStateFetched: (fetched) => dispatch(setAuthStateFetched(fetched))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage);
