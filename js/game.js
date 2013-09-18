//Game
Tetris.Game = (function () {
    "use strict";
    var create = function () {
        //global game "self"
            var self;

            var Game = function () {
                self = this;
                //create the game board
                this.board = Tetris.Board.create(10, 22);
                //create the first two pieces
                this.current_piece = Tetris.Piece.create();
                this.stats.add(this.current_piece.type);
                this.next_piece = Tetris.Piece.create();
                this.prev_piece_state = this.current_piece.absolutePosition();
               // this.handleKeyPress();
                //create game timer
                this.timer = Tetris.Timer.create(this);
                //render board and GUI components
                this.render();
            };
            Game.prototype = {
                "stats": {
                    "T": 0,
                    "J": 0,
                    "Z": 0,
                    "O": 0,
                    "S": 0,
                    "L": 0,
                    "I": 0,
                    "add": function (piece) {
                        this[piece] += 1;
                        var s = "000" + this[piece];
                        document.getElementById(piece + "_count").innerHTML = s.substring(this[piece].toString().length);
                    }
                },
                "moveCheck": true,
                "spawned": true,
                "started": false,
                "scoring": [40, 100, 300, 1200],
                "pause": false,
                "isGameOver": false,
                "prev_piece_state": '',
                "gameBtns": {
                    "quit": '',
                    "start": '',
                    "pause": '',
                    "resume": ''
                },
                "printStatPiece": function () {
                    var p, temp, i, x, result = "";
                    for (i = 0; i < 2; i += 1) {
                        result  += "<div>";
                        for (x = 0; x < 4; x += 1) {
                            result += "<div class='innerNextPiece'></div>";
                        }
                        result += "</div>";
                    }
                    document.getElementById('T_stat').innerHTML = result;
                    document.getElementById('J_stat').innerHTML = result;
                    document.getElementById('Z_stat').innerHTML = result;
                    document.getElementById('O_stat').innerHTML = result;
                    document.getElementById('S_stat').innerHTML = result;
                    document.getElementById('L_stat').innerHTML = result;
                    document.getElementById('I_stat').innerHTML = result;
                    
                    var my_arr = [Tetris.Piece.create("T"),Tetris.Piece.create("J"), Tetris.Piece.create("Z"), Tetris.Piece.create("O"), Tetris.Piece.create("S"), Tetris.Piece.create("L"), Tetris.Piece.create("I")];
                    
                   for (var i = 0; i < my_arr.length; i += 1){
                        if (my_arr[i].type === 'T') {
                            document.getElementById("T_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("T_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("T_stat").childNodes[0].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("T_stat").childNodes[1].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        } else if (my_arr[i].type === "J"){
                            document.getElementById("J_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("J_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("J_stat").childNodes[0].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("J_stat").childNodes[1].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        }else if (my_arr[i].type === "Z"){
                            document.getElementById("Z_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("Z_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("Z_stat").childNodes[1].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("Z_stat").childNodes[1].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        }else if (my_arr[i].type === "O"){
                            document.getElementById("O_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("O_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("O_stat").childNodes[1].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("O_stat").childNodes[1].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        }else if (my_arr[i].type === "S"){
                            document.getElementById("S_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("S_stat").childNodes[0].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("S_stat").childNodes[1].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("S_stat").childNodes[1].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        }else if (my_arr[i].type === "L"){
                            document.getElementById("L_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("L_stat").childNodes[1].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("L_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("L_stat").childNodes[0].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            
                        }else if (my_arr[i].type === "I"){
                            document.getElementById("I_stat").childNodes[0].childNodes[0].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("I_stat").childNodes[0].childNodes[1].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("I_stat").childNodes[0].childNodes[2].className = my_arr[i].class + this.game_level.level + " inner";
                            document.getElementById("I_stat").childNodes[0].childNodes[3].className = my_arr[i].class + this.game_level.level + " inner";
                        }
                    }
                },
                "printNextPiece": function (the_piece) {
                    
                    var p, temp, i, x, result = "";
                    for (i = 0; i < 3; i += 1) {
                        result  += "<div>";
                        for (x = 0; x < 4; x += 1) {
                            result += "<div class='innerNextPiece'></div>";
                        }
                        result += "</div>";
                    }
                    document.getElementById('nextPiece').innerHTML = result;
                    document.getElementById('nextPiece').className = the_piece.type + "_next_piece";
                    p = the_piece.getBlocks();
                    temp = 0;
                    if (the_piece.type === "L" || the_piece.type === "O") {
                        temp = 1;
                    }
                    for (i = 0; i < p.length; i += 1) {
                        document.getElementById("nextPiece").childNodes[p[i].y].childNodes[p[i].x + temp].className = the_piece.class + this.game_level.level + " inner";
                    }
                },
                "printPiece": function (div) {
                    var p, i, prev;
                    p = this.current_piece.absolutePosition();
                    prev = this.prev_piece_state;

                    for (i = 0; i < prev.length; i += 1) {
                        
                        var cl = document.getElementById('game').childNodes[prev[i].y].childNodes[prev[i].x].className;
                        
                        if( cl !== 'inner ' + this.current_piece.class && cl !== 'inner' && cl !== this.current_piece.class + this.game_level.level + " inner"){
                           document.getElementById('game').childNodes[prev[i].y].childNodes[prev[i].x].className = "innerHidden";
                        }else{
                            document.getElementById('game').childNodes[prev[i].y].childNodes[prev[i].x].className = 'inner';
                        }
                        
                    }
                    
                    for (i = 0; i < p.length; i += 1) {
                        if(document.getElementById('game').childNodes[p[i].y].childNodes[p[i].x].className === "innerHidden"){
                            document.getElementById('game').childNodes[p[i].y].childNodes[p[i].x].className += " " + this.current_piece.class + this.game_level.level + " inner";
                        }else{
                            document.getElementById('game').childNodes[p[i].y].childNodes[p[i].x].className =  this.current_piece.class + this.game_level.level + " inner";
                        }
                        
                        this.prev_piece_state[i].x = p[i].x;
                        this.prev_piece_state[i].y = p[i].y;
                    }
                },
                "freezePiece": function () {
                    
                    var p, i;
                    p = this.current_piece.absolutePosition();
                    for (i = 0; i < p.length; i += 1) {
                        //document.getElementById('game').childNodes[p[i].y].childNodes[p[i].x].className += " " + this.current_piece.type + "_piece";
                        this.board.grid[p[i].y][p[i].x] = this.current_piece.type + "_piece";
                    }

                },
                "removeListeners": function () {
                    document.onkeydown = '';
                },
                "setPause": function () {
                    if (!this.isGameOver) {
                        this.pause = !this.pause;
                        if (this.pause) {
                            //pause timer
                            this.timer.pause();
                            this.removeListeners();
                            document.styleSheets[0].cssRules[8].style.opacity = ".6";
                        } else {
                            this.timer.resume();
                            //this.handleKeyPress();
                            document.styleSheets[0].cssRules[8].style.opacity = "1";
                        }
                    }
                },
                "game_level": {
                    "id": 'level',
                    "level": 0,
                    "add": function (the_level) {
                        this.level += the_level;
                        self.timer.stop();
                        self.timer.start();
                         var s = "00" + this.level;
                        document.getElementById(this.id).innerHTML = "&nbsp;" + s.substring(this.level.toString().length);
                    }
                },
                "game_score": {
                    "id": "score",
                    "score": 0,
                    add: function (the_lines) {
                         // 40 *(level + 1), 100*(level + 1), 300 * (level + 1), 1200 * (level + 1)
                        this.score += self.scoring[the_lines - 1] * (self.game_level.level + 1);
//                    /*Listener code can go here*/
                        var s = "000000" + this.score;
                        document.getElementById(this.id).innerHTML = s.substring(this.score.toString().length);
                    }
                },
                "game_lines": {
                    "id": 'lines',
                    "lines": 0,
                    "add": function (the_lines) {
                        var i;
                        for (i = 0; i < the_lines; i += 1) {
                           
                            this.lines += 1;
                            if (this.lines % 10 === 0) {
                                self.game_level.add(1);
                                self.printStatPiece();
                            }
                        }
                        //update the score
                        self.game_score.add(the_lines);
                        //print the new lines amount
                         var s = "000" + this.lines;
                        document.getElementById(this.id).innerHTML = s.substring(this.lines.toString().length);
                    }
                },
                "control_loop": function (keyCode, direction) {
                    console.log(self.keyState[keyCode]);
                    console.log(self.keyState);
                    
                    if(self.keyState[keyCode]){
                        self.moveCurrentPiece(direction);
                    }
                    
                },
                "keyState" : {},
                "moveTimeOut": '',
                "handleKeyPress": function () {
                        
                        if ((self.keyState[38] || self.keyState[88]) && self.timer.id) {
                            self.moveCurrentPiece("rotate");
//                            self.moveTimeOut = setTimeout(function(){
//                                self.handleKeyPress();
//                            }, 200);
                        } else if (self.keyState[90] && self.timer.id) {
                            self.moveCurrentPiece("rotateCounter");
//                            self.moveTimeOut = setTimeout(function(){
//                                self.handleKeyPress();
//                            }, 200);
                        } else if (self.keyState[40] && self.moveCheck && self.timer.id) { 
                            self.moveCurrentPiece("down");
                            self.moveTimeOut = setTimeout(function(){
                                self.handleKeyPress();
                            }, 40);
                        } else if (self.keyState[37] && self.timer.id) {
                            self.moveCurrentPiece("left");
                            self.moveTimeOut = setTimeout(function(){
                                self.handleKeyPress();
                            }, 150);
                        } else if (self.keyState[39] && self.timer.id) {
                            self.moveCurrentPiece("right");
                            self.moveTimeOut = setTimeout(function(){
                                self.handleKeyPress();
                            }, 150);
                        } else if (self.keyState[80]){
                            //check to see if id is false. meaning its paused already.
                            if(self.timer.id){
                                self.timer.pause();
                            }else{
                                self.timer.resume();
                            }
                        }
                     
//                    document.onkeyup = function (e) {
//                         e = e || window.event;
//                         if(e.keyCode === 40){
//                             //down
//                             self.moveCheck = true;
//                         }
//                    };
                },
                "copyPiece": function () {
                    var copy = Tetris.Piece.create(this.current_piece.type);
                    copy.setOrigin(this.current_piece.getOrigin());
                    copy.setRotation(this.current_piece.current_rotation);
                    return copy;
                },
                "clearRows" : function(total, callBack) {
            
                    var rows = total.length;
                    var down = 5;
                    var up = 4;
                    var timer;
                    
                   
                    function one(){
                        var row = document.getElementById('game').children[total[0]];
                        row.children[--down].className = "inner";//
                        row.children[++up].className = "inner";
                        if(down === 0 && up === 9){
                            clearInterval(timer);
                            setTimeout(function(){
                                callBack(true);
                            },100);  
                        }
                    }
                    
                    function two(){
                        --down;
                        ++up;
                        var row_1 = document.getElementById('game').children[total[0]];
                        var row_2 = document.getElementById('game').children[total[1]];
                        
                        row_1.children[down].className = "inner";
                        row_1.children[up].className = "inner";
                        
                        row_2.children[down].className = "inner";
                        row_2.children[up].className = "inner";
                        
                        if(down === 0 && up === 9){
                            console.log("in clear timer 2");
                            clearInterval(timer);
                            setTimeout(function(){
                                callBack(true);
                            },100);  
                        }
                    }
                    
                    function three(){
                        --down;
                        ++up;
                        var row_1 = document.getElementById('game').children[total[0]];
                        var row_2 = document.getElementById('game').children[total[1]];
                        var row_3 = document.getElementById('game').children[total[2]];
                        
                        row_1.children[down].className = "inner";
                        row_1.children[up].className = "inner";
                        
                        row_2.children[down].className = "inner";
                        row_2.children[up].className = "inner";
                        
                        row_3.children[down].className = "inner";
                        row_3.children[up].className = "inner";
                        
                        
                        if(down === 0 && up === 9){
                            console.log("in clear timer 3");
                            clearInterval(timer);
                            setTimeout(function(){
                                callBack(true);
                            },100);  
                        }
                    }
                    
                    function four(){
                        --down;
                        ++up;
                        var row_1 = document.getElementById('game').children[total[0]];
                        var row_2 = document.getElementById('game').children[total[1]];
                        var row_3 = document.getElementById('game').children[total[2]];
                        var row_4 = document.getElementById('game').children[total[3]];
                        
                        row_1.children[down].className = "inner";
                        row_1.children[up].className = "inner";
                        
                        row_2.children[down].className = "inner";
                        row_2.children[up].className = "inner";
                        
                        row_3.children[down].className = "inner";
                        row_3.children[up].className = "inner";
                        
                        row_4.children[down].className = "inner";
                        row_4.children[up].className = "inner";
                        
                        if(down === 0 && up === 9){
                            clearInterval(timer);
                            setTimeout(function(){
                                callBack(true);
                            },100);  
                        }
                    }
                    
                 if (rows === 1) {
                      timer = setInterval(one,100);
                  } else if (rows === 2) {
                      timer = setInterval(two,100);
                  } else if (rows === 3) {
                      timer = setInterval(three,100);
                  } else if (rows === 4) {
                      timer = setInterval(four,100);
                  }
                    
 
                   
                },
                "checkRows": function (callback) {
                    var count = 0, total = [], i, j;
                    for (i = 0; i < this.board.height; i += 1) {
                        for (j = 0; j < this.board.width; j += 1) {
                            if (this.board.grid[i][j] !== undefined) {
                                count += 1;
                            }
                        }
                        if (count === this.board.width) {
                            total.push(i);
                        }
                        count = 0;
                    }

                    if (total.length > 0) {

                        self.clearRows(total, function(){
                               
                                var div = document.getElementById('game');
                                for (i = total.length - 1; i >= 0; i -= 1) {
                                    div.removeChild(div.childNodes[total[i]]);
                                    self.board.grid.splice(total[i], 1);
                                }
                                for (i = 0; i < total.length; i += 1) {
                                    self.board.grid.unshift([]);
                                }
                              //update results chain
                                self.game_lines.add(total.length);

                                //change color here
                                self.board.toString(document.getElementById('game'), self.game_level.level);
                                callback();
                        });
                        
                    }else{
                        
                        callback();
                    }
                },
                "collide": function (direction) {
                    var result = false, clone = this.copyPiece(), the_blocks, i;
                    if (direction === "left") {
                        clone.moveLeft();
                    } else if (direction === "right") {
                        clone.moveRight();
                    } else if (direction === "down") {
                        clone.moveDown();
                    } else if (direction === "rotate") {
                        clone.rotate();
                    } else if (direction === "rotateCounter") {
                        clone.rotateCounter();
                    } else if (direction === "spawn") {
                        //do nothing but check if the new piece is colliding.
                    } else {
                        return false;
                    }
                    the_blocks = clone.absolutePosition();
                    for (i = 0; i < the_blocks.length; i += 1) {
                        result = result || !(0 <= the_blocks[i].x && the_blocks[i].x < this.board.width);
                        result = result || !(0 <= the_blocks[i].y && the_blocks[i].y < this.board.height);
                        result = result || this.board.grid[the_blocks[i].y][the_blocks[i].x] !== undefined;
                    }

                    return result;
                },
                "gameOver": function () {
                    //need to disable the game, timer and the key listeners. This should be left static.
                    var p = this.current_piece.absolutePosition(), i, y, time, counter = 2;
                    console.log("game over");
                    this.removeListeners();
                    this.timer.stop();
                    for (i = 0; i < p.length; i += 1) {
                       document.getElementById('game').childNodes[p[i].y].childNodes[p[i].x].className =  this.current_piece.class + this.game_level.level + " inner";
                    }
                    this.isGameOver = true;
                    
                    
                    setTimeout(function(){ 
                        time = setInterval(function(){
                             document.getElementById('game').childNodes[counter].className = "gameOver";
                             for(y = 0; y < self.board.width; y++){
                                 document.getElementById('game').childNodes[counter].childNodes[y].className = "inner";
                                 document.getElementById('game').childNodes[counter].childNodes[y].style.border = "none";
                             }
                             counter++;
                             if(counter === 22){
                                 clearInterval(time);
                             }
                             console.log('in');
                        },100);
                    },700);
                },
                "generateNextPiece": function () {
                    //clone next piece by creating a new one with the same type.
                    
                    this.stats.add(this.next_piece.type);
                    this.current_piece = Tetris.Piece.create(this.next_piece.type);
                    this.next_piece = Tetris.Piece.create();
                    this.prev_piece_state = this.current_piece.absolutePosition();
                    this.printNextPiece(this.next_piece);
                },
                "moveCurrentPiece": function (direction) {
                    //boolean
                    var collision = this.collide(direction);
                    if (!collision) {
                        if (direction === "left") {
                            this.current_piece.moveLeft();
                        } else if (direction === "right") {
                            this.current_piece.moveRight();
                        } else if (direction === "down") {
                            this.current_piece.moveDown();
                        } else if (direction === "rotate") {
                            this.current_piece.rotate();
                        } else if (direction === "rotateCounter") {
                            this.current_piece.rotateCounter();
                        } else {
                            return false;
                        }
                        return this.printPiece();
                    } else if (collision && direction === "down") {
                        //this fixes the issue when the users holds the down button. It disables the down action after spawn just like in the game.
                        if(self.keyState[40]){
                            self.moveCheck = false;
                        }
                        
                        //freeze the piece on the board and game grid
                        this.freezePiece();
                        //check for full rows on the board.
                        self.timer.stop();
                        
                        this.checkRows(function(){
                            //current piece is now the next peice.
                            //create a new next piece and display it.
                            self.generateNextPiece();
                            //check if the new spawned piece generated is going to collide, causeing a game over.
                            if (self.collide('spawn')) {
                                self.gameOver();
                            } else {
                            //show the new piece generated.
                                self.printPiece();
                                self.timer.start();
                            }
                            return true;
                        });
                        
                    } else {
                        return false;
                    }
                },
                "render": function () {
            
                    window.addEventListener('keydown',function(e){
                        if(!self.keyState[e.keyCode] || typeof self.keyState[e.keyCode] === "undefined"){
                            self.keyState[e.keyCode || e.which] = true;
                            self.handleKeyPress();
                        }
                        self.keyState[e.keyCode || e.which] = true;
                    },true);    
                    window.addEventListener('keyup',function(e){
                        self.keyState[e.keyCode || e.which] = false;
                        clearTimeout(self.moveTimeOut);
                        if(e.keyCode === 40){
                            //down
                            self.moveCheck = true;
                        }
                    },true);

                    //pause checkbox listener
                    document.getElementById('pause_game').addEventListener("change", function(e){
                        if(this.checked){
                            self.timer.pause();
                        }else{
                            self.timer.resume();
                        }
                    });
                    this.gameBtns.quit = new Tetris.Buttons.create({id: 'quit', click: function () {
                        if (!self.isGameOver) {
                            self.timer.stop();
                            self.isGameOver = true;
                            self.gameOver();
                        }
                    }});
                    this.gameBtns.restart = new Tetris.Buttons.create({id: 'restart', click: function () {
                        if (!self.isGameOver) {
                            self.timer.stop();
                            self.isGameOver = true;
                           
                            Tetris.Game.create();
                        }
                    }});
                    this.gameBtns.start = new Tetris.Buttons.create({id: 'start', click: function () {
                        self.timer.start();
                    }});
                    this.gameBtns.pause = new Tetris.Buttons.create({id: 'pause', click: function () {
                        self.setPause();
                    }});
                    this.board.toString(document.getElementById('game'), this.game_level.level);
                    this.printPiece();
                    this.printNextPiece(self.next_piece);
                    this.printStatPiece();
                    self.timer.start();
                    
                    document.getElementById('settings').addEventListener("click", function(){
                        if(document.getElementById('options').style.display === "block"){
                            document.getElementById('options').style.display = "none";
                        }else{
                            document.getElementById('options').style.display = "block";
                        }
                    });
                    
                }
            };
            
            return new Game();
        };
        
    return {
        create: create
    };
}());