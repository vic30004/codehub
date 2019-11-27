import React, { Component } from 'react'
import ArtResults from '../../components/ArtResult'
import api from '../../api'
import ArtContainer from '../../components/ArtContainer'

class Articles extends Component {

    state = {
        articles: []
    }

componentDidMount(){
    this.searchArticles()
}

searchArticles = async () =>{
    let {data : articles} = await api.searchArticles()
    this.setState({articles,},()=>console.log(this.state.articles))
    
    
}

    render() {
        return (
            <div>
                <ArtContainer>
                {this.state.articles.map(article=>(
                    <ArtResults 
                    key={article.title}
                    title={article.title}
                    date={article.date}
                    author={article.author}
                    authorlink={article.authorlink}
                    img={article.img}
                    link = {article.link}

                    />
                ))}
                </ArtContainer>
            </div>
        )
    }
}

export default Articles