(()=>{
    interface Persona{
        nombre:string;
        edad:number;
    }
    const enviarTarea=(persona:Persona)=>{
        console.log(`enviando a ${persona.nombre}`);
    }

    const estudiante:Persona={
        nombre:'juaco',
        edad:55
    }

    enviarTarea(estudiante);
})();