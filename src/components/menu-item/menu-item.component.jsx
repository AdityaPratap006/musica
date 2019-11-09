import React from 'react';
import './menu-item.styles.scss';

import { Link } from 'react-router-dom';

const MenuItem = ({to, label, imgSrc, isActive, textOnly}) => {
    return (
        <Link to={to} className='menu-item'>
            {
                !textOnly?
                (
                    <img alt='menu-item' src={isActive? imgSrc.active : imgSrc.inactive} />
                )
                :(
                    <p className={`${isActive?'active':''}`}>{label}</p>
                )
            }
        </Link>
    )
}

export default MenuItem;
