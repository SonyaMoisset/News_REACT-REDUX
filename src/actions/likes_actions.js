export const handleLikes = (array, id, section, type) => {
    const request = fetch(`http://localhost:3004/${section}/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ likes: array })
                    })
                    .then(response => response.json())

    return {
        type: type,
        payload: request
    }
}