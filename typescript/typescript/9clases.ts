(()=>{
    class Persona{
        nombre:string;
        apellido:string;
        edad:number;

        constructor(nombre:string,apellido:string,edad:number){
            this.nombre=nombre;
            this.apellido=apellido;
            this.edad=edad;
        }
    }
    
    class Persona2{
        constructor(
            public nombre:string,
            public apellido:string,
            public edad?:number){
        }
    }
    const p1:Persona= new Persona('juaco','luna',7);
    const p2:Persona2= new Persona('juaco','luna',7);

    console.log(p1);
})();