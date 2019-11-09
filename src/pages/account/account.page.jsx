import React from 'react';
import './account.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';

const AccountPage = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className='account-page'>
            
           <CustomButton onClick={()=>{auth.signOut()}}>LOG OUT</CustomButton>
        </div>
    )
}

export default AccountPage;
