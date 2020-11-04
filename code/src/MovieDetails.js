import React, { useState, useEffect } from 'react';

export const MovieDetails = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=b230af0ba5dd0959429a398c958e6e4e&language=en-US&page=1')
            .then((response) => response.json())
            .then((json) => {
                setDetails(json.results);
            })
    }, []);

    return (
        <div className="movieContainer">
            {details.map((movieDetails) => ( 
                <>
                <div className="movieDetails1">
                    <img className="movieDetailsThumbnail" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt="{movieDetails.title}" />
                </div>
                    <div className="movieDetails2">
                        <h2 className="movieTitle2"> {movieDetails.title}</h2>
                            <p className="averageVote"> {movieDetails.vote_average} </p>
                                <p className="movieDescription"> {movieDetails.overview} </p>
                    </div>
                </>
            ))} 
        </div>
        
    )

}