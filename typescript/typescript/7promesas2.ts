(()=>{
    const retirarDinero=(montoRetirar:number):Promise<number>=>{
        let dineroActual=1000;
        return new Promise((resolve,reject)=>{
            
            if(montoRetirar>= dineroActual){
                reject('no hay suficientes fondos');
            }
            else{
                dineroActual-=montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero(2300)
    .then(dineroActual=>console.log(`me queda ${dineroActual}`))
    .catch(console.warn)
})();