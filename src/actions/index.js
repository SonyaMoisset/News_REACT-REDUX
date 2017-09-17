const URL = `http://localhost:3004`

export function latestNews() {
    const request = fetch(`${URL}/articles?_order=desc&_end=3`, {
        method: 'GET'
    })
    .then(response => response.json())

    return {
        type: 'GET_LATEST',
        payload: request
    }
}