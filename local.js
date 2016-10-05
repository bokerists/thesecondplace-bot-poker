'use strict';

var player = require('./player.js');

var hand = [ {rank: 'J', type: 'C'}, {rank: '10', type: 'C'}];

var table = [ {rank: '2', type: 'C'}, {rank: '3', type: 'D'}, {rank: '5', type: 'T'}, {rank: 'K', type: 'T'} ];
var tableColor = [ {rank: '2', type: 'C'}, {rank: '3', type: 'C'}, {rank: '5', type: 'C'}, {rank: 'K', type: 'C'} ];
var tableNull = [];
    
var gamestate = {
    "game": 2,
    "round": 2,
    "spinCount": 2,
    "sb": 50,
    "pot": 100,
    "commonCards": table,
    "players": [{
    	"status": 'active',
    	"cards": hand
    }, {
    	"status": 'active',
    	"cards": []
    }, {
    	"status": 'folded',
    	"cards": []
    }],
    "me": 0,
    "callAmount": 50    
};

let amount = player.bet(gamestate)


console.log('bet:', amount);
