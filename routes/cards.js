const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data;
const cards = data.cards;

router.get('/:id', (req, res) => {
	res.render('card', {
		prompt: cards[req.params.id].question,
		hint: cards[req.params.id].hint
	});
});

module.exports = router;