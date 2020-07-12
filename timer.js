var intervals = new Object();
var appendedMVPs = [];

function clock(deathHour, deathMinute, spawnTimeHour, spawnTimeMinute, div, mvp) {
    var respawn;
    var musicPlayed;
    var toastGenerated;
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
            /*             if ($(".toast_container").has("#" + mvpInfoMap[mvp][0]).length <= 0) */
            if (!toastGenerated) {
                generateToast(mvpInfoMap[mvp][1], mvpInfoMap[mvp][0]);
                toastGenerated = true;
            }


            if (!musicPlayed) {
                let src = 'https://www.myinstants.com/media/sounds/tuturu_1.mp3';
                let audio = new Audio(src);
                audio.play();
                musicPlayed = true;
            }
        }
        if (distance < -600000) {
            $(div).html("MVP Vivo!");
        }
    }, 1000)
}
mvpInfoMap = {
    moc_pryd06: ["Amon Ra", 'amonra', 'moc_pryd06', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#moc_pryd06-time", "amonra"), false],
    mjolnir_04: ["Abelha-Rainha", 'abelhaRainha', 'mjolnir_04', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#mjolnir_04-time", "mjolnir_04"), true],
    gld_dun02: ["Abelha-Rainha", 'abelhaRainha', 'gld_dun02', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun02-time", "gld_dun02"), true],
    moc_prydn2: ["Amon Ra do Pesadelo", 'amonraPesadelo', 'moc_prydn2', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#moc_prydn2-time", "amonraPesadelo"), false],
    ra_fild03: ["Atroce", 'atroce', 'ra_fild03', '3 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#ra_fild03-time", "ra_fild03"), true],
    ra_fild04: ["Atroce", 'atroce', 'ra_fild04', '5 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#ra_fild04-time", "ra_fild04"), true],
    ve_fild01: ["Atroce", 'atroce', 've_fild01', '3 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#ve_fild01-time", "ve_fild01"), true],
    ve_fild02: ["Atroce", 'atroce', 've_fild02', '6 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '6', '0', "#ve_fild02-time", "ve_fild02"), true],
    gld_dun03_2: ["Atroce", 'atroce', 'gld_dun03_2', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03_2-time", "gld_dun03_2"), true],
    eg_dun01: ["Aprendiz", 'aprendiz', 'eg_dun01', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#eg_dun01-time", "aprendiz"), false],
    prt_maze03: ["Bafomé", 'bafome', 'prt_maze03', '3 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#prt_maze03-time", "prt_maze03"), true],
    gld_dun03: ["Bafomé", 'bafome', 'gld_dun03', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03-time", "gld_dun03"), true],
    gl_cas02_: ["Bafomé Amaldiçoado", 'bafoAmaldicoado', 'gl_cas02_', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#gl_cas02_-time", "bafoAmaldicoado"), false],
    abbey03: ["Belzebu", 'bubu', 'abbey03', '12 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '12', '0', "#abbey03-time", "belzebu"), false],
    prt_sewb4: ["Besouro-Ladrão Dourado", 'gtb', 'prt_sewb4', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#prt_sewb4-time", "gtb"), false],
    abbey02: ["Bispo Decadente", 'bispo', 'abbey02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#abbey02-time", "bispo"), false],
    bra_dun02: ["Boitata", 'boitata', 'bra_dun02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#bra_dun02-time", "boitata"), false],
    xmas_dun02: ["Cavaleiro da Tempestade", 'sk', 'xmas_dun02', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#xmas_dun02-time", "sk"), false],
    abyss_03: ["Detardeurus", 'detar', 'abyss_03', '3 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#abyss_03-time", "detar"), false],
    gef_dun02: ["Doppelganger", 'doppel', 'gef_dun02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#gef_dun02-time", "gef_dun02"), true],
    gld_dun04_doppel: ["Doppelganger", 'doppel', 'gld_dun04_doppel', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun04_doppel-time", "gld_dun04_doppel"), true],
    gef_dun01: ["Drácula", 'dracula', 'gef_dun01', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gef_dun01-time", "dracula"), false],
    treasure02: ["Drake", 'drake', 'treasure02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#treasure02-time", "drake"), false],
    pay_fild10: ["Eddga", 'eddga', 'pay_fild10', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#pay_fild10-time", "pay_fild10"), true],
    gld_dun01_2: ["Eddga", 'eddga', 'gld_dun01_2', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun01_2-time", "gld_dun01_2"), true],
    gld_dun01_eddga: ["Eddga", 'eddga', 'gld_dun01_2', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun01_eddga-time", "gld_dun01_eddga"), true],
    lhz_dun02: ["Egnigem Cenia", 'cenia', 'lhz_dun02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#lhz_dun02-time", "cenia"), false],
    in_sphinx5: ["Faraó", 'farao', 'in_sphinx5', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#in_sphinx5-time", "farao"), false],
    pay_dun04: ["Flor do Luar", 'flor', 'pay_dun04', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#pay_dun04-time", "pay_dun04"), true],
    gld_dun01: ["Flor do Luar", 'flor', 'gld_dun01', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun01-time", "gld_dun01"), true],
    moc_fild17: ["Freeoni", 'freeoni', 'moc_fild17', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#moc_fild17-time", "freeoni"), false],
    gld2_pay: ["General Daehyun", 'daehyun', 'gld2_pay', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld2_pay-time", "daehyun"), false],
    tur_dun04: ["General Tartaruga", 'tartaruga', 'tur_dun04', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#tur_dun04-time", "tartaruga"), false],
    gld2_ald: ["Gioia", 'gioia', 'gld2_ald', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld2_ald-time", "gioia"), false],
    mosk_dun03: ["Gorynych", 'gory', 'mosk_dun03', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#mosk_dun03-time", "gory"), false],
    thor_v03: ["Ifrit", 'ifrit', 'thor_v03', '11 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '11', '0', "#thor_v03-time", "ifrit"), false],
    kh_dun02: ["Kiel-D-01", 'kiel', 'kh_dun02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#kh_dun02-time", "kiel"), false],
    gld2_gef: ["Guardião Morto Kades", "kades", 'gld2_gef', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld2_gef-time", "kades"), false],
    iz_dun05: ["Kraken", 'kraken', 'iz_dun05', '2 horas e 20 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '20', "#iz_dun05-time", "kraken"), false],
    ice_dun03: ["Ktullanux", 'ktullanux', 'ice_dun03', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#ice_dun03-time", "ktullanux"), false],
    lou_dun03: ["Lady Branca", 'ladyBranca', 'lou_dun03', '1 hora e 56 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '56', "#lou_dun03-time", "ladyBranca"), false],
    ayo_dun02: ["Lady Tanee", 'ladyTanee', 'ayo_dun02', '7 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '7', '0', "#ayo_dun02-time", "ladyTanee"), false],
    dew_dun01: ["Leak", 'leak', 'dew_dun01', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#dew_dun01-time", "leak"), false],
    ethana_boss: ["Memória de Thanatos", 'thanatos', 'ethana_boss', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#ethana_boss-time", "thanatos"), false],
    moc_fild22: ["Morroc Ferido", 'morroc', 'moc_fild22', '12 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '12', '0', "#moc_fild22-time", "morroc"), false],
    gef_fild03: ["Orc Herói", 'ohero', 'gef_fild03', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gef_fild03-time", "ohero"), false],
    moc_pryd04: ["Osíris", 'osiris', 'moc_pryd04', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#moc_pryd04-time", "osiris"), false],
    ra_san05: ["Pesar Noturno", 'pesar', 'ra_san05', '5 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#ra_san05-time", "pesar"), false],
    gld2_prt: ["Pyuriel Furiosa", 'pyuriel', 'gld2_prt', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld2_prt-time", "pyuriel"), false],
    anthell02: ["Maya", 'maya', 'anthell02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#anthell02-time", "anthell02"), true],
    gld_dun03_maya: ["Maya", 'maya', 'gld_dun03_maya', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun03_maya-time", "gld_dun03_maya"), true],
    gld_dun02_2: ["Maya", 'maya', 'gld_dun02_2', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun02_2-time", "gld_dun02_2"), true],
    dic_dun02: ["Rainha Scaraba", 'scaraba', 'dic_dun02', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#dic_dun02-time", "dic_dun02"), false],
    dic_dun03: ["Rainha Scaraba Dourada", 'scarabaGold', 'dic_dun03', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#dic_dun03-time", "scarabaGolden"), false],
    ein_dun02: ["RSX-0806", 'RSX', 'ein_dun02', '2 horas e 5 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '5', "#ein_dun02-time", "RSX"), false],
    ama_dun03: ["Samurai Encarnado", 'samurai', 'ama_dun03', '1 hora e 31 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '31', "#ama_dun03-time", "ama_dun03"), false],
    gl_chyard: ["Senhor das Trevas", 'darkLord', 'gl_chyard', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gl_chyard-time", "gl_chyard"), true],
    gl_chyard_: ["Senhor das Trevas", 'darkLord', 'gl_chyard_', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#gl_chyard_-time", "gl_chyard_"), true],
    gld_dun04: ["Senhor das Trevas", 'darkLord', 'gld_dun04', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun04-time", "gld_dun04"), true],
    gld_dun04_2: ["Senhor das Trevas", 'darkLord', 'gld_dun04_2', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#gld_dun04_2-time", "gld_dun04_2"), true],
    nifflheim: ["Senhor dos Mortos", 'deathLord', 'nifflheim', '2 horas e 13 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '13', "#nifflheim-time", "deathLord"), false],
    gef_fild10: ["Senhor dos Orcs", 'orcLord', 'gef_fild10', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#gef_fild10-time", "orcLord"), false],
    gon_dun03: ["Serpente Suprema", 'snakeLord', 'gon_dun03', '1 hora e 34 minutos', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '34', "#gon_dun03-time", "snakeLord"), false],
    teg_dun02: ["Super-Aprendiz", 'superAprendiz', 'teg_dun02', '3 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '3', '0', "#teg_dun02-time", "superAprendiz"), false],
    beach_dun: ["Tao Gunka", 'taoGunka', 'beach_dun', '5 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '5', '0', "#beach_dun-time", "taoGunka"), false],
    odin_tem03: ["Valquíria Randgris", 'valk', 'odin_tem03', '8 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '8', '0', "#odin_tem03-time", "valk"), false],
    jupe_core: ["Vesper", 'vesper', 'jupe_core', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#jupe_core-time", "vesper"), false],
    c_tower3_: ["Vigia do Tempo", 'timeholder', 'c_tower3_', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#c_tower3_-time", "timeholder"), false],
    lasa_dun01: ["Gemaring", 'gemaring', 'lasa_dun01', '1 hora', (deathHour, deathMinute) => clock(deathHour, deathMinute, '1', '0', "#lasa_dun01-time", "gemaring"), false],
    xmas_fild01: ["Hatii", 'hatii', 'xmas_fild01', '2 horas', (deathHour, deathMinute) => clock(deathHour, deathMinute, '2', '0', "#xmas_fild01-time", "hatii")]
}

function regenerateTimer(mvp) {
    clearInterval(intervals[mvp]);
    let timeDiv = "#" + mvp + "-time-input";
    let hourMinute = $(timeDiv).val().split(':')
    mvpInfoMap[mvp][4](hourMinute[0], hourMinute[1]);
}

function init() {
    let mvpTimers = Object.keys(mvpInfoMap);
    mvpTimers.forEach((value) => {
        loadCard(value, mvpInfoMap[value][5])
            /* mvpInfoMap[value][4](); */
        console.log(value)
    });
}

$(window).scroll(function() {
    let pos = $(window).scrollTop() + 5;
    pos = pos + "px";
    $(".toast-full").css({ top: pos });
});

$(".searchBar").on('input', () => {
    $(".main-div").empty();
    if ($(".searchBar").val() == "") {
        init();
        return;
    }
    let mvpValues = Object.entries(mvpInfoMap);
    var regex = new RegExp($(".searchBar").val(), 'i');
    mvpValues.forEach(([key, value]) => {
        if (value.find(word => { if (typeof(word) == "string") { return word.match(regex); } }) != undefined) {
            loadCard(key, mvpInfoMap[key][5])
        }
    });
});



function templateToast(placeholderId, placeholderMVP, mvpImage) {
    return `<div class="toast" id="${placeholderId}"role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                <div class="toast-header">
                    <img src="./resources/${mvpImage}.gif" class="rounded mr-2" alt="...">
                    <strong class="mr-auto">MVP Em respawn/vivo</strong>
                    <button type="button" class="ml-2 mb-1 close close-${placeholderId}" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    ${placeholderMVP}
                </div>
            </div>`
}

function generateTab(mvp) {
    $('.main-div').append(`
    <div class="${mvp}-main">
    <div class="card">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        </ul>
        <div class="tab-content" id="myTabContent"></div>
    </div>`);
}

function appendMVPinTab(mvp, mvpName, mvpTime, map, first) {
    $(`.${mvp}-main`).find("ul").append(`
            <li class="nav-item">
                    <a class="nav-link ${first? "active":""}" id="${map}-tab" data-toggle="tab" href="#${map}" role="tab" aria-controls="${map}" aria-selected="false">${map}</a>
            </li>`);
    $(`.${mvp}-main`).children('.card').children('.tab-content').append(`
            <div class="tab-pane fade show ${first? "active":""}" id="${map}" role="tabpanel" aria-labelledby="${map}-tab">
                    <h5 class="card-title">${mvpName}</h5>
                    <img class="card-img-top" src="./resources/${mvp}.gif" alt="Card image cap" width="7rem" height="150">
                    <div class="card-body">
                        <p class="card-text" id="${map}-time">Tempo de respawn: ${mvpTime}</p>
                        <input class="form-control time-input" type="time" id="${map}-time-input">
                        <button id="${map}-btn" class="btn btn-success" onclick="regenerateTimer('${map}')">Iniciar contador</button>
                    </div>
                </div>
            </div>`);
}

function loadCard(mapKey, multiple) {
    console.log(mapKey)
    let mvpInfo = mvpInfoMap[mapKey];
    console.log(mvpInfo)
    let mvpName = mvpInfo[0];
    let mvp = mvpInfo[1];
    let map = mvpInfo[2];
    let mvpTime = mvpInfo[3];
    let first = false;
    if (multiple) {
        if (!appendedMVPs.includes(mvp)) {
            appendedMVPs.push(mvp);
            generateTab(mvp);
            first = true;
        }
        appendMVPinTab(mvp, mvpName, mvpTime, map, first);
    } else {
        generateTab(mvp);
        appendMVPinTab(mvp, mvpName, mvpTime, map, true);
    }

}

function generateToast(mvpId, mvpName) {
    if ($(".toast_container").has("#" + mvpId).length <= 0)
        $(".toast_container").append(templateToast(mvpId, mvpName, mvpId));
    $('#' + mvpId).toast('show')
}

function closeToast(divId) {
    $("." + divId).remove();
}




$(document).ready(init());