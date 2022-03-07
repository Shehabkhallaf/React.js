import {SET_AUTH , SET_MOVIES_DETAILS } from "./../actions/auth"

const INITIAL_STATE = {
    isAuthenticated : false,
    useDetails :{},
};
export default function auth(state = INITIAL_STATE,action){
    switch (action.type){
        case SET_AUTH:
            return{
                ...state,
                isAuthenticated :action.payload,
            };
            case SET_MOVIES_DETAILS:
                return{
                    useDetails : action.payload
                };
                default:
                    return state;
    }
}