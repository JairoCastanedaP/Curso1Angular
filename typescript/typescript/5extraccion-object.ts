(()=>{
    const jugador={
        nombre:'leonard',
        habilidad:'fuerza',
        edad:41
    }

    const{nombre,habilidad ,edad}=jugador;
    console.log(nombre);
    console.log(habilidad);
    console.log(edad);
////////////////////////////////////////////////
    const computador={
        referencia:'ubikjn',
        marca:'hp'
    }
    const extraer=(computador:any)=>{
        const{referencia,marca}=computador;
        console.log(referencia);
        console.log(marca);
    };

    extraer(computador);

    const personas:string[]=['juan','kiko','laura'];
    const[uno,dos,tres]=personas;

    console.log(uno);
    console.log(dos);
    console.log(tres);

    const extraer2=([juan,kiko,laura]:string[])=>{
        console.log(juan);
        console.log(kiko);
    };
    extraer2(personas);
})();