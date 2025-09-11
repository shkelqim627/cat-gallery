const BASE = 'https://api.thecatapi.com/v1/images/search';


export async function fetchCats(limit) {

    const url = limit ? `${BASE}?limit=${limit}` : BASE;

    const res = await fetch(url);

    if (!res.ok) {

        throw new Error(`Cat API error: ${res.status}`);

    }

    return res.json();

}