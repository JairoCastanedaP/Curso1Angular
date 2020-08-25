(function(){
 
    function activar( quien:string,  momento?:string,objeto:string='cálculo'){
        console.log(`${quien} estudia ${objeto} ${momento}`);
    }
    activar('gerardo','cálculo');
    activar('gerardo','álgebra');
    activar('gerardo','lenguajes',' juicioso');

})();