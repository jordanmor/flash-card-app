const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
	const { side } = req.query;
	const { id } = req.params;
	const text = cards[id][side];
	const { hint } = cards[id];
	const capitalize = function(str) {
		str = str.toLowerCase();
		return str.charAt(0).toUpperCase() + str.substr(1);
	};

	const templateData = { text, id, capitalize };

	if (side === 'question') {
		templateData.hint = hint;
		templateData.cardOtherSide = 'answer';
	} else if(side === 'answer'){
		templateData.cardOtherSide = 'question'
	}
	res.render('card', templateData);
});

module.exports = router;
