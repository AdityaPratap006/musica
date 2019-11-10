import React, { useState, useEffect } from 'react';
import './navbar.styles.scss';

import { Link } from 'react-router-dom';


import home from '../../assets/home.png';
import homeActive from '../../assets/home-active.png';
import account from '../../assets/account.png';
import accountActive from '../../assets/account-active.png';

import { connect } from 'react-redux';


const Navbar = ({ currentUser, authStateFetched }) => {

    const [activeLink, setActiveLink] = useState(window.location.hash);

    useEffect(() => {
        setActiveLink(window.location.hash);
    }, [currentUser])

    return (
        <div className='navbar-component'>
            <Link to='' className='menu-item' onClick={() => setActiveLink('#/')}>
                {
                    (activeLink === `#/`)
                        ? (<img alt='menu-item' src={homeActive} />)
                        : (<img alt='menu-item' src={home} />)


                }
            </Link>
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
                ) : null

            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    authStateFetched: state.user.authStateFetched
})


export default connect(
    mapStateToProps,
    null
)(Navbar);
