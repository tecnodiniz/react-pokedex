
export const get = (offset = 0, limit = 12) => {
    return fetch( `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}` )
    .then((response) => response.json())
    .then((data) => data.results)
    .then((details) => Promise.all(details.map(item => getDetails(item.url))))
    .catch(error => console.log(error));
}

export const getDetails = (url) =>{
    return fetch(url).then((response) => response.json())
}

