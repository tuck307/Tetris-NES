//var musicListeners = (function (){
//    var meter = document.getElementById('music_meter');
//    var sound_lbl = document.getElementById('no_sound');
//    var music_switch = document.getElementById('music_switch');
//    var player = document.getElementById('tetris_music_player');
//
//    music_switch.addEventListener("change",function(ob){
//        music_switch.checked ? (player.play(),  meter.style.display = "", sound_lbl.style.display = "") : (player.pause(), meter.style.display = "none", sound_lbl.style.display = "block");
//    });
//    meter.addEventListener("change", function(e){
//        player.volume = meter.value * .01;
//    });
//
//}());

//-DEPENDENCIES

// --DOM ELEMENTS

// ---ID'S 
//Game_audio - the container tag for the audio components.
//music_switch - the container for the music checkbox
//no_sound - the no sound label. Needed to hide or show.
//meter_container - the container for the range input meter

Tetris.Game.Audio = (function(){

        var music_player = (function(){
            
            //private
             var current_track = 1;
             var audio = {
                 music : {
                    normal : {
                      music_1 : 'music/Music_1.ogg',
                      music_2 : 'music/Music_2.ogg',
                      music_3 : 'music/Music_3.ogg'
                    },
                    fast : {
                      music_1_fast : 'music/Music_1_fast.ogg',
                      music_2_fast : 'music/Music_2_fast.ogg',
                      music_3_fast : 'music/Music_3_fast.ogg' 
                    }  
                }
             };
             
             //DOM elements
             var meter = (function () {
                 var meter = document.createElement('INPUT');
                 meter.type = "range";
                 meter.value = '100';
                 meter.min = '1';
                 meter.max = '100';
                 meter.addEventListener("change", function(e){
                    player.volume = meter.value * .01;
                 });
                 document.getElementById('meter_container').appendChild(meter);
                 return meter;
             }());
             
             var music_switch = (function () {
                 var sound_lbl = document.getElementById('no_sound');
                 var music_switch = document.createElement('INPUT');
                 music_switch.type = "checkbox";
                 music_switch.disabled = false;
                 music_switch.checked = 'true';
                 music_switch.addEventListener("change", function (ob) {
                      music_switch.checked ? (play(),  meter.style.display = "", sound_lbl.style.display = "") : (pause(), meter.style.display = "none", sound_lbl.style.display = "block");
                 });
                 document.getElementById('music_switch').appendChild(music_switch);
                 return music_switch;
             }());
             
             var player = (function() {
                var element = document.createElement('AUDIO');
                element.loop = 'loop';
                var source = document.createElement('SOURCE');
                source.src = 'music/Music_1.ogg';
                source.type = "audio/ogg";
                element.appendChild(source);
                document.getElementById('Game_audio').appendChild(element);
                return element;
             }());
             
             //PRIVATE FUNCTIONS
             function musicCheck () {
                 if(current_track === 4){
                     music_switch.disabled = true;
                     music_switch.checked = 'false';
                     document.getElementById('no_sound').style.display = "block";
                     meter.style.display = '';
                 } else {
                     music_switch.disabled = false;
                     music_switch.checked = 'true';
                     document.getElementById('no_sound').style.display = "";
                     meter.style.display = '';
                 }
             }
             
             function updateSrc (load) {
                player.children[0].src = audio.music.normal["music_" + current_track];
                load ? play() : 0;
             };

             //PUBLIC
             function play () {
                player.load();
                player.play();
             };

             function trackDown (load) {
                 current_track += 1;
                 updateSrc(load);
                 musicCheck();
             };

             function trackUp (load) {
                 current_track -= 1;
                 updateSrc(load);
                 musicCheck();
             };
             
             function pause () {
                 player.pause();
             }

             return {
                 play : play,
                 trackUp : trackUp,
                 trackDown : trackDown,
                 pause : pause
             };
         }());
         
         
        var sound_player = (function(){
            //private
            var audio = {
               sounds : {
                   high_score : "music/High_Score.ogg",
                   success : 'music/Success.ogg',
                   victory : 'music/Victory.ogg',
                   unknown : 'music/Unknown.ogg',
                   drop : 'music/drop.ogg',
                   ping : 'music/ping.ogg'
               }
            };
            var player = (function() {
                var element = document.createElement('AUDIO');
                var source = document.createElement('SOURCE');
                source.src = '';
                source.type = "audio/ogg";
                element.appendChild(source);
                document.getElementById('Game_audio').appendChild(element);
                return element;
             }());
            
            //public
            function play (name){
                player.children[0].src = audio.sounds[name];
                player.load();
                player.play();
            }
            
            return {
                play : play
            };
            
        }());
     
    return {
        music_player : music_player,
        sound_player : sound_player
    };
}());
