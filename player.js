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

		var river = gamestate.commonCards.length === 5; 
    var turn = gamestate.commonCards.length === 4;
    var preRiver = gamestate.commonCards.length < 5;
    var preTurn = gamestate.commonCards.length < 4;
    var preFlop = gamestate.commonCards.length < 3;

		var hoQualcosaDiBasso = hasCoppia || hasTris;
		var hoQualcosaDiAlto = hasPoker || hasDoppiaCoppia || hasColore || hasFull;
	 
	 	if (preFlop) {
	 		return call;
	 	}

		if (hoQualcosaDiBasso) {
			return call;
		} else if (hoQualcosaDiAlto) {
			return gamestate.minimumRaiseAmount * 2;
		}

	
		return 0;

	}

};
