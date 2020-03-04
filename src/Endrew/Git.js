
setTimeout(() => {
    //para o ex anterior não vim dps desse
    console.log(" \n Exercicio 4 e 5");
    function Repositorio(User) {
        axios.get('https://api.github.com/users/' + User + '/repos')
            .then(function (response) {
                console.log("Carregando");
                for (P of response.data) {
                    console.log(P.name);
                }
                console.log("Carregado");
            })
            .catch(function (error) {
                if (error.message.includes('404')) {
                    console.log("Erro User não existe");
                }
            });
    }
    Repositorio('endrew166');
}, 5000);
