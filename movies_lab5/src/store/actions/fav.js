export const SET_FAVORITES = "SET_FAVORITES";

export function setFavoriteItems(payload){
    return {
        type: SET_FAVORITES,
        payload
    }
}