let articlesController = require("../../controller/articles")
let router = require("express").Router()

router.route("/")
.get(articlesController.getArticles)

module.exports = router