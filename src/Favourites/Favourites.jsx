import React from 'react';
import AppStore from '../Flux/AppStore';
import BeerList from '../BeerList/BeerList';
import BeerCard from '../BeerCard/BeerCard';

export default class Favourites extends BeerList {
    render() {
        const {searched} = this.props,
            {favourites} = this.state,
            beerList = this.state.beerList.filter(beerInfo => favourites[beerInfo.id]);

        return <div className='beer-list'>
            <h1>Favourites</h1>

            {beerList.map(beerInfo =>
                <BeerCard
                    key={beerInfo.id}
                    id={beerInfo.id}
                    image={beerInfo.image_url}
                    title={beerInfo.name}
                    description={beerInfo.description}
                    favourite={true}/>)}
        </div>;
    }
}
