function ex4() {

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
                        console.log('O usuário ' + userName + ' não existe dentro do GitHub.');
                    } else {
                        console.log('Erro.');
                    }
                }
            }
        });
    }

    myPromise('poliekos')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}