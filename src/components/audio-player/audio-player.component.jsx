import React, { useState } from 'react';
import './audio-player.styles.scss';


import { connect } from 'react-redux';
import { setCurrentTrack } from '../../redux/current-track/current-track.actions';
import { selectCurrentTrack } from '../../redux/current-track/current-track.selectors';
import { selectSongsList } from '../../redux/songs/songs.selectors';


const AudioPlayer = ({ songList, currentTrack, setCurrentTrack }) => {

    const { song, artists, url, cover_image } = currentTrack !== null && songList[currentTrack];

    const [audioState, setAudioState] = useState({
        volume: 1
    })



    let audio = null, progress = null, progressBar = null, playButton = null, volume = null;



    const togglePlayPause = () => {
        const method = audio.paused ? 'play' : 'pause';
        audio[method]();
    }

    const updateButton = () => {
        const icon = !audio.paused ? '❚ ❚' : '▶';
        playButton.textContent = icon

    }

    const handleRangeUpdate = (event) => {
        setAudioState({
            ...audioState,
            volume: event.target.value
        })
        audio[event.target.name] = event.target.value
        console.log(event.target.value)
    }

    function handleProgress() {
        const percent = (audio.currentTime / audio.duration) * 100;

        progressBar.style.flexBasis = `${percent}%`;
    }

    let mouseDown = false;
    const scrub = (e) => {

        const scrubTime = ((e.clientX - progress.offsetLeft) / progress.offsetWidth) * audio.duration;
        audio.currentTime = Math.round(scrubTime);
        console.log(scrubTime);
    }

    return (
        currentTrack !== null && currentTrack >= 0 ?
            (<div className='audio-player' >
                <div className='close-player'>
                    ✖
                </div>
                <audio src={url}
                    ref={(input) => { audio = input; }}
                    autoPlay
                    onPlay={updateButton}
                    onPause={updateButton}
                    onTimeUpdate={handleProgress}
                    onEnded={() => { setCurrentTrack((currentTrack + 1) % songList.length) }}
                >

                </audio>
                <div className='song-image'>
                    <img src={cover_image} alt={song} />
                </div>
                <div className='controls-container'>
                    <div className='main-panel'>
                        <div className='title'>
                            {
                                window.innerWidth <= 720
                                    ? (
                                        <><div className='song-image-small'>
                                            <img src={cover_image} alt={song} />
                                        </div>
                                            <div className='text' style={{marginLeft:'10px'}}>
                                                <p>{song}</p>
                                                <small>{artists}</small>
                                            </div></>
                                    )
                                    : ( <>
                                        <p>{song}</p>
                                        <small>{artists}</small>
                                        </>)
                            }
                            

                        </div>

                        <div className='controls'>
                            <div id='prev-button' className='transit-button' onClick={() => {

                                if (songList.length) {
                                    setCurrentTrack((currentTrack - 1 + songList.length) % songList.length)
                                }

                            }}>
                                ❰
                            </div>
                            <div
                                ref={(input) => { playButton = input }}
                                className='play-pause-button'
                                onClick={togglePlayPause}>

                            </div>
                            <div id='next-button' className='transit-button' onClick={() => {

                                if (songList.length) {
                                    setCurrentTrack((currentTrack + 1) % songList.length)
                                }

                            }}>
                                ❱
                            </div>
                        </div>

                    </div>
                    <div className='progress-container'>
                        <div className="progress"
                            ref={(input) => { progress = input; }}
                            onClick={scrub}
                            onMouseDown={() => mouseDown = true}
                            onMouseUp={() => mouseDown = false}
                            onMouseMove={(e) => {
                                mouseDown && scrub(e)
                            }}
                        >
                            <div className="progress__filled"
                                ref={(input) => { progressBar = input }}
                            >

                            </div>
                        </div>
                        <div className='volume-control'>
                            <span role='img' aria-label='volume'>&#128266;</span>
                            <input ref={(input) => { volume = input }} type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={audioState.volume} onChange={handleRangeUpdate} onMouseMove={handleRangeUpdate} />

                        </div>

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
