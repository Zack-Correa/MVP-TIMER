var intervals = new Object();

function clock(deathHour, deathMinute, spawnTimeHour, spawnTimeMinute, div, mvp) {
    var respawn;
    if (deathHour != undefined && deathMinute != undefined) {
        respawn = moment().hour(deathHour).minutes(deathMinute).add(spawnTimeHour, 'h').add(spawnTimeMinute, 'm');
    } else {
        respawn = moment().add(spawnTimeHour, 'h').add(spawnTimeMinute, 'm');
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
    amonra: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#amonra-time", "amonra"),
    mjolnir_04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#mjolnir_04-time", "mjolnir_04"),
    gld_dun02: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun02-time", "gld_dun02"),
    amonraPesadelo: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#amonraPesadelo-time", "amonraPesadelo"),
    ra_fild03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#ra_fild03-time", "ra_fild03"),
    ra_fild04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#ra_fild04-time", "ra_fild04"),
    ve_fild01: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#ve_fild01-time", "ve_fild01"),
    ve_fild02: (deathHour, deathMinute) => clock(deathHour, deathMinute, '6', '0', "#ve_fild02-time", "ve_fild02"),
    gld_dun03_2: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03_2-time", "gld_dun03_2"),
    aprendiz: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#aprendiz-time", "aprendiz"),
    prt_maze03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#prt_maze03-time", "prt_maze03"),
    gld_dun03: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03-time", "gld_dun03"),
    bafoAmaldicoado: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#bafoAmaldicoado-time", "bafoAmaldicoado"),
    belzebu: (deathHour, deathMinute) => clock(deathHour, deathMinute, '12', '0', "#belzebu-time", "belzebu"),
    gtb: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gtb-time", "gtb"),
    bispo: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#bispo-time", "bispo"),
    boitata: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#boitata-time", "boitata"),
    sk: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#sk-time", "sk"),
    detar: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#detar-time", "detar"),
    dracula: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#dracula-time", "dracula"),
    drake: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#drake-time", "drake"),
    pay_fild10: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#pay_fild10-time", "pay_fild10"),
    gld_dun01_2: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun01_2-time", "gld_dun01_2"),
    cenia: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#cenia-time", "cenia"),
    farao: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#farao-time", "farao"),
    pay_dun04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#pay_dun04-time", "pay_dun04"),
    gld_dun01: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun01-time", "gld_dun01"),
    freeoni: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#freeoni-time", "freeoni"),
    daehyun: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#daehyun-time", "daehyun"),
    tartaruga: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#tartaruga-time", "tartaruga"),
    gioia: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gioia-time", "gioia"),
    gory: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#gory-time", "gory"),
    kades: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#kades-time", "kades"),
    ifrit: (deathHour, deathMinute) => clock(deathHour, deathMinute, '11', '0', "#ifrit-time", "ifrit"),
    kiel: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#kiel-time", "kiel"),
    kraken: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '20', "#kraken-time", "kraken"),
    ktullanux: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#ktullanux-time", "ktullanux"),
    ladyBranca: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '56', "#ladyBranca-time", "ladyBranca"),
    ladyTanee: (deathHour, deathMinute) => clock(deathHour, deathMinute, '7', '0', "#ladyTanee-time", "ladyTanee"),
    leak: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#leak-time", "leak"),
    thanatos: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#thanatos-time", "thanatos"),
    morroc: (deathHour, deathMinute) => clock(deathHour, deathMinute, '12', '0', "#morroc-time", "morroc"),
    ohero: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#ohero-time", "ohero"),
    osiris: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#osiris-time", "osiris"),
    pesar: (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#pesar-time", "pesar"),
    pyuriel: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#pyuriel-time", "pyuriel"),
    anthell02: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#anthell02-time", "anthell02"),
    gld_dun03_maya: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03_maya-time", "gld_dun03_maya"),
    gld_dun02_2: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun02_2-time", "gld_dun02_2"),
    scaraba: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#scaraba-time", "scaraba"),
    scarabaGolden: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#scarabaGolden-time", "scarabaGolden"),
    RSX: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '5', "#RSX-time", "RSX"),
    samurai: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '31', "#samurai-time", "samurai"),
    gl_chyard: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gl_chyard-time", "gl_chyard"),
    gl_chyard_: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gl_chyard_-time", "gl_chyard_"),
    gld_dun04: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun04-time", "gld_dun04"),
    gld_dun04_2: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun04_2-time", "gld_dun04_2"),
    deathLord: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '13', "#deathLord-time", "deathLord"),
    orcLord: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#orcLord-time", "orcLord"),
    snakeLord: (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '34', "#snakeLord-time", "snakeLord"),
    superAprendiz: (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#superAprendiz-time", "superAprendiz"),
    taoGunka: (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#taoGunka-time", "taoGunka"),
    valk: (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#valk-time", "valk"),
    vesper: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#vesper-time", "vesper"),
    timeholder: (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#timeholder-time", "timeholder")
};

function regenerateTimer(mvp) {
    clearInterval(intervals[mvp]);
    let timeDiv = "#" + mvp + "-time-input";
    let hourMinute = $(timeDiv).val().split(':')
    mvpMap[mvp](hourMinute[0], hourMinute[1]);
}

function init() {
    /*     let mvpTimers = Object.values(mvpMap);
        mvpTimers.forEach((value) => value()); */
}


$(document).ready(init());