const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

function randomizeId() {
	const numOfCards = cards.length;
	// randomNum starts from 0 in order to properly access json array
	const flashCardId = Math.floor( Math.random() * numOfCards );
	return flashCardId;
}

router.get('/', (req, res) => {
	res.redirect(`/cards/${randomizeId()}`);
});

router.get('/:id', (req, res) => {

	const { side } = req.query;
	const { id } = req.params;

	if( !side ) {
		return res.redirect(`/cards/${id}?side=question`);
	}
	const name = req.cookies.username;
	const text = cards[id][side];
	const { hint } = cards[id];
	const capitalize = str => {
		str = str.toLowerCase();
		return str.charAt(0).toUpperCase() + str.substr(1);
	};

	const templateData = { text, id, name, side, capitalize };

	if (side === 'question') {
		templateData.hint = hint;
		templateData.cardOtherSide = 'answer';
	} else if(side === 'answer'){
		templateData.cardOtherSide = 'question'
	}
	res.render('card', templateData);
});

module.exports = router;
