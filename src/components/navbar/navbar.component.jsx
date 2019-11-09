import React from 'react';
import './navbar.styles.scss';


import MenuItem from '../menu-item/menu-item.component';

import home from '../../assets/home.png';
import homeActive from '../../assets/home-active.png';
import account from '../../assets/account.png';
import accountActive from '../../assets/account-active.png';

const Navbar = ({ currentUser }) => {
    return (
        <div className='navbar-component'>
            <MenuItem
                to='/'
                isActive={window.location.hash === '/'}
                imgSrc={{
                    active: homeActive,
                    inactive: home
                }}
            />
            {
                currentUser ?
                 (<MenuItem
                    to='/'
                    isActive={window.location.hash === '/account'}
                    imgSrc={{
                        active: accountActive,
                        inactive: account
                    }}
                />) 
                : (<MenuItem
                    to='/signin'
                    label='SIGNIN'
                    textOnly />)
            }
        </div>
    )
}

export default Navbar;
