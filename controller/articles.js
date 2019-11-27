const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {

    getArticles: async(req,res) =>{

       let response = await axios.get("https://hackernoon.com/tagged/programming")
       let $ = cheerio.load(response.data)
            let data = []

            $(".story-card").each(function(i,element){
                let article = {}
                if(i<15 && i>1){
               

                article.title = $(this).children(".excerpt").children(".title").find("a").text()
                article.img = $(this).children("div").children("a").children(".img").attr("style")
                article.img = article.img.split("").slice(23,article.img.length-2).join("")
                article.img = `https://hackernoon.com${article.img}`
                article.authorlink = $(this).children(".bio").children(".flex").children("div").find("a").attr("href")
                article.authorlink = `https://hackernoon.com${article.authorlink}`
                article.author = $(this).children(".bio").children(".flex").children("div").children(".name").text()
                article.date = $(this).children(".bio").children(".flex").children("div").children(".published").text()
                article.link = $(this).children(".excerpt").children(".title").find("a").attr("href")
                article.link = `https://hackernoon.com${article.link}`
                
                data.push(article)
                }
               
            
            })
            res.send(data)
         
    }
 
}