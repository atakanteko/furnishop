const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c578459bf7mshb64d17e9ed8378ap1f2f5djsn9dc08d711fef',
        'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
    }
};

const getProducts = async (pageNumber) => {
    const url = `https://walmart.p.rapidapi.com/products/v2/list?cat_id=0&sort=best_seller&page=${pageNumber}&query=bed`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export default getProducts;