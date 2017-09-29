export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_LATEST':
            return {
                ...state,
                latestNews: action.payload
            }   
        case 'GET_OTHER':
            return {
                ...state,
                otherNews: action.payload
            }
        case 'GET_SELECTED_NEWS':
            return {
                ...state,
                selected: action.payload    
            }    
        case 'CLEAR_SELECTED_NEWS':
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