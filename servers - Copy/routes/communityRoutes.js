const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Routes for communities
router.get('/community ', communityController.getAllCommunities);
router.post('/community', communityController.createCommunity);

module.exports = router;
