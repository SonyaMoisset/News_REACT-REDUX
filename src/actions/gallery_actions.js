import {
    GET_LATEST_GALLERY,
    GET_SELECTED_GALLERY,
    CLEAR_SELECTED_GALLERY
} from './types'

export const latestGallery = () => {
    const request = fetch(`http://localhost:3004/galleries?_order=desc&_limit=2`, { method: 'GET' })
                    .then(response => response.json())

    return {
        type: GET_LATEST_GALLERY,
        payload: request
    }
}

export const selectedGallery = id => {
    const request = fetch(`http://localhost:3004/galleries?id=${id}`, { method: 'GET' })
                    .then(response => response.json())

    return {
        type: GET_SELECTED_GALLERY,
        payload: request
    }
}

export const clearSelectedGallery = () => {
    return {
        type: CLEAR_SELECTED_GALLERY,
        payload: []
    }
} 