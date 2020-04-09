function idadeMaior (idade){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(idade >= 18){
                resolve();
            }else{
                reject();
            }
        }, 5000);
    });
}

idadeMaior(15).then(function(){
    console.log('Maior de 18');
}).catch(function(){
    console.log('Menor de 18');
});