(function(){
 
    const mifuncion =function(a:string){
        return a;
    }

    const mifuncionF =(a:string)=> a.toUpperCase();

    console.log(mifuncion('normal'));
    console.log(mifuncionF('flecha'));

    const sumarN = function(a:number,b:number){
        return a+b;
    }

    const sumaF=(a:number,b:number)=>a+b;

    console.log(sumarN(4,4));
    console.log(sumaF(4,4));

    const persona={
        nombre:'juaco',
        smash(){
            setTimeout(function() {
            }, 1000);
            console.log(`${this.nombre} smash!!!`);
        }
    }
    persona.smash();

})();