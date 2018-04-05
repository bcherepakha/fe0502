/* Классическая библиотека flux (https://facebook.github.io/flux/docs/overview.html)
 * предоставляет нам только Dispatcher, но нам больше ничего и не нужно
 */
import {Dispatcher} from 'flux';

const iDispatcher = new Dispatcher();

export default {
    iDispatcher,
    loaderShow: function() {
        iDispatcher.dispatch({
            eventName: 'loaderShow'
        });
    },
    loaderHide: function() {
        iDispatcher.dispatch({
            eventName: 'loaderHide'
        });
    },
    loadBeerList: function() {
        iDispatcher.dispatch({
            eventName: 'loadBeerList'
        });
    },
    toggleFavorites: function(id, isFavour) {
        iDispatcher.dispatch({
            eventName: 'toggleFavorites',
            id,
            isFavour
        });
    }
};
