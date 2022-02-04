import React from 'react'
import "../styles/comment.css"
import userIcon from "../imgs/user.png"

function Comment(props) {

 var name = props.details.Name 
 var comment = props.details.Comment 


    return (
        <div className="comment-card">
            <img className="icon" src={userIcon} />
            <h3 className="name">{name}</h3> <br/>
            <p className="comment">{comment}</p>
        </div>
    )
}

export default Comment
