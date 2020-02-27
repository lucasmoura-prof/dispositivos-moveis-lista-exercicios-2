function ex4() {
    console.clear();

    // Lista 2 - Exercício 4

    var cssEx = 'color: yellow; background-color: gray;';
    console.log('%c--------- Exercício 4 ---------', cssEx);

    var myPromise = function (userName) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('Get', 'https://api.github.com/users/' + userName + '/repos');
            xhr.send(null);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Carregando...');
                        var response = JSON.parse(xhr.responseText);
                        console.log('Repositórios de ' + userName + ':\n\n');
                        for (var reposit of response) {
                            console.log(reposit.name);
                        }
                        console.log('\nCarregado.');
                    } else if (xhr.status === 404) {
                        reject('O usuário ' + userName + ' não existe no GitHub.');
                    } else {
                        reject('Erro na requisição.');
                    }
                }
            }
            // Resolve -> função que será chamada se tiver sucesso
            // Reject -> função que será chamada se houver erros
        });
    }

    myPromise('DanGM96')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
