//Board
Tetris.Board = (function () {
    "use strict";
    //create a board
    var create = function (width, height) {
            //desclaring vars
            var result = "", i, x, j;
            // Board constructor
            function Board() {
                this.width = width;
                this.height = height;
                this.grid = [];
                for (i = 0; i < height; i += 1) {
                    this.grid.push([]);
                }
            }
            //starting specs and functions shared across all instances
            Board.prototype = {
                buffer_zone: 2,
                toString: function (div, level) {
                    var result = "";
                        //top two rows are hidden topout area
                    for (i = 0; i < this.buffer_zone; i += 1) {
                        result  += "<div>";
                        for (x = 0; x < this.width; x += 1) {
                            result += "<div class='innerHidden'></div>";
                        }
                        result += "</div>";
                    }
                    for (i = this.buffer_zone; i < this.height; i += 1) {
                        result  += "<div>";
                        for (j = 0; j < this.width; j += 1) {
                            if (this.grid[i][j] !== undefined) {
                                result += "<div class='" + this.grid[i][j] + level + " inner" +"' ></div>";
                            } else {
                                result += "<div class='inner'></div>";
                            }
                        }
                        result += "</div>";
                    }
                    div.innerHTML = result;
                }
            };
            return new Board();
        };
     //board return scope
    return {
        create: create
    };
}());

