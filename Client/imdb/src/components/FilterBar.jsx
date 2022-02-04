import React from 'react'
import "../styles/filterBar.css";
import yearIcon from '../imgs/new-year.png'
import awardIcon from '../imgs/trophy.png'
import ratingIcon from '../imgs/star.png'
import runtimeIcon from '../imgs/queue.png'
import voteIcon from '../imgs/vote.png'

function FilterBar(props) {
    return (
        <>
        <div className='filter-cont'>
            <div className='tab' onClick={props.filtercntlr("rating")}> 
                <p className='label'>Rating</p>
                <img className='icon' src={ratingIcon} alt='no image'></img>
            </div>
            <div className='tab' onClick={props.filtercntlr("awards")}> 
                <p className='label'>Award Wins</p>
                <img className='icon' src={awardIcon} alt='no image'></img>
            </div>
            <div className='tab' onClick={props.filtercntlr("year")}> 
                <p className='label'>year</p>
                <img className='icon' src={yearIcon} alt='no image'></img>
            </div>
            <div className='tab' onClick={props.filtercntlr("runtime")}> 
                <p className='label'>runtime</p>
                <img className='icon' src={runtimeIcon} alt='no image'></img>
            </div>
            <div className='tab' onClick={props.filtercntlr("votes")}>  
                <p className='label'>votes</p>
                <img className='icon' src={voteIcon} alt='no image'></img>
            </div>
        </div>
        </>
    )
}

export default FilterBar
