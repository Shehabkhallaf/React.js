import {createStore} from 'redux';
import { fav } from './reducers/fav';

export const store = createStore(fav);