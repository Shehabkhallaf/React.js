import { SET_FAVORITES} from "../actions/fav";

const INITIAL_STATE = {
    favs: []
}

export function fav(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_FAVORITES:
            return {
                favs: action.payload
            };
        default:
            return state;
    }
}