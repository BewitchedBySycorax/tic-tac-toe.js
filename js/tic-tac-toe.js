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
	changeMove: function() {
		this.move = this.move === this.moves.x ? this.moves.o : this.moves.x;
	},
	onClick: function(e) {
		// понять, по какой ячейке произошёл клик
		var row = e.target.getAttribute('data-row');
		var col = e.target.getAttribute('data-col');

		// запомнить выбор
		this.board[row][col] = this.move;
		
		// ставим крестик или нолик в зависимости от того, кто ходит
		e.target.innerHTML = this.move;

		// проверка на победу
		if ( !this.checkVictory() ) {
			// если нет победы, смена хода
			this.changeMove();
		} else {
			this.exit();
		}
	},
	checkVictory: function() {
		var rules = [
			[{y: 0, x: 0}, {y: 0, x: 1}, {y: 0, x: 2}],
			[{y: 1, x: 0}, {y: 1, x: 1}, {y: 1, x: 2}],
			[{y: 2, x: 0}, {y: 2, x: 1}, {y: 2, x: 2}],

			[{y: 0, x: 0}, {y: 1, x: 0}, {y: 2, x: 0}],
			[{y: 0, x: 1}, {y: 1, x: 1}, {y: 2, x: 1}],
			[{y: 0, x: 2}, {y: 1, x: 2}, {y: 2, x: 2}],

			[{y: 0, x: 0}, {y: 1, x: 1}, {y: 2, x: 2}],
			[{y: 2, x: 0}, {y: 1, x: 1}, {y: 0, x: 2}],
		];

		for ( var rule, i = 0; i < rules.length; i++ ) {
			rule = rules[i];

			if ( this.board[rule[0].y][rule[0].x] &&
				this.board[rule[0].y][rule[0].x] === this.board[rule[1].y][rule[1].x] &&
				this.board[rule[0].y][rule[0].x] === this.board[rule[2].y][rule[2].x] ) {
					return true;
			}
		}
		return false;
	},
	run: function() {
		// установили первый ход
		this.move = this.moves.x;
		// ждём клика на поле
		this.setEvents();
	},
	exit: function() {
		alert('Победили ' + this.move);
	}
};

window.addEventListener('load', function() {
	game.run();
});