function sendData(correta,pergunta,nroPergunta,alternativas,escolhida,acertou,tamanho,nroFase,nomeNivel){
	var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveChallengeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.correctAnswer = correta;
        info.challengeId = nroPergunta;
        info.question = pergunta;
        info.choices = alternativas;
        info.answer = escolhida;
        info.win = acertou;
        info.levelSize = tamanho;
        info.levelId = nroFase;
        info.levelName = nomeNivel;
        info.challengeType = 'multipleChoice';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
});
	console.log(pergunta);
	console.log(correta);
	console.log(nroPergunta);
	console.log(alternativas);
	console.log(escolhida);
    console.log(acertou);
    console.log(tamanho);
    console.log(nroFase);
    console.log(nomeNivel);
}

function sendRankingData(pontos){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveChallengeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.score = pontos;
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(pontos);
}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,nomeNivel,idDesafio){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveChallengeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.time = tempo;
        info.timeType = tipo;
        info.gameId = idJogo;
        if (idNivel != null){
            info.levelId = idNivel;
            info.levelName = nomeNivel;
        }
        if (idDesafio != null){
            info.challengeId = idDesafio;
        }
        //info.gameType = 'ConclusionTime';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log(tempo);
    console.log(tipo);
    console.log(idJogo);
    if (idNivel != null){
        console.log(idNivel);
        console.log(nomeNivel);
    }
    if (idDesafio != null){
        console.log(idDesafio);
    }
}