import React from "react";
import "../styles/movieCard.css";
import movie from "../imgs/movie.jpg"

const MovieCard = (props) => {
   
    const setDetails = props.setDetails
    return (
        <div className="card" onClick={()=>{setDetails(props.details); props.setLyt({home:false ,search:false , productPage:true})}}>
            {console.log(window.location.origin + "../src/imgs/")}
                <p>{props.details.rating}</p>
            <img src={window.location.origin + props.details.Image} alt="Avatar" />
            <div className="container">
                <h4><b>{props.details.title}</b></h4>
                <p>{props.details.year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
