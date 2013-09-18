<!DOCTYPE html>
<html lang="en">
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>

<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <link href='css/bootstrap.min.css' type='text/css' rel='stylesheet' />
      <link href='css/tetris.css' type='text/css' rel='stylesheet' />
      
      <script src="js/namespace.js"></script>
      <script src="js/tetriminos.js"></script>
      <script src="js/buttons.js"></script>
      <script src="js/board.js"></script>
      <script src="js/nextPieceBoard.js"></script>
      <script src="js/timer.js"></script>
      <script src="js/game.js"></script>
      <link href='css/tetriminoeLevels.css' type='text/css' rel='stylesheet' />
      <style>
 /* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
/* Styles */
}
 
/* Smartphones (landscape) ----------- */
@media only screen 
and (min-width : 321px) {
/* Styles */
}
 
/* Smartphones (portrait) ----------- */
@media only screen 
and (max-width : 320px) {
/* Styles */
}

/* iPhone 4 ----------- */
@media
only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5) {
/* Styles */
}     

/* iPads (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) {
/* Styles */
}
 
/* iPads (landscape) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : landscape) {
/* Styles */
}
 
/* iPads (portrait) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : portrait) {
/* Styles */
}
 
/* Desktops and laptops ----------- */
@media only screen 
and (min-width : 768px) {
    #game{
        background: rgb(0, 0, 0);
        height: 380px;
        width: 240px;
        margin: auto;
        position: relative;
        left: 22px;
        font-family: 'Press Start 2P', cursive;
    }
    
    #mainGame{
        /*display:none;*/
        margin-top:50px;
        height:550px;
        background:url(img/768_BG.png);
        background-size:100%;
        background-repeat: no-repeat;
    }
     #game_lines {
        text-align: center;
        margin: 49px auto 26px auto;
    }
        #game_lines h3 {
            color: white;
            font-size: 22px;
            width: 252px;
            margin: auto;
            position: relative;
            left: 23px;
            line-height: 36px;
            background: black;
            height: 33px;
            text-align: right;
            padding-right: 3px;
        }
    .inner, .innerHidden, .I_piece, .J_piece, .L_piece, .O_piece, .S_piece, .T_piece, .Z_piece{
        width: 24px;
        height: 19px;
        background-size: 100%;
    }
    
    .innerNextPiece {
        float: left;
        width: 24px;
        height: 19px;
        background-color: transparent;
    }

    .type{
        text-align: center;
        margin: 68px auto 60px auto;
        position: relative;
        left: 30px;
        width: 158px;
        height: 32px;
        background: black;
    }
        .type h3{
            color: white;
            font-size: 23px;
            margin:0;
            padding: 6px;
        }
    #scoreBoard {
        margin-top: 48px;
        margin-bottom: 45px;
        height: 145px;
        width: 159px;
        left: -2px;
        position: relative;
        color: white;
        background: black;
        padding: 15px 0 0 10px;
   }
        #scoreBoard h3{
            margin:0;
            padding:0;
            font-size: 23px;
        }
   #nextPieceCont{
        color: white;
        text-align: center;
        width: 98px;
        position: relative;
        left: 4px;
        background: black;
        height: 98px;
        margin-bottom: 29px;
        padding: 3px 0 0 1px;
    }
        #nextPieceCont h3{
            font-size:23px;
            padding:0;
            margin:0;
        }
    #nextPiece{
        width: 119px;
      
    }
        .L_next_piece{
            margin-left: -12px;
            margin-top: 16px;
        }
        .J_next_piece{
            margin-left: 10px;
        }
        .Z_next_piece{
            margin-left: 13px;
            margin-top: 15px;
        }
        .S_next_piece{
            margin-left: 12px;
            margin-top: 15px;
        }
        .O_next_piece{
            margin-top: 15px;
        }
        .T_next_piece{
            margin-left: 12px;
        }
    
    #gameLevels {
        background: black;
        position: relative;
        right: 2px;
        width: 135px;
        height: 52px;
        color: white;
        text-align: center;
        padding-top: 4px;
    }
        #gameLevels h3 {
            padding:0;
            margin:0;
            font-size: 23px;
            line-height: 24px;
        }
    .stats{
        text-align:center;
        position: relative;
        left: 7px;
        width: 204px;
        height: 330px;
        background:black;
        color:red;
        font-size:25px;
    }
        .stats h3{
            font-size: 18px;
            padding-top: 10px;
        /*    margin-bottom: 20px;*/
            margin-bottom: 8px;
            color:white;
        }
        .stats ul{
            list-style-type: none;
        }
        .stats ul li{
           /*border:1px solid;*/
           margin:auto;
           width:80%;
           padding-top:3px;
        }
        .stats ul li span {
            height: 40px;
            display: inline-block;
        }
        #T_stat, #J_stat, #Z_stat, #I_stat, #O_stat, #L_stat, #S_stat {
            width: 118px;
        }
        
        #I_stat {
            position: relative;
            top: 8px;
        }
}

/* Desktops and laptops ----------- */
@media only screen 
and (min-width : 991px) {
    
    #game{
        background: rgb(0, 0, 0);
        height: 501px;
        width: 320px;
        margin: auto;
        position: relative;
        left: 42px;
        font-family: 'Press Start 2P', cursive;
    }
    
    #mainGame{
        /*display:none;*/
        margin-top:50px;
        height:750px;
        background:url(img/991_BG.png);
    }
    
    #game_lines {
        text-align: center;
        margin: 65px auto 39px auto;
    }
        #game_lines h3 {
            color: white;
            font-size: 27px;
            width: 333px;
            margin: auto;
            position: relative;
            left: 45px;
            line-height: 47px;
            background: black;
            height: 42px;
            text-align: right;
            padding-right: 10px;
        }
    .inner, .innerHidden, .I_piece, .J_piece, .L_piece, .O_piece, .S_piece, .T_piece, .Z_piece{
        width: 32px;
        height: 25px;
        background-size: 100%;
    }
    
    .innerNextPiece {
        float: left;
        width: 32px;
        height: 25px;
        background-color: transparent;
    }
    
    .type{
        text-align: center;
        margin: 90px auto 81px auto;
        position: relative;
        left: 50px;
        width: 210px;
        height: 43px;
        background: black;
    }
        .type h3{
            color: white;
            font-size: 30px;
            padding: 6px;
            margin:0;
        }
    #scoreBoard {
        margin-top: 65px;
        margin-bottom: 62px;
        height: 191px;
        width: 208px;
        left: 17px;
        position: relative;
        color: white;
        background: black;
        padding: 20px 0 0 10px;
   }
        #scoreBoard h3{
            margin:0;
            padding:0;
            font-size: 30px;
        }
   #nextPieceCont{
        color:white;
        text-align:center;
        width: 130px;
        position: relative;
        left: 21px;
        background:black;
        height: 131px;
        margin-bottom:39px;
        padding-top: 5px;
    }
        #nextPieceCont h3{
            font-size:30px;
            padding:0;
            margin:0;
        }
    #nextPiece{
        width:158px;
    }
        .L_next_piece{
            margin-left: -15px;
            margin-top: 25px;
        }
        .J_next_piece{
            margin-left: 15px;
        }
        .Z_next_piece{
            margin-left: 16px;
            margin-top: 20px;
        }
        .S_next_piece{
            margin-left: 15px;
            margin-top: 20px;
        }
        .O_next_piece{
            margin-top: 20px;
        }
        .T_next_piece{
            margin-left: 16px;
        }
    
    #gameLevels {
        background: black;
        position: relative;
        left: 16px;
        right:0px;
        width: 178px;
        height: 66px;
        color: white;
        text-align: center;
        padding-top: 5px;
    }
        #gameLevels h3 {
            padding:0;
            margin:0;
            font-size:30px;
            line-height: 30px;
        }
    .stats{
        text-align:center;
        position: relative;
        left: 20px;
        width: 270px;
        height: 440px;
        background:black;
        color:red;
        font-size:35px;
    }
        .stats h3{
            font-size:25px;
            padding-top: 10px;
        /*    margin-bottom: 20px;*/
            margin-bottom: 8px;
            color:white;
        }
        .stats ul{
            list-style-type: none;
        }
        .stats ul li{
           /*border:1px solid;*/
           margin:auto;
           width:80%;
           padding-top:8px;
        }
        .stats ul li span {
            height: 50px;
            display: inline-block;
        }
        #T_stat, #J_stat, #Z_stat, #I_stat, #O_stat, #L_stat, #S_stat{
            width: 148px;
        }
        #I_stat{
            position: relative;
            top: 13px;
        }

}


/* Desktops and laptops ----------- */
@media only screen 
and (min-width : 1200px) {
    
    #game{
        background:black;
        height:600px;
        width:371px;
        margin:auto;
        position:relative;
        left:37px;
        font-family: 'Press Start 2P', cursive;
    }
    
    #mainGame{
        /*display:none;*/
        margin-top:50px;
        height:850px;
        background:url(img/tetrisBG.png);
    }
    
    #game_lines{
        text-align:center;
        margin: 77px auto 42px auto;
    }
        #game_lines h3{
            color:white;
            font-size:30px;
            width:390px;
            margin:auto;
            position:relative;
            left:39px;
            line-height:55px;
            background:black;
            height:50px;
            text-align: right;
            padding-right: 10px;
        }
    
    .inner, .innerHidden, .I_piece, .J_piece, .L_piece, .O_piece, .S_piece, .T_piece, .Z_piece{
        width: 37px;
        height: 30px;
        background-size: 100%;
    }
    .innerNextPiece{
        float: left;
        width: 37px;
        height: 30px;
        background-color: transparent;
    }
    
    .type{
        text-align: center;
        margin:105px auto 95px auto;
        position: relative;
        left: 62px;
        width: 248px;
        height: 52px;
        background:black;
    }

        .type h3{
            height:20px;
            color:white;
            font-size:30px;
            padding-top: 12px;
        }
    #scoreBoard {
        margin-top: 80px;
        margin-bottom: 78px;
        height: 220px;
        width: 240px;
        left:0px;
        position: relative;
        color: white;
        background: black;
        padding: 20px 0 0 10px;
    }
        #scoreBoard h3{
            margin:0;
            padding:0;
            font-size: 35px;
        }
    #nextPieceCont{
        color:white;
        text-align:center;
        width: 149px;
        position: relative;
        left: 8px;
        background:black;
        height: 149px;
        margin-bottom: 47px;
        
    }
        #nextPieceCont h3{
            font-size:35px;
            padding:0;
            margin:0;
        }
    #nextPiece{
        width:168px;
    }
        .L_next_piece{
            margin-left: -19px;
            margin-top: 25px;
        }
        .J_next_piece{
            margin-left: 16px;
        }
        .Z_next_piece{
            margin-left: 18px;
            margin-top: 25px;
        }
        .S_next_piece{
            margin-left: 15px;
            margin-top: 25px;
        }
        .O_next_piece{
            margin-top: 25px;
        }
        .T_next_piece{
            margin-left: 18px;
        }
    
    #gameLevels {
        background: black;
        position: relative;
        left: -1px;
        width: 209px;
        height: 80px;
        color: white;
        text-align: center;
        padding-top: 0px;
    }
        #gameLevels h3 {
            padding:0;
            margin:0;
            font-size:35px;
            line-height: 37px;
            padding-top: 4px;
        }
        
    .stats{
        text-align:center;
        position: relative;
        left: 30px;
        width:317px;
        height:517px;
        background:black;
        color:red;
        font-size:40px;
    }
        .stats h3{
            font-size:25px;
            padding-top: 10px;
        /*    margin-bottom: 20px;*/
            margin-bottom: 8px;
            color:white;
        }
        .stats ul{
            list-style-type: none;
        }
        .stats ul li{
           /*border:1px solid;*/
           margin:auto;
           width:80%;
           padding-top:9px;
        }    
        .stats ul li span {
            height: 60px;
            display: inline-block;
        }
        #T_stat, #J_stat, #Z_stat, #I_stat, #O_stat, #L_stat, #S_stat{
            width: 148px;
        }
        
        #I_stat{
            position: relative;
            top: 13px;
        }
}
#mainGame{
    border: 3px solid #999;
    box-shadow: inset 0px 0px 50px rgb(0, 0, 0);
border-radius: 5%;
}
  /*global*/
.inner,.innerHidden {
    float: left;
    border:1px solid black;
    background-color: transparent;
}

.innerHidden {
    display:none;
}


#last_stat{
    padding:0px;
}

h3{
    font-family: 'Press Start 2P', cursive;
}
body{
    background: black;
}

/*starting credits*/
#start_credit{
    text-align:center;
    padding-top:50px;
}
#start_screen{
    display:none;
    text-align:center;
    padding-top:50px;
}

#start_credit img, #start_screen img, #game_setup img{
    margin:auto;
}

.navbar-fixed-top{
    width: 200px;
    left:auto;
    background:transparent;
}
.navbar-inverse{
    border:none;
}
.navbar-fixed-top a{
    text-decoration:none;
}
.navbar-text{
    margin-top:5px;
    margin-right:8px;
}


#game_setup{
    display:none;
    text-align:center;
    padding-top:50px;
    background-image:url(img/gameSetup.png);
    width:700px;
    height:650px;
    margin:auto;
}
#game_type{
    height: 50px;
    margin-top: 110px;
    margin-bottom: 183px;
    list-style-type: none;
}
#game_type li{
    height: 50px;
    width: 200px;
    margin-right: 68px;
    position: relative;
    float:right;
}

#music{
    /*background:blue;*/
}
#music li{
    height: 30px;
    margin: 15px auto;
    width: 250px;
    left: 29px;
    position: relative;
    list-style-type: none;
}
#music_2, #music_3, #music_off{
    display:none;
}
#music_1{
    display:block;
}

#type_leftA, #type_leftB{
    background-image: url(img/leftArrow.gif);
    width: 25px;
    height: 25px;
    top: 13px;
    float: left;
    left: 2px;
    position: relative;
}
#type_rightA, #type_rightB{
    background-image: url(img/rightArrow.gif);
    width: 25px;
    height: 25px;
    top: 13px;
    right: 9px;
    float: right;
    position: relative;
}

#A_type {
    display:block;
}
#B_type {
    display:none;
}

#music_1_left, #music_2_left, #music_3_left, #music_off_left {
    top:3px;
    background-image: url(img/leftArrow.gif);
    width: 25px;
    height: 25px;
    float: left;
    left: 4px;
    position: relative;
}

#music_1_right, #music_2_right, #music_3_right, #music_off_right {
    background-image: url(img/rightArrow.gif);
    width: 25px;
    height: 25px;
    top:3px;
    float: right;
    right: 11px;
    position: relative;
}

#options {
   
    background: rgb(57, 58, 57);
    color:white;
    padding:10px;
    display:none;
}

.checkbox {
display: block;
min-height: 20px;
margin-top: 0px;
margin-bottom: 10px;
padding-left: 20px;
vertical-align: middle;
}

.table thead>tr>th, .table tbody>tr>th, .table tfoot>tr>th, .table thead>tr>td, .table tbody>tr>td, .table tfoot>tr>td {
padding: 8px;
line-height: 1.428571429;
vertical-align: top;
border: 1px solid #999999;
border-right: 1px solid #999999;
}

.gameOver{
    height: 19px;
    background: url(img/game_over_line.png);
    clear: both;
}

</style>
      
<script>
// var game_setup = {
//     passSetup: false,
//     passCredit: false,
//     count: 1,
//     "handleKeyPress": function () {
//            var self = this;
//            document.onkeydown = function (e) {
//                e = e || window.event;
//                if (e.keyCode === 38) {
//                    //music up
//                    if(self.count > 2){
//                        document.getElementById("music").childNodes[self.count].childNodes[1].style.display = "none";
//                        self.count -= 2;
//                        document.getElementById("music").childNodes[self.count].childNodes[1].style.display = "block";
//                    }
//                        
//                } else if (e.keyCode === 40) {
//                    //music down
//                    if(self.count < 7){
//                        document.getElementById("music").childNodes[self.count].childNodes[1].style.display = "none";
//                        self.count += 2;
//                        document.getElementById("music").childNodes[self.count].childNodes[1].style.display = "block";
//                    }
//                    
//                } else if (e.keyCode === 37) {
//                    //type left
//                    document.getElementById("B_type").style.display = "none";
//                    document.getElementById("A_type").style.display = "block";
//                } else if (e.keyCode === 39) {
//                    //type right
//                    document.getElementById("A_type").style.display = "none";
//                    document.getElementById("B_type").style.display = "block";
//                } else if (e.keyCode === 13){
//                    //enter
//                    if(self.passSetup){
//                        console.log('game starting');
//                        document.getElementById('game_setup').style.display = 'none';
//                        document.getElementById('mainGame').style.display = 'block';
//                        Tetris.Game.create();
//                    } else if (self.passCredit){
//                         self.passSetup = true;
//                         document.getElementById('start_screen').style.display = 'none';
//                         document.getElementById('game_setup').style.display = 'block';
//                    }
//                    
//                }
//            };
//        }
// };
     
     
function load()
{
    Tetris.Game.create();
    
//    game_setup.handleKeyPress();
//    setTimeout(function(){
//        document.getElementById('start_credit').style.display = "none";
//        document.getElementById('start_screen').style.display = "block";
//        game_setup.passCredit = true;
//    },5000)
}
</script>     
</head>
<body onload="load()">

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <p class="navbar-text pull-right"><a href="#" id="settings" class="navbar-link" ><i class="icon-cog icon-3x" ></i></a></p>
    <div id="options">
      <div class="checkbox">
        <label>
          <input type="checkbox" id="pause_game"> Pause Game
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Music
        </label>
      </div>
      <table class="table">
          <tr>
              <td>Rotate Clockwise</td>
              <td>Up Arrow</td>
          </tr>
          <tr>
              <td>Rotate</td>
              <td>Z and X</td>
          </tr>
          <tr>
              <td>Move Down</td>
              <td>Down Arrow</td>
          </tr>
          <tr>
              <td>Move Left</td>
              <td>Left Arrow</td>
          </tr>
          <tr>
              <td>Move Right</td>
              <td>Right Arrow</td>
          </tr>
          
          
          
      </table>
        <div style="text-align:right;">
        <button type="button" class="btn btn-primary btn-sm">restart</button>
        </div>
    </div>
    </nav>
    
<!--    <div id='start_credit'>
        <img class ='img-responsive' src='img/startCredit.jpg' />
    </div>
    
    <div id='start_screen'>
        <img class ='img-responsive' src='img/startScreen.png' />
    </div>-->
    
<!--    <div id='game_setup'>
        <ul id='game_type'>
            <li >
                <div id='B_type'>
                    <div id='type_leftB'></div>
                    <div id='type_rightB'></div>
                </div>
            </li>
            <li >
                <div id='A_type'>
                    <div id='type_leftA'></div>
                    <div id='type_rightA'></div>
                </div>
            </li>
            
        </ul>
        <ul id='music'>
            <li>
                <div id='music_1'>
                    <div id='music_1_left'></div>
                    <div id='music_1_right'></div>
                </div>
            </li>
            <li>
                <div id='music_2'>
                    <div id='music_2_left'></div>
                    <div id='music_2_right'></div>
                </div>
            </li>
            <li>
                <div id='music_3'>
                    <div id='music_3_left'></div>
                    <div id='music_3_right'></div>
                </div>
            </li>
            <li>
                <div id='music_off'>
                    <div id='music_off_left'></div>
                    <div id="music_off_right"></div>
                </div>
            </li>
        </ul>
    </div>-->

    <div id='mainGame' class="container" >
        <div id="column1" class="col-lg-3 col-md-3 col-sm-3">
            <div>
                <div class="type">
                    <h3>A-TYPE</h3>
                </div>
                <div class="stats">
                    <h3>STATISTICS</h3>
                    <ul class="list-group">
                        <li><div id='T_stat'></div> <span id="T_count"> 000</span></li>
                        <li><div id='J_stat'></div> <span id="J_count"> 000</span></li>
                        <li><div id='Z_stat'></div> <span id="Z_count"> 000</span></li>
                        <li><div id='O_stat'></div> <span id="O_count"> 000</span></li>
                        <li><div id='S_stat'></div> <span id="S_count"> 000</span></li>
                        <li><div id='L_stat'></div> <span id="L_count"> 000</span></li>
                        <li id='last_stat'><div id='I_stat'></div> <span id="I_count"> 000</span></li>
                    </ul>
                </div>
            </div>
            
        </div>
        
        <div id="column2" class="col-lg-6 col-md-6 col-sm-6">
            <div id="game_lines">
                <h3>LINES - <span id="lines">000</span></h3>
            </div>
            <div id="game" ></div>
        </div>
        
        <div id="column3" class="col-lg-3 col-md-3 col-sm-3">
            <div id="scoreBoard" class="row">
                <h3>TOP</h3>
                <h3>010000</h3>
                <br />
                <h3>SCORE</h3>
                <h3 id="score">000000</h3>
            </div>
            <div class="row" id="nextPieceCont">
                <h3>NEXT</h3>
                <div id="nextPiece" ></div>
            </div>
            <div id="gameLevels" class="row">
                <h3>LEVEL</h3>
                <h3 id="level">&nbsp;00</h3>
            </div>

                <div id="gameState" style="display:none">
                    <div id="quit">
                        <span>Quit</span>
                    </div>
                    <div id="pause">
                        <span>Pause</span>
                    </div>
                    <div id="start">
                        <span>start</span>
                    </div>
                </div>
           
        </div>
    </div>
    

</body>

</html>