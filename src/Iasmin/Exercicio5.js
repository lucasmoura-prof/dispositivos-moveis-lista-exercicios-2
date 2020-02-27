function repositorios(user){
    console.log('Carregando...');
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            console.log('Carregado.');
            for(var repos of response.data){
                console.log(repos.name);
            }
        })
        .catch(function(error){
            console.log("Usuário inexistente.");
        });
}

repositorios('iasminqmoura');