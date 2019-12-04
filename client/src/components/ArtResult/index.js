import React from 'react'
import './style.css'

const ArtResults = ({ link, title, date, author, authorlink, img }) => {
    return (
        <div className='article-container'>

            <a className='article-link-wrapper' href={link} target="_blank">
                <div className='article-header-wrapper'>
                    <h4>{title}</h4>
                </div>
                <div className='article-image-wrapper'>
                    <img className ='article-img'src={img}></img>
                </div>
            </a>

            <div className='article-author-date-wrapper'>
                <a target="_blank" href={authorlink}><h5>Written By : {author}</h5>
                <h5>Posted : {date}</h5>
                </a>
            </div>
        </div>
    )
}

export default ArtResults