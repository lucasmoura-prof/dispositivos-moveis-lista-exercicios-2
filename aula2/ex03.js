
function exercicio03 (idade) {
    setTimeout(function(){
        var promise = new Promise(function(resolve, reject){
            if (idade > 18) resolve();
            else reject();
        });
        promise.then(function(){
            console.log("Maior que 18");
        }).catch(function (){
            console.log("Menor que 18");
        });
    }, 3000);
}