import MicroEvent from 'microevent';
import AppActions from './AppActions';
import iFetch from '../i/XHR/iFetch';

const AppStore = new MicroEvent(),
    favourites = window.localStorage.getItem('favourites');

AppStore.beerList = [];
AppStore.favourites = {};

if (favourites) {
    try {
        AppStore.favourites = JSON.parse(favourites);
    } catch(ex) {
        console.error(`Parse favourites failed`, ex);
    }
}

//add logs
AppActions.iDispatcher.register(console.log);

// add Dispatcher
AppActions.iDispatcher.register(payload => {
    switch (payload.eventName) {
        case 'toggleFavorites':
            AppStore.favourites = {
                ...AppStore.favourites,
                [payload.id]: payload.isFavour
            };
            window.localStorage.setItem('favourites', JSON.stringify(AppStore.favourites));
            AppStore.trigger('favorites-update');
            break;
        case 'loadBeerList':
            setTimeout(() => {
                iFetch({
                    method: 'GET',
                    url: 'https://api.punkapi.com/v2/beers'
                })
                .then(data => {
                    AppStore.beerList = data;
                    AppStore.trigger('beer-list-update');
                })
                .catch(response => console.error({response}));
            }, 2000);
            break;
    }

    return true;
});

export default AppStore;
