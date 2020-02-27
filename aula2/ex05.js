function exercicio05 (url) {
    console.log("Carregando...\n\n");
    axios.get(url).then(function(response){
        console.log("Carregado\n\nRepositórios deste usuário: ");
        for(i of response.data){
            console.log(i.name);
        }
    })
    .catch(function(error){
        console.log("Usuário não existe\n\n\n", error);
    });    
}