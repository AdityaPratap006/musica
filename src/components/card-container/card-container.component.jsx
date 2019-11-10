import React from 'react';
import './card-container.styles.scss';

import { connect } from 'react-redux';

import Card from '../card/card.component';


const CardContainer = ({songsList}) => {
    return (
        <div className='card-container'>
            {
               songsList.map((songObj,index) => <Card key={songObj.id} songObject={songObj}/>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    songsList: state.songs.songsList
})

export default connect(
    mapStateToProps,
    null
)(CardContainer);
