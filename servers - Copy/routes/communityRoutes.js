const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Routes for communities
router.get('/communities ', communityController.getAllCommunities);
router.post('/communities', communityController.createCommunity);

module.exports = router;
