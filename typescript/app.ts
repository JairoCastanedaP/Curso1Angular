(()=>{
   
    const sumar=(a:number,b:number):number=>a+b;

    const nombre=():string=>"hola juaco";

    const obtenerSalario=():Promise<string>=>{
        return new Promise((resolve,reject)=>{
            resolve('Fernando');
        });
    }

    obtenerSalario().then(a=>console.log(a.toUpperCase()))

})();