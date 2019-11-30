import React from 'react'
import './style.css'


const ArtResults = ({link,title,date,author,authorlink,img}) => {
    return(
        <div>
            
            <a href={link} target="_blank">
            <h5>{title}</h5>
            <img src={img}></img>
            </a>
            <h6><a target="_blank" href={authorlink}>Written By : {author}</a></h6>
            <h5>Posted : {date}</h5>
        </div>
    )
}

export default ArtResults