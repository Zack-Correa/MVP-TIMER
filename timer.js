



function clock(deathHour, deathMinute, spawnTime, div) {
    var respawn;
    if(deathHour != undefined && deathMinute != undefined) {
        respawn = moment().hour(deathHour).minutes(deathMinute).add(spawnTime, 'h')
    }
    else {
        respawn = moment().add(spawnTime, 'h');
    }
    setInterval(function() {
        var now = moment();
        var distance = respawn.diff(now);
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(div).html(hours + "h " + minutes + "m " + seconds + "s");  
        if(distance <= 0){
            $(div).html("Em Respawn!"); 
        }
    }, 1000)
}

mvpMap = {
    "amonra" : (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonra-time"),
    "abelhaRainha" : (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#abelhaRainha-time")
};

function init(){
    mvpMap["amonra"](10,52);
    mvpMap["abelhaRainha"](11,0);
}


$(document).ready(init());



