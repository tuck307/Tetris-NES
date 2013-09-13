
//pieces
Tetris.Piece = (function () {
    "use strict";
    //point object private
    var Point = function (x, y) {
        this.x = x;
        this.y = y;
    };
    // piece constructor
    function Piece(origin) {
        this.current_rotation = 0;
        this.origin = new Point(origin.x, origin.y);
    }
    //methods shared across all instances
    Piece.prototype = {
        getBlocks: function () {
            return this.rotations[this.current_rotation];
        },
        getOrigin: function () {
            var p = new Point(this.origin.x, this.origin.y);
            return p;
        },
        absolutePosition: function () {
            var temp  = this.getBlocks(), result = [], i, p;
            for (i = 0; i < 4; i += 1) {
                p = new Point(this.origin.x + temp[i].x, this.origin.y + temp[i].y);
                result.push(p);
            }
            return result;
        },
        moveLeft: function () {
            this.origin.x -= 1;
        },
        moveRight: function () {
            this.origin.x += 1;
        },
        moveDown: function () {
            this.origin.y += 1;
        },
        rotate: function () {
            this.current_rotation = (this.current_rotation + 1) % this.rotations.length;
        },
        rotateCounter: function () {
    
            this.current_rotation = (this.current_rotation + 3) % this.rotations.length;
        },
        setOrigin: function (the_origin) {
            this.origin = the_origin;
        },
        setRotation: function (num) {
            this.current_rotation = num;
        },
        toString: function () {
            var piece = "", found = false, y, x, i, temp, pos;
            for (y = 3; 0 <= y; y -= 1) {
                found = false;
                for (x = 0; x < 4; x += 1) {
                    for (i = 0; i < 4; i += 1) {
                        temp = this.getBlocks();
                        pos = new Point(temp[i].x, temp[i].y);
                        if (pos.x === x && pos.y === y) {
                            piece += ("[]");
                            found = true;
                        }
                    }
                    if (!found) {
                        piece += ("  ");
                    }
                }
                piece += ('\n');
            }
            return piece;
        }
    };
        //Piece Tetriminos
    var piece_map = {
            "O": function () {//good
                var that = new Piece({x:4,y:2});
                that.type = "O";
                that.class = "O_piece",
                that.rotations = [[new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)]];
                return that;
            },
            "I": function () {//good
                var that = new Piece({x:3,y:1});
                that.type = "I";
                that.class = "I_piece",
                that.rotations = [[new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(3, 1)], [new Point(2, 3), new Point(2, 2), new Point(2, 1), new Point(2, 0)]];
                return that;
            },
            "S": function () {//good
                var that = new Piece({x:4,y:2});
                that.type = "S";
                that.class = "S_piece",
                that.rotations = [[new Point(0, 1), new Point(1, 1), new Point(1, 0), new Point(2, 0)], [new Point(1, 0), new Point(1, 1), new Point(2, 1), new Point(2, 2)]];
                return that;
            },
            "Z": function () {
                var that = new Piece({x:4,y:2});
                that.type = "Z";
                that.class = "Z_piece",
                that.rotations = [[new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(2, 1)], [new Point(1, 2), new Point(1, 1), new Point(2, 1), new Point(2, 0)]];
                return that;
            },
            "J": function () {
                var that = new Piece({x:4,y:1});
                that.type = "J";
                that.class = "J_piece",
                that.rotations = [[new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(2, 2)], [new Point(1, 2), new Point(1, 1), new Point(1, 0), new Point(2, 0)], [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(2, 1)], [new Point(0, 2), new Point(1, 2), new Point(1, 1), new Point(1, 0)]];
                return that;
            },
            "L": function () {
                var that = new Piece({x:4,y:2});
                that.type = "L";
                that.class = "L_piece",
                that.rotations = [[new Point(0, 1), new Point(0, 0), new Point(1, 0), new Point(2, 0)], [ new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(2, 0)], [new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(1, 2)], [new Point(1, 0), new Point(1, 1), new Point(1, 2), new Point(2, 2)]];
                return that;
            },
            "T": function () {
                var that = new Piece({x:4,y:1});
                that.type = "T";
                that.class = "T_piece",
                that.rotations = [[new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(1, 2)], [new Point(1, 2), new Point(1, 1), new Point(1, 0), new Point(2, 1)], [new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(1, 0)], [new Point(1, 2), new Point(1, 1), new Point(1, 0), new Point(0, 1)]];
                return that;
            }
        };

    //create a piece or a random piece if there's no params sent.
    var create = function (name) {
        //create named piece or create random if name isn't supplied.
        if (typeof name === "undefined") {
            var all_pieces = ["O", "I", "S", "Z", "J", "L", "T"];
            var piece = all_pieces[Math.floor(Math.random() * (6 + 1))];
            return piece_map[piece]();
        } else {
            return piece_map[name]();
        }
    };
    return {
        create: create
    };
}());

