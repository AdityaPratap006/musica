import React from 'react';
import './card.styles.scss';

import { connect } from 'react-redux';
import { addCartItem, removeCartItem } from '../../redux/cart/cart.actions';
import CardRoundButton from '../card-round-button/card-round-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentTrack } from '../../redux/current-track/current-track.actions';

const Card = ({ songObject, index , addCartItem, removeCartItem, cartItems, currentUser, setCurrentTrack }) => {

    const { id, song, artists, cover_image, price, url } = songObject;

    const isLiked = cartItems.find(song => song.id === id);

    const handleLike = () => {

        if (!isLiked) {
            addCartItem(songObject);
        } else {
            removeCartItem(songObject);
        }
    }

    const isPurchased = currentUser && currentUser.purchaseList && currentUser.purchaseList.includes(id);

     
    return (
        <div className='card'>
            <div className='image'
                style={{
                    backgroundImage: `url(${cover_image})`
                }}
            />

            <div className='card-body'>
                <h4>{song}</h4>

                <span>{artists}</span>
            </div>
            <div className='card-footer'>
                <span>{`₹ ${price}`}</span>
            </div>
            <div className='button-background'>
                <div className='play-button' onClick={()=>{setCurrentTrack(index)}}>
                    <CardRoundButton type='PLAY' />
                    
                </div>
                {
                        !isPurchased?
                        (<div className='like-unlike-button' onClick={handleLike}>
                            <CardRoundButton type={isLiked ? 'LIKE' : 'UNLIKE'} />
                        </div>)
                        :(<a className='purchsed-marker' href={url} target="_blank" rel="noopener noreferrer">
                            DOWNLOAD!
                        </a>)
                    }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
    addCartItem: songObj => dispatch(addCartItem(songObj)),
    removeCartItem: songObj => dispatch(removeCartItem(songObj)),
    setCurrentTrack: songIndex => dispatch(setCurrentTrack(songIndex))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
