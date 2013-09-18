(function (){
    var meter = document.getElementById('music_meter');
    var sound_lbl = document.getElementById('no_sound');
    var music_switch = document.getElementById('music_switch');
    var player = document.getElementById('player');

    music_switch.addEventListener("change",function(ob){
        music_switch.checked ? (player.play(),  meter.style.display = "", sound_lbl.style.display = "") : (player.pause(), meter.style.display = "none", sound_lbl.style.display = "block");
    });
    meter.addEventListener("change", function(e){
        player.volume = meter.value * .01;
    });
    
    var music = {
        high_score : "music/High_Score.ogg",
        success : 'music/Success.ogg',
        victory : 'music/Victory.ogg',
        unknown : 'music/Unknown.ogg',
        music_1 : 'music/Music_1.ogg',
        music_1_fast : 'music/Music_1_fast.ogg',
        music_2 : 'music/Music_2.ogg',
        music_2_fast : 'music/Music_2_fast.ogg',
        music_3 : 'music/Music_3.ogg',
        music_3_fast : 'music/Music_3_fast.ogg'
    };

}());

