import React from 'react';
import './menu-item.styles.scss';

import { Link } from 'react-router-dom';

const MenuItem = ({to, label, imgSrc, textOnly, activeLink, onClick}) => {
     console.log(window.location.hash, activeLink)
    return (
        <Link to={to} className='menu-item' onClick={onClick}>
            {
                !textOnly && imgSrc?
                (
                    (activeLink === `#/${to}`)?
                    (<img alt='menu-item' src={ imgSrc.active } />)
                    :(<img alt='menu-item' src={ imgSrc.inactive } />)
                )
                :(
                    <p className={`${(activeLink ===  `#/${to}`)?'active':''}`}>{label}</p>
                )
            }
        </Link>
    )
}

export default MenuItem;
