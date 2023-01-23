import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TopAnime = () => {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;

    useEffect(() => {
        callData();
    }, [page]);

    async function callData() {
        const JSONdata = await fetch(URL);
        const RESULTdata = await JSONdata.json();
        setAnimes(RESULTdata.data);
        console.log(animes);
    }


    return (
        <div>
            <h1>Top Anime</h1>
            {animes &&
                animes.map((anime) => {
                    return (
                        <h6>{anime.title}</h6>
                    )
                })}
            {/* <button onClick={callData}>Fetch top anime</button> */}
            <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
    )
}

export default TopAnime