Tetris.NextPieceBoard = (function() {
    //create a board
        var create = function() {
        
            // NextPieceBoard constructor
            function NextPieceBoard(){};

       
            NextPieceBoard.prototype = {
                printPiece: function(the_piece){
                    
                    document.getElementById('nextPiece').innerHTML = this.blankBoard();
                        
                    var p = the_piece.getBlocks();
                    var temp = 0;
                    if(the_piece.type === "L" || the_piece.type === "O"){
                     temp = 1;
                    }
                    for(var i = 0; i<p.length; i++){
                        document.getElementById('nextPiece').childNodes[p[i].y].childNodes[p[i].x + temp].style.background = the_piece.color;
                        document.getElementById("nextPiece").childNodes[p[i].y].childNodes[p[i].x + temp].className = " nextPieceStyle";
                    }
                },
                updateScore: function(score){
                    
                },
                updateLevel: function(level){
                    
                },
                updateLines: function(lines){
                   
                },
                blankBoard: function(){
                       
                       var result = "";
                        
                        for(var i=0; i<3; i++){
                            result  += "<div>";
                            for (var x = 0; x < 4; x++)
                            {
                                result += "<div class='innerNextPiece'></div>";
                            }
                            
                            result += "</div>";
                        }
                        
                        return result;
                }
            };
            
            return new NextPieceBoard();
        };
        return{
            create:create
        };
})();