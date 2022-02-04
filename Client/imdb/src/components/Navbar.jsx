import React, { useState } from 'react'
import searchIcon from "../imgs/search.png"
import searchIcon2 from "../imgs/search2.png"
import "../styles/navbar.css"



export function Navbar(props) {

    var  lyt = props.cntlr;
    var searchcntlr = props.searchCntlr;
    const [icon, setSearchIcon] = useState(searchIcon);
    const [keyword , setKeyword] = useState("");
    const [type , setType] = useState("title");


    return (
        <div>
            <nav style={{ position: 'fixed', width: '100%', top: '0' }}>
                <h3 >IMDB</h3>
                <div className='nav-links'>
                    <input type='text' value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
                    <select className='search-type' name="search" id="search" onChange={(e)=>{setType(e.target.value)}}>
                        <option value="title">Title</option>
                        <option value="actor">Actor</option>
                        <option value="director">Director</option>
                        <option value="genre">Genre</option>
                    </select>

                    <img onClick={()=>{console.log(keyword+type); lyt({home:false ,search:true , productPage:false}); searchcntlr({ 
                              keyword: keyword,
                              by: type 
                            })}} src={icon} onMouseEnter={() => { setSearchIcon(searchIcon2) }} onMouseLeave={() => { setSearchIcon(searchIcon) }} alt="Not found" />
                </div>
            </nav>
        </div>
    )
}
