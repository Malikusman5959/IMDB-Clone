import {React , useState} from 'react'
import CommentSection from "./CommentSection"
import "../styles/productPage.css";



function ProductPage(props) {

    var details = props.details
    var cntlr = props.lytCntlr
    const [comments, setComments] = useState(false)

    return (
        <div style={{textAlign:'center'}}>
        <div className="product-page" style={{marginTop : '120px', display:'inline-block'}}>
      
            <div className = 'left-div'>
            <div> 
                <button className='btn' onClick={()=>{cntlr({home:false ,search:true , productPage:false})}}> {"<"} </button>
            </div> 
                <img src={window.location.origin + details.Image} alt="movie" style={{ width: '100%' }} />
            </div>
            <div  className = 'right-div'>
                <h1>{details.title}</h1>
                <h3> <span className='bold'>Year</span> : {details.year}</h3>
                <h3> <span className='bold'>Duration</span> : {details.duration}</h3>
                <h3> <span className='bold'>Plot</span> : {details.Plot}</h3>
                <h3> <span className='bold'>Type</span> : {details.Type}</h3>
                <h3> <span className='bold'>Actors</span> : {details.Actors.join(", ")}</h3>
                <h3> <span className='bold'>Directors</span> : {details.Directors.join(", ")}</h3>
                <h3> <span className='bold'>IMDB Rating </span>: {details.rating}</h3>
                <h3> <span className='bold'>votes</span> : {details.votes}</h3>
                <h3> <span className='bold'>Countries</span> : {details.Countries.join(", ")}</h3>
                <h3> <span className='bold'>Genres</span> : {details.Genres.join(", ")}</h3>
                <p><button className='comment-btn' onClick={()=>{setComments(!comments)}}> {!comments? 'View Comments': 'Hide Comments'} </button></p>
                
             </div>
             {comments && <CommentSection comments = {details.Comments}> </CommentSection>}
        </div>
        
        </div>
    )
}

export default ProductPage
