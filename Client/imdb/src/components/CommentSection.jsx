import React from 'react'
import Comment from "./Comment"


function CommentSection(props) {

    var comments = props.comments

    return (
        <div style={{textAlign : "center"}}>
            <h2 style={{color:'white'}}>Comments</h2>
            {comments.length == 0 ? <p> No comments found </p> : 
                    comments.map((comment, index) => {
                        return <Comment key={index} details={comment}></Comment>
                    })
            }
        </div>
    )
}

export default CommentSection
