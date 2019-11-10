import React from 'react';
import './card-container.styles.scss';

import { connect } from 'react-redux';


const CardContainer = ({songsList}) => {
    return (
        <div className='card-container'>
            {
               songsList.map((song,index) => <div key={song.id} className='div'> {song.id} </div>)
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
