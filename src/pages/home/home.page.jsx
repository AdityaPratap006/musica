import React from 'react';
import './home.styles.scss';

import CardContainer from '../../components/card-container/card-container.component';

const HomePage = () => {

    React.useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className='home-page'>
            <CardContainer/>
        </div>
    )
}

export default HomePage;
