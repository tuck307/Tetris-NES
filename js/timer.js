//Game
Tetris.Timer = (function () {
    "use strict";
    var create = function (game) {
        var Timer = function () {};

        Timer.prototype = {
            value : 1000,
            id : false,
            startDate : 0,
            remaining :  0,
            start: function () {
                game.handleKeyPress();
                var that = this, level, num, temp;
                if (!that.id && !game.isGameOver) {
                    level = game.game_level.level;
                    num = level * 50;
                    temp = that.value - num;
                    if (temp < 150) {
                        temp = 150;
                    }
                    that.remaining = temp;
                    that.id = setInterval(function () {
                        that.startDate = new Date();
                        game.moveCurrentPiece("down");
                    }, temp);
                } else {
                    return false;
                }

            },
            stop: function () {
                clearInterval(this.id);
                this.id = false;
                game.removeListeners();
            },
            pause: function () {
                if (this.id) {
                    document.getElementById('pause_game').checked = true;
                    clearInterval(this.id);
                    this.id = false;
                    var temp = new Date() - this.startDate;
                    this.remaining = this.remaining - temp;
                }

            },
            resume: function () {
                var that = this;
                if (!game.isGameOver) {
                    document.getElementById('pause_game').checked = false;
                    setTimeout(function(){
                        game.moveCurrentPiece("down");
                        that.start();
                    },that.remaining);
                }
            }
        };
        return new Timer();
    };
    return {
        create: create
    };
}());