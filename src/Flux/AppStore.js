import MicroEvent from 'microevent';
import AppActions from './AppActions';

const AppStore = new MicroEvent(),
    favourites = window.localStorage.getItem('favourites');

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
        case 'addToFavorites':
            AppStore.favourites = {
                ...AppStore.favourites,
                [payload.id]: true
            };
            window.localStorage.setItem('favourites', JSON.stringify(AppStore.favourites));
            AppStore.trigger('favorites-update');
        break;
    }

    return true;
});

export default AppStore;
