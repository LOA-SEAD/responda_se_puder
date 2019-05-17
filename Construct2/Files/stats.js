function sendData(pergunta,correta,nroPergunta,alternativas,escolhida,acertou,tamanho,nroFase,nomeNivel){
	var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveChallengeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.question = pergunta;
        info.correctAnswer = correta;
        info.challengeId = nroPergunta;
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

	console.log("sendData");
	console.log("Questão " + nroPergunta + ": " + pergunta);
	console.log("Resposta certa: " + correta);
	console.log("Alternativas: " + alternativas);
	console.log("Resposta submetida: " + escolhida);
    console.log("Acertou? " + acertou);
    console.log("Tamanho: " + tamanho);
    console.log("Fase " + nroFase + ": " + nomeNivel);

}

function sendRankingData(pontos){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveRankingStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveRankingStats"
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

    console.log("sendRankingData");
    console.log("Pontuação: " + pontos);

}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,nomeNivel,idDesafio){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/stats/saveTimeStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveTimeStats"
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

    console.log("sendPlaytimeData");
    console.log("Tempo: " + tempo + "s");
    console.log("Tipo: " + tipo);
    console.log("Nome do jogo: " + idJogo);
    if (idNivel != null){
        console.log("Nível " + idNivel + " - " + nomeNivel);
    }
    if (idDesafio != null){
        console.log("Desafio: " + idDesafio);
    }

}