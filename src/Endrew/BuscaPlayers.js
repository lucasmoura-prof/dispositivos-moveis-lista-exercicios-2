console.log(" \n Exercicio2");
function PesquisaId(id) {
    for (var P of players) {
        if (P.id === id) {
            console.log("ID encontrado," + id);
            return;
        }
    }
    console.log("Não Encontrou o id");
}
PesquisaId(2);
function PesquisaJogador(Jogador) {
    for (var P of players) {
        if (P.Jogador === Jogador) {
            console.log("Jogador encontrado," + Jogador);
            return;
        }
    }
    console.log("Não Encontrou o Jogador");
}
PesquisaJogador("Dan");
