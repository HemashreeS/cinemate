import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    // const url = queryTerm ? `https://www.freetestapi.com/api/v1/${apiPath}?search=${queryTerm}` : paramId ? `https://www.freetestapi.com/api/v1/${apiPath}/${paramId}` : `https://www.freetestapi.com/api/v1/${apiPath}`;

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setData(json);
        }
        fetchMovies();
    }, [url]);

  return { data }
}
