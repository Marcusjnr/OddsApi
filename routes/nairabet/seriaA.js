const express = require('express');
const router = new express.Router();
const seriaAController = require('../../controllers/nairabet/seriaA');

router.get('/api/nairabet/sa', seriaAController.getSeriaABets);

module.exports = router;