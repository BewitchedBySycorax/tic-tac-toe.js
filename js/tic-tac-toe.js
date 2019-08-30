"use strict";

var game = {
	move: false,
	moves: {
		x: 'X',
		o: 'O'
	},
	board: [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	],
	setEvents: function() {
		var td = document.getElementsByTagName('td');

		for ( var i = 0; i < td.length; i++ ) {
			td[i].addEventListener('click', this.onClick.bind(this));
		}
	},
	onClick: function(e) {
		// понять, по какой ячейке произошёл клик
		var row = e.target.getAttribute('data-row');
		var col = e.target.getAttribute('data-col');
	},
	run: function() {
		console.log(this.board);
		this.setEvents();
	}
};

window.addEventListener('load', function() {
	game.run();
});