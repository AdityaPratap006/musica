import React, { useState, useEffect } from 'react';
import './navbar.styles.scss';

import { Link } from 'react-router-dom';


import home from '../../assets/home.png';
import homeActive from '../../assets/home-active.png';
import account from '../../assets/account.png';
import accountActive from '../../assets/account-active.png';
import logo from '../../assets/logo.png';

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser, selectAuthStateFetched } from '../../redux/user/user.selectors';

const Navbar = ({ currentUser, authStateFetched }) => {

    const [activeLink, setActiveLink] = useState(window.location.hash);

    useEffect(() => {
        setActiveLink(window.location.hash);
    }, [currentUser])

    return (
        <React.Fragment>
            <Link to="/" onClick={() => setActiveLink('#/')}>
                <img alt='Logo' src={logo} className='musica-logo' />
            </Link>
            <div className='navbar-component'>
                <Link to='' className='menu-item' onClick={() => setActiveLink('#/')}>
                    {
                        (activeLink === `#/`)
                            ? (<img alt='menu-item' src={homeActive} />)
                            : (<img alt='menu-item' src={home} />)


                    }
                </Link>
                <CartIcon />
                {
                    authStateFetched ? (
                        currentUser ?
                            (<Link to='/account' className='menu-item' onClick={() => setActiveLink('#/account')}>
                                {
                                    (activeLink === `#/account`)
                                        ? (<img alt='menu-item' src={accountActive} />)
                                        : (<img alt='menu-item' src={account} />)


                                }
                            </Link>)
                            : (<Link to='/signin' className='menu-item' onClick={() => setActiveLink('#/signin')}> <p className={`${(activeLink === `#/signin`) ? 'active' : ''}`}> SIGN IN </p></Link>)
                    ) : <div className='menu-item'>
                            <div className='loading'/>
                        </div>

                }
            </div>
            <CartDropdown/>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    authStateFetched: selectAuthStateFetched(state),
    
})


export default connect(
    mapStateToProps,
    null
)(Navbar);
