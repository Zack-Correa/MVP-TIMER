var intervals = new Object();
function clock(deathHour, deathMinute, spawnTime, div, mvp) {
    var respawn;
    if(deathHour != undefined && deathMinute != undefined) {
        respawn = moment().hour(deathHour).minutes(deathMinute).add(spawnTime, 'h')
    }
    else {
        respawn = moment().add(spawnTime, 'h');
    }
    intervals[mvp] = setInterval(function() {
        let now = moment();
        let distance = respawn.diff(now);
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(div).html(hours + "h " + minutes + "m " + seconds + "s");  
        if(distance <= 0){
            $(div).html("Em Respawn!"); 
        }
    }, 1000)
}

mvpMap = {
    amonra : (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonra-time", "amonra"),
    abelhaRainha : (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#abelhaRainha-time", "abelhaRainha"),
    amonraPesadelo : (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonraPesadelo-time", "amonraPesadelo")
};

function regenerateTimer(mvp) {
    clearInterval(intervals[mvp]);
    console.log(mvp)
    mvpMap[mvp]();
}

function init(){
    mvpMap["amonra"]();
    mvpMap["abelhaRainha"]();
    mvpMap["amonraPesadelo"]();
}


$(document).ready(init());



