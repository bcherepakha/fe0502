import React from 'react';
// import ixhr from '../i/XHR/ixhr.js';
// import PromiseXHR from '../i/XHR/PromiseXHR.js';
import iFetch from '../i/XHR/iFetch';
import BeerCard from '../BeerCard/BeerCard';
import AppStore from '../Flux/AppStore';

export default class BeerList extends React.PureComponent {
    state = {
        beerList: [],
        favourites: AppStore.favourites
    }

    componentWillMount() {
        // ixhr({
        //         method: 'GET',
        //         url: 'https://api.punkapi.com/v2/beers'
        //     },
        //     this.getBeerSuccess,
        //     this.getBeerError);

        // PromiseXHR({
        //     method: 'GET',
        //     url: 'https://api.punkapi.com/v2/beers'
        // })
        // .then(this.getBeerSuccess)
        // .catch(this.getBeerError)

        iFetch({
            method: 'GET',
            url: 'https://api.punkapi.com/v2/beers'
        })
        .then(this.getBeerSuccess)
        .catch(this.getBeerError);

        AppStore.bind('favorites-update', this.updateFavourites);
    }

    componentWillUnmount() {
        AppStore.unbind('favorites-update', this.updateFavourites);
    }

    updateFavourites = () => {
        this.setState({favourites: AppStore.favourites});
    }

    getBeerSuccess = data => {
        this.setState({beerList: data});
    }

    getBeerError = response => {
        console.log({response});
    }

    render() {
        const {searched} = this.props,
            {favourites} = this.state;
        let {beerList} = this.state;

        if (searched) {
            beerList = beerList.filter(beerInfo => beerInfo.name.includes(searched));
        }

        return <div className='beer-list'>
            {beerList.map(beerInfo =>
                <BeerCard
                    key={beerInfo.id}
                    id={beerInfo.id}
                    image={beerInfo.image_url}
                    title={beerInfo.name}
                    description={beerInfo.description}
                    favourite={favourites[beerInfo.id]}/>)}
        </div>;
    }
}
