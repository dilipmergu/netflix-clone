import React, { useEffect, useState } from 'react';
import axios, { image_URL }  from './axios';
import './row.css';
import Youtube from "react-youtube";

function Row({ title, fetchURL ,isLargeRow}) {

    const movieTrailer = require('movie-trailer');

    const [Movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl]=useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();    
    }, [fetchURL]);
    const opts={
        height:"390",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    };
    const handleClick = (movie)=>{
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            console.log(movie.name)
            movieTrailer(movie?.title||"")
            .then((url)=>{
             // https://www.youtube.com/watch?v=XtMThy8QKqU&t=9742s
             console.log(url)
             const urlParams = new URLSearchParams(new URL(url).search);
             console.log(urlParams)
             setTrailerUrl(urlParams.get('v')); 
          }).catch((error)=>console.log(error));
        }

    };
    // console.log(Movies);
    return ( 
    <div className="row">
        <h2 className="row_title"> { title } </h2> 
        <div className="row_posters">
            {Movies.map(movie=>(
                <img 
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${image_URL}${isLargeRow ?movie.poster_path:movie.backdrop_path}`}></img>
            )
            )}
        </div>
        {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}
    </div> )

}

export default Row;