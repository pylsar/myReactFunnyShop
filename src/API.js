const API_URL = 'http://localhost:3001/products'

export function getAllProducts() {
    return fetch(API_URL)
        .then(res => res.json())
}

export function getProduct(id){
    return fetch(`${API_URL}/${id}`)
    .then(res => res.json())
}

