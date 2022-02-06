const express = require('express');
const router = express.Router();

// All requests to this router will first hit this middleware--the route at the path (??)
router.use(require('./candidateRoutes'));

router.use(require('./partyRoutes'));

router.use(require('./voterRoutes'));

router.use(require('./voteRoutes'));

module.exports = router;