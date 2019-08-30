"use strict";

var game = {
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
	run: function() {
		console.log(this.board);
		this.setEvents();
	}
};

window.addEventListener('load', function() {
	game.run();
});