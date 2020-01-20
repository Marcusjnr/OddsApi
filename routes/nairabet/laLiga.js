const express = require('express');
const router = new express.Router();
const LaLigaController = require('../../controllers/nairabet/laLiga');

router.get('/api/nairabet/ll', LaLigaController.getLaLigaBets);

module.exports = router;