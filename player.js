'use strict';

const detector = require('botpoker-card-detection')

exports = module.exports = {

	VERSION: '0.0.1',

	bet: function (gamestate) {
		const call = gamestate.callAmount;
		const fold = 0;
		const allIn = Infinity;
		
		let me = gamestate.players[gamestate.me];
		let hand = gamestate.commonCards.concat(me.cards);

		let hasCoppia = detector.hasCoppia(hand);
		let hasTris = detector.hasTris(hand);
		let hasPoker = detector.hasPoker(hand);
		let hasDoppiaCoppia = detector.hasDoppiaCoppia(hand);
		let hasColore = detector.hasColore(hand);
		let hasFull = detector.hasFull(hand);

		let river = hand.length === 5; 
    let turn = hand.length === 4;
    let preRiver = hand.length < 5;
    let preTurn = hand.length < 4;
    let preFlop = hand.length < 3;

		let hoQualcosaDiBasso = hasCoppia || hasTris;
		let hoQualcosaDiAlto = hasPoker || hasDoppiaCoppia || hasColore || hasFull;
	 
	 	if (preTurn) {
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
