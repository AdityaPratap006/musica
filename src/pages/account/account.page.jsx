import React from 'react';
import './account.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser, setAuthStateFetched } from '../../redux/user/user.actions';

const AccountPage = ({currentUser, setCurrentUser}) => {
    React.useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        currentUser?
        (<div className='account-page'>
            <h1>HI {currentUser.displayName}</h1>
           <CustomButton onClick={()=>{
               auth.signOut()
            }}>LOG OUT</CustomButton>
        </div>)
        :(<div className='account-page'>
            <h3>You have logged out successfully!</h3>
            <h2>Please Sign In to continue</h2>
        </div>)
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
