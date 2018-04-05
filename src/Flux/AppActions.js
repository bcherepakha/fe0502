/* Классическая библиотека flux (https://facebook.github.io/flux/docs/overview.html)
 * предоставляет нам только Dispatcher, но нам больше ничего и не нужно
 */
import {Dispatcher} from 'flux';

const iDispatcher = new Dispatcher();

export default {
    iDispatcher,
    addToFavorites: function(id) {
        iDispatcher.dispatch({
            eventName: 'addToFavorites',
            id
        });
    }
};
