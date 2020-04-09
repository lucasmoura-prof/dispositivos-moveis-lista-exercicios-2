function ex3() {

    var testeIdade = function (idade) {
        return new Promise(function (resolve, reject) {
            if (idade >= 18) {
                console.log('Maior ou igual a 18 anos.');
            } else {
                console.log('Menor que 18 anos.');
            }
        }
        );
    }
    console.log('Verificando a idade...');
    setTimeout(() => {
        testeIdade(18)
            .then(function (response) {
                console.log(response);
                console.log('\n');
            })
            .catch(function (error) {
                console.log(error);
                console.log('\n');
            });
    }, 5000);

}