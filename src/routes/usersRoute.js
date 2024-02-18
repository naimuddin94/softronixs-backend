const express = require('express');
const { getAllUsers, createUser } = require('../routeHandler/userHandler');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/create', createUser);

module.exports = router;