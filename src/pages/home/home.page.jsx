import React from 'react';
import './home.styles.scss';

import CardContainer from '../../components/card-container/card-container.component';

import { connect } from 'react-redux';
import { selectCurrentTrack } from '../../redux/current-track/current-track.selectors';
import AudioPlayer from '../../components/audio-player/audio-player.component';


const HomePage = ({currentTrack}) =>  {

    return (
            <div className={`home-page  ${currentTrack!==null && currentTrack>=0?'expand-bottom':''}`}>
                <CardContainer />
                <AudioPlayer/>
            </div>
     )
}

const mapStateToProps = (state) => ({
    currentTrack: selectCurrentTrack(state)
})

// const mapDispatchToProps = dispatch => ({

// })


export default connect(
    mapStateToProps,
    null
)(HomePage);
