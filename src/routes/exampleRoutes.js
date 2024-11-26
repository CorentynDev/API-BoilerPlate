const express = require('express');
const { getExamples, createExample } = require('../controllers/exampleController');

const router = express.Router();

router.route('/')
    .get(getExamples) // GET /api/v1/examples
    .post(createExample); // POST /api/v1/examples

module.exports = router;
