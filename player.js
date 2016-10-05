'use strict';

const detector = require('botpoker-card-detection')

exports = module.exports = {

	VERSION: 'Superstar poker js-player',

	bet: function (gamestate) {
		const call = gamestate.callAmount;
		const fold = 0;
		const allIn = Infinity;
		
		var me = gamestate.players[gamestate.me];
		var hand = gamestate.commonCards.concat(me.cards);

		var hasCoppia = detector.hasCoppia(hand);
		var hasTris = detector.hasTris(hand);

		var hoQualcosa = hasCoppia || hasTris;
	 
		if (hoQualcosa) {
			return call;
		}
	
		return 0;

	}

};
