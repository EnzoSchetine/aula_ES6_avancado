// Fetch
// Recebe dois parametros, o endereço, e o metodo que por padrão é get

/*fetch('/data.json') // Unico erro que o fetch manda para o catch é o erro de rede
    .then(responseStream =>{
        if(responseStream.status === 200) { // Por isso essa checagem é necessária
        return responseStream.json()
        }else{
            throw new Error('Request error');
        }
    })
    .then(data=> {
        console.log(data);
    }).catch(err => {
        console.log("Erro: ", err)
    });*/

// ES7 - Async / Await
// Async transforma função em promise
// Await aguarda resolução da promise

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('12345');
    }, 1000);
});
const simpleFunc = async() => {
    const data = await Promise.all([asyncTimer(), fetch('/data.json').then(resStream => // Executando em paralelo
    //const dataJSON = await fetch('/data.json').then(resStream => // Executanto sequencialmente 
        resStream.json()
    )]);
    return data;
};
simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });