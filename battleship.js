/*------------------------------------------------------------------
[Battleships JS]

Project: Battleship.js
Version: 1.0.0
Author: Amechi Egbe
Website: http://amechiegbe.com
Email: amechiegbe@gmail.com
-------------------------------------------------------------------*/


"use strict";

/***
Battleship constructor
***/	
function Battleship() {}

/***
Method to return attack coordinates from user input
***/
Battleship.prototype.userInput = function() {
	var battleshipTable = this.matrix(),
		randomLetter = function( obj ) {
		    var result;
		    var count = 0;
		    for (var prop in obj) {
		        if (Math.random() < 1/++count) {
		           result = prop;
		        }
		    }
		    return result;
		},
		battleshipLetters = randomLetter(battleshipTable),
		battleRowInput = document.getElementById('letter').value,
		battleColInput = document.getElementById('number').value;

	
	for(var i = 0; i <= 4; i++) {
		
		battleshipTable[battleshipLetters][i] = "Battleship";
	
	}
	
	for(var j = 5; j <= 9; j++) {

		battleshipTable[battleshipLetters][j] = "Destroyer";
		
		if (battleshipLetters) {
			//this will be the default additional destroyer 
			//if a letter has already been selected
			battleshipTable['C'][j] = "Destroyer";
		}
	}

	try {
		if( battleshipTable[battleRowInput][battleColInput] ) {
			
			alert("Good hit solider! " + battleshipTable[battleRowInput][battleColInput] + " has been destroyed!");
		
		} else if( battleshipTable[battleRowInput][battleColInput] === null ) {
			
			alert("Your shot missed! Try again private!");
		
		} else if( battleshipTable[battleRowInput][battleColInput] === undefined ) {
			
			alert('Please enter correct input! Refer to table!');
		
		} 
	} catch(e) {
		alert('Please enter correct input! Refer to table!');
	}
};


/*
* Method for creating battleship 10 x 10 grid
*/
Battleship.prototype.matrix = function() {
	var battleshipGrid = {},
		letters = ['A','B','C','D','E','F','G','H','I','J'];
	

	for (var row = 0; row < letters.length; ++row) {

		var battleshipCol = [],
			battleshipRow = letters[row];

		for(var col = 0; col < 10; ++col) {
			
			//initial values will be all null
			battleshipCol[col] = null;
		}

		battleshipGrid[battleshipRow] = battleshipCol;

	}
	
	return battleshipGrid;
};


window.Battleship = Battleship;















