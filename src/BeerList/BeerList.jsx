import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import AppStore from '../Flux/AppStore';
import AppActions from '../Flux/AppActions';

export default class BeerList extends React.PureComponent {
    state = {
        beerList: AppStore.beerList,
        favourites: AppStore.favourites
    }

    componentWillMount() {
        if (!AppStore.beerList.length) {
            AppActions.loadBeerList();
        }

        AppStore.bind('favorites-update', this.updateFavourites);
        AppStore.bind('beer-list-update', this.updateBeerList);
    }

    componentWillUnmount() {
        AppStore.unbind('favorites-update', this.updateFavourites);
        AppStore.unbind('beer-list-update', this.updateBeerList);
    }

    updateBeerList = () => {
        this.setState({beerList: AppStore.beerList});
    }

    updateFavourites = () => {
        this.setState({favourites: AppStore.favourites});
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
