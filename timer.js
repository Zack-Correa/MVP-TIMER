



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
<<<<<<< Updated upstream
    "amonra" : (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonra-time"),
    "abelhaRainha" : (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#abelhaRainha-time")
=======
    amonra: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonra-time", "amonra"),
    mjolnir_04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#mjolnir_04-time", "mjolnir_04"),
    gld_dun02: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', "#gld_dun02-time", "gld_dun02"),
    amonraPesadelo: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#amonraPesadelo-time", "amonraPesadelo"),
    ra_fild03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', "#ra_fild03-time", "ra_fild03"),
    ra_fild04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', "#ra_fild04-time", "ra_fild04"),
    ve_fild01: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', "#ve_fild01-time", "ve_fild01"),
    ve_fild02: (deathHour, deathMinute) => clock(deathHour, deathMinute, '6', "#ve_fild02-time", "ve_fild02"),
    gld_dun03_2: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', "#gld_dun03_2-time", "gld_dun03_2"),
    aprendiz: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', "#aprendiz-time", "aprendiz"),
    prt_maze03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', "#prt_maze03-time", "prt_maze03"),
    gld_dun03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', "#gld_dun03-time", "gld_dun03"),
    bafoAmaldicoado: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#bafoAmaldicoado-time", "bafoAmaldicoado"),
    belzebu: (deathHour, deathMinute) => clock(deathHour, deathMinute, '12', "#belzebu-time", "belzebu"),
    gtb: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', "#gtb-time", "gtb"),
>>>>>>> Stashed changes
};

function init(){
    mvpMap["amonra"](10,52);
    mvpMap["abelhaRainha"](11,0);
}

<<<<<<< Updated upstream

$(document).ready(init());

=======
function init() {
    let mvpTimers = Object.values(mvpMap);
    mvpTimers.forEach((value) => value())
}
>>>>>>> Stashed changes


