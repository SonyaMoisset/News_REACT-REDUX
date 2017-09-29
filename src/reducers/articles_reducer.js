import {
    GET_LATEST_NEWS,
    GET_OTHER_NEWS,
    GET_SELECTED_NEWS,
    CLEAR_SELECTED_NEWS
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_LATEST_NEWS:
            return {
                ...state,
                latestNews: action.payload
            }   
        case GET_OTHER_NEWS:
            return {
                ...state,
                otherNews: action.payload
            }
        case GET_SELECTED_NEWS:
            return {
                ...state,
                selected: action.payload    
            }    
        case CLEAR_SELECTED_NEWS:
            return {
                ...state,
                selected: action.payload    
            }
        case 'HANDLE_LIKES_ARTICLE':
            return {
                ...state,
                selected: [action.payload]
            }   
        default: 
            return state    
    }
}