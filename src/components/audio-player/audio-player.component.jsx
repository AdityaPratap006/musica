import React from 'react';
import './audio-player.styles.scss';

import { connect } from 'react-redux';
import { setCurrentTrack } from '../../redux/current-track/current-track.actions';
import { selectCurrentTrack } from '../../redux/current-track/current-track.selectors';
import { selectSongsList } from '../../redux/songs/songs.selectors';


const AudioPlayer = ({ songList, currentTrack, setCurrentTrack }) => {

    const { song, artists, url, cover_image } = currentTrack !== null && songList[currentTrack];

    return (
        currentTrack !== null && currentTrack >= 0 ?
            (<div className='audio-player'>
                <div className='song-image'>
                    <img src={cover_image} alt={song} />
                </div>
                <div className='controls-container'>
                    <div className='main-panel'>
                        <div className='title'>
                            <p>{song}</p>
                            <small>{artists}</small>
                        </div>

                        <div className='controls'>
                            <div id='prev-button' className='transit-button'>

                            </div>
                            <div id='play-button' className='play-pause-button'>

                            </div>
                            <div id='next-button' className='transit-button'>

                            </div>
                        </div>

                    </div>
                    <div className='progress-container'>

                    </div>
                </div>
            </div>)
            : null
    )
}

const mapStateToProps = (state) => ({
    currentTrack: selectCurrentTrack(state),
    songList: selectSongsList(state),
})

const mapDispatchToProps = dispatch => ({
    setCurrentTrack: songIndex => dispatch(setCurrentTrack(songIndex)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioPlayer);
