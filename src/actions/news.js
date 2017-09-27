export const latestNews = () => {
    const request = fetch(`http://localhost:3004/articles?_order=desc&_end=3`, { method: 'GET' })
    .then(response => response.json())

    return {
        type: 'GET_LATEST',
        payload: request
    }
}

export const otherNews = () => {
    const request = fetch(`http://localhost:3004/articles?_order=desc&_start=3&_end=10`, { method: 'GET' })
    .then(response => response.json())

    return {
        type: 'GET_OTHER',
        payload: request
    }
}

export function selectedNews(id) {
    const request = fetch(`http://localhost:3004/articles?id=${id}`, {
        method: 'GET'
    })
        .then(response => response.json())

    return {
        type: 'GET_SELECTED_NEWS',
        payload: request
    }
}

export function clearSelectedNews() {
    return {
        type: 'CLEAR_SELECTED_NEWS',
        payload: []
    }
}