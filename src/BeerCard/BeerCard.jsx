import React from 'react';
import './BeerCard.css';
import AppActions from '../Flux/AppActions';

const toggleFavourites = id => () => AppActions.addToFavorites(id);

export default function BeerCard(props) {
    const {image, title, description, id, favourite} = props;

    return <div className='beer-card'>
        <div
            className='beer-card__image'
            style={{
                backgroundImage: `url(${image})`
            }}/>
        <div className='beer-card__body'>
            <h3 className='beer-card__title'>
                {title}
            </h3>
            <div className='beer-card__description'>
                {description}
            </div>
            <div className='beer-card__favourites' onClick={toggleFavourites(id, !favourite)}>
                <svg className={[
                        'beer-card__favourites-icon',
                        favourite && 'beer-card__favourites-icon--active'
                    ].filter(Boolean).join(' ')} viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                </svg>
            </div>
        </div>
    </div>;
}
