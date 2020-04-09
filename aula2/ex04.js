function exercicio04 (url) {
    axios.get(url).then(function(response){
        console.log("Repositórios deste usuário: ");
        for(i of response.data){
            console.log(i.name);
        }
    })
    .catch(function(error){
        console.log(error);
    });    
}