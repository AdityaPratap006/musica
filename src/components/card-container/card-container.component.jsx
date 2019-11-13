import React from 'react';
import './card-container.styles.scss';

import { connect } from 'react-redux';

import Card from '../card/card.component';
import { selectSongsList } from '../../redux/songs/songs.selectors';


const CardContainer = ({songsList}) => {
    return (
        songsList.length?
        <div className='card-container'>
            {
               songsList.map((songObj,index) => <Card key={songObj.id} index={index} songObject={songObj}/>)
            }
        </div>
        :<div style={{margin:'auto'}}>
            <div className='ring'></div>
        </div>
    )
}

const mapStateToProps = state => ({
    songsList: selectSongsList(state)
})

export default connect(
    mapStateToProps,
    null
)(CardContainer);
