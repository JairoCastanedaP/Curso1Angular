(function(){

    function saludar( nombre:string ) {
        console.table( 'Hola, ' + nombre ); // Hola Logan
    }
    const wolverine = {
        nombre: 'Logan'
    };
    saludar( wolverine.nombre);

    let mensaje:string='hola';
    let numero: number=123;
    let booleano:boolean=true;
    let hoy_Date=new Date();
    let bolstring:boolean|string;

    let cualquiercosa;


    cualquiercosa=mensaje;
    cualquiercosa= numero;
    cualquiercosa=booleano;
    cualquiercosa=hoy_Date;

    let spiderman={
        nombre:'Peter',
        edad:30
    };
    spiderman={
        nombre:'Juaco',
        edad:40
    }
    numero=123;


})();