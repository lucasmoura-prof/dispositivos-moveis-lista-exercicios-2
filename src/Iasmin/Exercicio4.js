function repositorios(user){
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            for(var repos of response.data){
                console.log(repos.name);
            }
        })
        .catch(function(error){
            console.log("axios", error);
        });
}

repositorios('iasminqmoura');