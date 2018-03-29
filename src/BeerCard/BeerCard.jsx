import React from 'react';
import './BeerCard.css';

export default function BeerCard(props) {
    const {image, title, description} = props;

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
        </div>
    </div>;
}
