const express = require('express');
const router = new express.Router();
const PremierLeagueController = require('../../controllers/nairabet/premierleague');

router.get('/api/nairabet/pl', PremierLeagueController.getPremierLeagueBets);

module.exports = router;