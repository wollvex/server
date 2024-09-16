const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Routes for articles
router.get('/:communityId/articles', articleController.getArticlesByCommunity);
router.post('/:communityId/articles', articleController.createArticle);

module.exports = router;
