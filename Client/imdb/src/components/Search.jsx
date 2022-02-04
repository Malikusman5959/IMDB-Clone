import { React, useEffect, useState } from 'react'
import MovieCard from "./MovieCard"
import FilterBar from "./FilterBar"
import axios from 'axios';


function Search(props) {

    var keyword = props.keyword.keyword;
    var setProduct = props.productCntlr;
    var setlyt = props.cntlr

    var by = props.keyword.by;
    var [results, setResults] = useState([])

    var sortResults = (filter)=>{
        
        if (filter === "rating")
        {
            setResults(results.sort((a, b) => (a.rating > b.rating) ? 1 : -1)) 
        }

        else if (filter === "awards")
        {
            setResults(results.sort((a, b) => (a.Awards > b.Awards) ? 1 : -1)) 
        }

        else if (filter === "year")
        {
            setResults(results.sort((a, b) => (a.year > b.year) ? 1 : -1)) 
        }

        else if (filter === "votes")
        {
            setResults(results.sort((a, b) => (a.votes > b.votes) ? 1 : -1)) 
        }

        else if (filter === "runtime")
        {
            setResults(results.sort((a, b) => (a.duration > b.duration) ? 1 : -1)) 
        }

        else{}
    }

    useEffect(() => {
        const url = `http://localhost:7000/imdb/movie-by-${by}/${keyword}`;
        axios.get(url)
            .then(function (response) {
                setResults(response.data.data.MovieDetails);
            })
    },[results])

    return (
        <>
            <div style={{ marginTop: '6%' }}>
                <FilterBar filtercntlr = {sortResults}></FilterBar>
                <div style={{ textAlign: 'center' }}>
                    {console.log(results)}
                    {results.length == 0 ? <p> No movies found </p> : 
                    results.map((result, index) => {
                        return <MovieCard key={index} details={result} setDetails={setProduct} setLyt={setlyt}></MovieCard>
                    })
                    }
                </div>
            </div>

        </>
    )
    
}

export default Search
