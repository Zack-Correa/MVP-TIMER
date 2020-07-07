var intervals = new Object();

function clock(deathHour, deathMinute, spawnTime, div, mvp) {
    var respawn;
    if (deathHour != undefined && deathMinute != undefined) {
        respawn = moment().hour(deathHour).minutes(deathMinute).add(spawnTime, 'h')
    } else {
        respawn = moment().add(spawnTime, 'h');
    }
    intervals[mvp] = setInterval(function() {
        let now = moment();
        let distance = respawn.diff(now);
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(div).html(hours + "h " + minutes + "m " + seconds + "s");
        if (distance <= 0 && distance >= -600000) {
            $(div).html("Em Respawn!");
        }
    }, 1000)
}

mvpMap = {
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
    bispo: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', "#bispo-time", "bispo"),
};

function regenerateTimer(mvp) {
    clearInterval(intervals[mvp]);
    let timeDiv = "#" + mvp + "-time-input";
    let hourMinute = $(timeDiv).val().split(':')
    mvpMap[mvp](hourMinute[0], hourMinute[1]);
}

function init() {
    let mvpTimers = Object.values(mvpMap);
    mvpTimers.forEach((value) => value());
}


$(document).ready(init());