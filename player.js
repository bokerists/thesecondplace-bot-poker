'use strict';

const detector = require('botpoker-card-detection')

exports = module.exports = {

	VERSION: '0.0.1',

	bet: function (gamestate) {
		const call = gamestate.callAmount;
		const fold = 0;
		const allIn = Infinity;
		
		var me = gamestate.players[gamestate.me];
		var hand = gamestate.commonCards.concat(me.cards);

		var hasCoppia = detector.hasCoppia(hand);
		var hasTris = detector.hasTris(hand);
		var hasPoker = detector.hasPoker(hand);
		var hasDoppiaCoppia = detector.hasDoppiaCoppia(hand);
		var hasColore = detector.hasColore(hand);
		var hasFull = detector.hasFull(hand);

		var hoQualcosaDiBasso = hasCoppia || hasTris;
		var hoQualcosaDiAlto = hasPoker || hasDoppiaCoppia || hasColore || hasFull;
	 
		if (hoQualcosaDiBasso) {
			return call;
		} else if (hoQualcosaDiAlto) {
			return allIn;
		}

	
		return 0;

	}

};
