
// FUNCTION  LIMPIAR
function functionLimpiarCuadrado(){
   
    document.getElementById('resultadotArea1').innerHTML = '';
    document.getElementById('valorCuadrado').value = '';
}
function functionLimpiarRectangulo(){
    document.getElementById('resultadotArea4').innerHTML = '';
    document.getElementById('baseRectangulo').value = '';
    document.getElementById('alturaRectangulo').value = '';
  
}
function functionLimpiarTrianguloRectangulo(){
    document.getElementById('resultadotArea2').innerHTML = '';
    document.getElementById('baseTrianguloRectangulo').value = '';
    document.getElementById('alturaTrianguloRectangulo').value = '';
  
}
function functionLimpiarIsosceles(){
   
    document.getElementById('resultadotArea3').innerHTML = '';
    document.getElementById('baseTrianguloIsosceles').value = '';
    document.getElementById('ladoTrianguloIsosceles1').value = '';
    document.getElementById('ladoTrianguloIsosceles2').value = ''; 
}
function functionLimpiarCirculo(){
   
    document.getElementById('resultadotArea5').innerHTML = '';
    document.getElementById('valorCirculo').value = '';
}
function functionLimpiarPerimetroCuadrado(){
   
    document.getElementById('resultadoPerimetroCuadrado').innerHTML = '';
    document.getElementById('valorPerimetroCuadrado').value = '';
}
function functionLimpiarPerimetroTrianguloEquilatero(){
   
    document.getElementById('resultadoPerimetroTrianguloEquilatero').innerHTML = '';
    document.getElementById('valorPerimetroTrianguloEquilatero').value = '';
}
function functionLimpiarPerimetroCirculo(){
   
    document.getElementById('resultadoPerimetroCirculo').innerHTML = '';
    document.getElementById('valorPerimetroCirculo').value = '';
}

function functionLimpiarAritmetico(){
    document.getElementById('resultadotAritmetico').innerHTML = '';
    document.getElementById('valorAritmetico').value = '';
}

function functionLimpiarGeometrico(){
    document.getElementById('resultadotGeometrico').innerHTML = '';
    document.getElementById('valorGeometrico').value = '';
}

function functionLimpiarModa(){
    document.getElementById('resultadoModa').innerHTML = '';
    document.getElementById('valorModa').value = '';
}

function functionLimpiarBtn(){
     document.getElementById('codlim').value='';
     document.getElementById('codlim1').value='';
     document.getElementById('cant1').value='';
     document.getElementById('puni1').value='';
     document.getElementById('descuentoA').value='';
     document.getElementById('importe1').value='';

     document.getElementById('codlimA').value='';
     document.getElementById('codlimB').value='';
     document.getElementById('cant2').value='';
     document.getElementById('puni2').value='';
     document.getElementById('descuentoB').value='';
     document.getElementById('importe2').value='';

     document.getElementById('total').value='';
}






// MANIPULANDO EL SELECT
function functionFigura(){
  
    let valor = document.querySelector('#selectFigura');
    
    let index = valor.options[valor.selectedIndex].value;
    console.log(index);
    
     // FIGURA CUADRADO
    if(index == 'cuadrado'){
       
        document.getElementById('section-trianguloRectangulo').style.display='none'
        document.getElementById('section-trianguloIsosceles').style.display='none'
        document.getElementById('section-rectangulo').style.display='none'
        document.getElementById('section-circulo').style.display='none'
        document.getElementById('section-PerimetroCuadrado').style.display='none'
        document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
        document.getElementById('section-perimetroCirculo').style.display='none'
        document.getElementById('section-descuento').style.display='none'
        document.getElementById('section-Aritmetico').style.display='none'
        document.getElementById('section-Geometrico').style.display='none'
        document.getElementById('section-Moda').style.display='none'


        document.getElementById('section-cuadrado').style.display='block'
        document.getElementById('resultadotArea1').innerHTML = '';
        document.getElementById('valorCuadrado').value = '';

    }else if(index == 'rectangulo'){
       
            document.getElementById('section-trianguloRectangulo').style.display='none'
            document.getElementById('section-trianguloIsosceles').style.display='none'
            document.getElementById('section-cuadrado').style.display='none'
            document.getElementById('section-circulo').style.display='none'
            document.getElementById('section-PerimetroCuadrado').style.display='none'
            document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
            document.getElementById('section-perimetroCirculo').style.display='none'
            document.getElementById('section-descuento').style.display='none'
            document.getElementById('section-Aritmetico').style.display='none'
            document.getElementById('section-Geometrico').style.display='none'
            document.getElementById('section-Moda').style.display='none'
    
    
            document.getElementById('section-rectangulo').style.display='block'
            document.getElementById('resultadotArea4').innerHTML = '';
            document.getElementById('baseRectangulo').value = '';
            document.getElementById('alturaRectangulo').value = '';
   
    }else if (index == 'triangulo_rectangulo'){
        document.getElementById('section-cuadrado').style.display='none'
        document.getElementById('section-trianguloIsosceles').style.display='none'
        document.getElementById('section-rectangulo').style.display='none'
        document.getElementById('section-circulo').style.display='none'
        document.getElementById('section-PerimetroCuadrado').style.display='none'
        document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
        document.getElementById('section-perimetroCirculo').style.display='none'
        document.getElementById('section-descuento').style.display='none'
        document.getElementById('section-Aritmetico').style.display='none'
        document.getElementById('section-Geometrico').style.display='none'
        document.getElementById('section-Moda').style.display='none'
        


        document.getElementById('section-trianguloRectangulo').style.display='block'
        document.getElementById('resultadotArea2').innerHTML = '';
        document.getElementById('baseTrianguloRectangulo').value = '';
        document.getElementById('alturaTrianguloRectangulo').value = '';
        

    }else if(index == 'triangulo_isosceles'){
        document.getElementById('section-trianguloRectangulo').style.display='none'
        document.getElementById('section-cuadrado').style.display='none'
        document.getElementById('section-rectangulo').style.display='none'
        document.getElementById('section-circulo').style.display='none'
        document.getElementById('section-PerimetroCuadrado').style.display='none'
        document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
        document.getElementById('section-perimetroCirculo').style.display='none'
        document.getElementById('section-descuento').style.display='none'
        document.getElementById('section-Aritmetico').style.display='none'
        document.getElementById('section-Geometrico').style.display='none'
        document.getElementById('section-Moda').style.display='none'


        document.getElementById('section-trianguloIsosceles').style.display='block'
        document.getElementById('resultadotArea3').innerHTML = '';
        document.getElementById('baseTrianguloIsosceles').value = '';
        document.getElementById('ladoTrianguloIsosceles1').value = '';
        document.getElementById('ladoTrianguloIsosceles2').value = '';
    
    }else if(index == 'circulo'){
       
        document.getElementById('section-trianguloRectangulo').style.display='none'
        document.getElementById('section-trianguloIsosceles').style.display='none'
        document.getElementById('section-rectangulo').style.display='none'
        document.getElementById('section-cuadrado').style.display='none'
        document.getElementById('section-PerimetroCuadrado').style.display='none'
        document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
        document.getElementById('section-perimetroCirculo').style.display='none'
        document.getElementById('section-descuento').style.display='none'
        document.getElementById('section-Aritmetico').style.display='none'
        document.getElementById('section-Geometrico').style.display='none'
        document.getElementById('section-Moda').style.display='none'


        document.getElementById('section-circulo').style.display='block'
        document.getElementById('resultadotArea1').innerHTML = '';
        document.getElementById('valorCuadrado').value = '';
    
    }else if(index == 'perimetroCuadrado'){
       
    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    document.getElementById('section-Moda').style.display='none'


    document.getElementById('section-PerimetroCuadrado').style.display='block'
    document.getElementById('resultadoPerimetroCuadrado').innerHTML = '';
    document.getElementById('valorPerimetroCuadrado').value = '';
    
    } else if(index == 'perimetroTrianguloEquilatero'){
       
    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    document.getElementById('section-Moda').style.display='none'


    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='block'
    document.getElementById('resultadoPerimetroCuadrado').innerHTML = '';
    document.getElementById('valorPerimetroCuadrado').value = '';

}else if(index == 'perimetroCirculo'){
       
    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    document.getElementById('section-Moda').style.display='none'


    document.getElementById('section-perimetroCirculo').style.display='block'
    document.getElementById('resultadotArea1').innerHTML = '';
    document.getElementById('valorCuadrado').value = '';

    }else if(index == 'descuento'){

    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    document.getElementById('section-Moda').style.display='none'


    document.getElementById('section-descuento').style.display='block'

}else if(index == 'promedioAritmetico'){

    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    document.getElementById('section-Moda').style.display='none'
    
    
    document.getElementById('section-Aritmetico').style.display='block'

}else if(index == 'promedioGeometrico'){

    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Moda').style.display='none'
    
    document.getElementById('section-Geometrico').style.display='block'

}else if(index == 'moda'){

    document.getElementById('section-trianguloRectangulo').style.display='none'
    document.getElementById('section-trianguloIsosceles').style.display='none'
    document.getElementById('section-rectangulo').style.display='none'
    document.getElementById('section-cuadrado').style.display='none'
    document.getElementById('section-PerimetroCuadrado').style.display='none'
    document.getElementById('section-PerimetroTrianguloEquilatero').style.display='none'
    document.getElementById('section-circulo').style.display='none'
    document.getElementById('section-perimetroCirculo').style.display='none'
    document.getElementById('section-descuento').style.display='none'
    document.getElementById('section-Aritmetico').style.display='none'
    document.getElementById('section-Geometrico').style.display='none'
    
    document.getElementById('section-Moda').style.display='block'

}


}
// ---------------------------------------------------------------------------------------------------------------


// AREA DE UN CUADRADO
function cuadrado(lado){
    valor = lado*lado

    return Number.parseFloat(valor).toFixed(2);
}

function functionCuadrado(){
    
    let valor = document.getElementById('valorCuadrado').value;

    if( isNaN(valor)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(valor == ''){
        alert ('Debes ingresar un Valor Numérico');

   }else{
    
        resultadotArea1.innerText =`El Área del Cuadrado es: ${cuadrado(valor)}`;
   } 
}

// ESTILO MOSTRANDO LA IMAGEN DEL CUADRADO
function functionCuadradoImagen(){
    swal({

        title: " ",
        text: "",
        icon: "./img/area-cuadrado.jpg",
        button: "OK",

    });
}


// AREA DE UN RECTANGULO

function Rectangulo(base,altura){
   
    let valor =  base * altura;

    return Number.parseFloat(valor).toFixed(2);
}

function functionRectangulo(){

    let base = document.getElementById('baseRectangulo').value;
    let altura = document.getElementById('alturaRectangulo').value; 

    if(base == '' || altura == ''){
        alert('Debes ingresar Valor Numérico');

    }else if( isNaN(base)){
        document.getElementById('baseRectangulo').autofocus='autofocus';
        alert('Debes Ingresar Valores Numéricos');
       

    }else if(isNaN(altura)){
        alert('Debes Ingresar Valores Numéricos');
        
    }else if(base == altura){
        
        resultadotArea4.innerText =`Has ingresado Valores Iguales esto es el Área de un cuadrdado: ${Rectangulo(base,altura)}`;

    }else{

        resultadotArea4.innerText =`El Área del Rectangulo es: ${Rectangulo(base,altura)}`;
    }
}

// ESTILO MOSTRANDO LA IMAGEN DEL RECTANGULO
function functionRectanguloImagen(){
    swal({

        title: " ",
        text: "",
        icon: "./img/formula-de-area-de-un-rectangulo.png",
        button: "OK",

    });
}

// AREA DE UN TRIANGULO RECTANGULO
function trianguloRectangulo(base,altura){
    let valor = ((base*altura)/2);

    return Number.parseFloat(valor).toFixed(2);
} 

function functionTrianguloRectangulo(){

    let base = document.getElementById('baseTrianguloRectangulo').value;
    let altura = document.getElementById('alturaTrianguloRectangulo').value;

    if( isNaN(base) || isNaN(altura)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(base == '' || altura == ''){
         alert ('Debes ingresar Valor Numérico');

    }else{  
         resultadotArea2.innerText =`El Área del Triangulo Rectangulo es: ${trianguloRectangulo(base,altura)}`;
    } 
 }

// ESTILO MOSTRANDO LA IMAGEN DEL TRIANGULO RECTANGULO
function functionTrianguloRectanguloImagen(){
    swal({

        title: " ",
        text: "",
        icon: "./img/area-triangulo-rectangulo.jpg",
        button: "OK",

    });
}


 // AREA DE UN TRIANGULO ISOSCELES
function trianguloIsosceles(base,lado){

    let num = ((base * (Math.sqrt((Math.pow(lado,2))-(Math.pow((base/2),2)))))/2);

    return Number.parseFloat(num).toFixed(2); 
} 

function alturaIsoscles(base,lado){

    let num = Math.sqrt((Math.pow(lado,2))-(Math.pow((base/2),2)));

    return Number.parseFloat(num).toFixed(3);
}

function functionTrianguloIsosceles(){

    let base = document.getElementById('baseTrianguloIsosceles').value;
    let lado1 = document.getElementById('ladoTrianguloIsosceles1').value;
    let lado2 = document.getElementById('ladoTrianguloIsosceles2').value;

    if( isNaN(base) || isNaN(lado1) || isNaN(lado2) ){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(base  == '' || lado1 == '' || lado2 == ''){
         alert ('Debes ingresar Valor Numérico');
         
     }else if(lado1 != lado2){
          alert ('Para ser un triangulo Isósceles debes tener los dos lados iguales');

    }else if(lado1 == lado2 &&  base == lado1){

        alert ('Para ser un triangulo Isósceles debes tener solo los dos lados iguales');
   
   }else{
     
         resultadotArea3.innerText =`El Área del Triangulo Isósceles es: ${trianguloIsosceles(base,lado1)}  y su altura es ${alturaIsoscles(base,lado1)}`;
    } 
 }

// ESTILO MOSTRANDO LA IMAGEN DEL TRIANGULO ISOSCELES
function functionTrianguloIsoscelesImagen(){
    swal({

        title: " ",
        text: "",
        icon: "./img/area-triangulo-isosceles.jpg",
        button: "OK",

    });
}


 // AREA DE UN CIRCULO
function circulo(radio){

    let valor = ((3.141592)*(Math.pow(radio,2)));

    return Number.parseFloat(valor).toFixed(2);
}

function functionCirculo(){
    
    let valor = document.getElementById('valorCirculo').value;

    if( isNaN(valor)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(valor == ''){
        alert ('Debes ingresar un Valor Numérico');

   } else{
    
        resultadotArea5.innerText =`El Área de la Circunferencia es: ${circulo(valor)}`;
   } 
}


// ESTILO MOSTRANDO LA IMAGEN DEL CIRCULO
function functionCirculoImagen(){
    swal({

        title: " ",
        text: "",
        icon: "./img/area-circulo.jpg",
        button: "OK",

    });
}

// ---------------------------------------------------------- PERIMETROS

// PERIMETRO DE UN CUADRADO
function perimetroCuadrado(lado){
    valor = 4*lado

    return Number.parseFloat(valor).toFixed(2);
}

function functionPerimetroCuadrado(){
    
    let valor = document.getElementById('valorPerimetroCuadrado').value;

    if( isNaN(valor)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(valor == ''){
        alert ('Debes ingresar un Valor Numérico');

   }else{
    
    resultadoPerimetroCuadrado.innerText =`El Perímetro del Cuadrado es: ${perimetroCuadrado(valor)}`;
   } 
}


// PERIMETRO DE UN TRIANGULO EQUILATERO

function perimetroTrianguloEquilatero(lado){
    valor = 3*lado

    return Number.parseFloat(valor).toFixed(2);
}

function functionPerimetroTrianguloEquilatero(){
    
    let valor = document.getElementById('valorPerimetroTrianguloEquilatero').value;

    if( isNaN(valor)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(valor == ''){
        alert ('Debes ingresar un Valor Numérico');

   }else{
    
    resultadoPerimetroTrianguloEquilatero.innerText =`El Perímetro del Cuadrado es: ${perimetroTrianguloEquilatero(valor)}`;
   } 
}

// PERIMETRO DE UN CIRCULO
function perimetroCirculo(radio){

    let valor = ((2)*(3.141592)*(radio));

    return Number.parseFloat(valor).toFixed(2);
}

function functionPerimetroCirculo(){
    
    let valor = document.getElementById('valorPerimetroCirculo').value;

    if( isNaN(valor)){
    
        alert('Debes Ingresar Valores Numéricos');

    }else if(valor == ''){
        alert ('Debes ingresar un Valor Numérico');

   } else{
    
        resultadoPerimetroCirculo.innerText =`El Perímetro de la Circunferencia es: ${perimetroCirculo(valor)}`;
   } 
}

// FORMULARIO DE DESCUENTO

// PRIMERA LINEA
function preciouno(cant,punit){

let descuento = document.getElementById('descuentoA').value;

    if(descuento == ' '){
        let valor = (cant * punit);
        return Number.parseFloat(valor).toFixed(2); 
}else{

     let dcuento = (cant*punit*(descuento/100));
     let valor = ((cant * punit) - dcuento);
     return Number.parseFloat(valor).toFixed(2); 
}
     
 }

function cant1(control){

    if(control.value != ''){
    let cant = document.getElementById('cant1').value;
    let punit = document.getElementById('puni1').value;
    let valor = preciouno(cant,punit);

    document.getElementById('importe1').value = valor;
  
    }
}

                


                function precio1(control){

                    if(control.value != ''){
                    let cant = document.getElementById('cant1').value;
                    let punit = document.getElementById('puni1').value;
                    let valor = preciouno(cant,punit);

                    document.getElementById('importe1').value = valor;
                   
                    }
                }

                                function importeuno(cant,punit,descuento){

                                    let dcuento = (cant*punit*(descuento/100));
                                    let valor = ((cant * punit) - dcuento);
                                    return Number.parseFloat(valor).toFixed(2); 
                                }
                                function descuento1(control){

                                    if(control.value != ''){
                                    let cant = document.getElementById('cant1').value;
                                    let punit = document.getElementById('puni1').value;
                                    let descuento = document.getElementById('descuentoA').value;
                                    let valor = importeuno(cant,punit,descuento);

                                    document.getElementById('importe1').value = valor;
                                   
                                
                                    }

                                }


// SEGUNDA LINEA
function preciodos(cant,punit){

    let descuento = document.getElementById('descuentoB').value;
    
        if(descuento == ' '){
            let valor = (cant * punit);
            return Number.parseFloat(valor).toFixed(2); 
    }else{
    
         let dcuento = (cant*punit*(descuento/100));
         let valor = ((cant * punit) - dcuento);
         return Number.parseFloat(valor).toFixed(2); 
    }
         
     }
    
    function cant2(control){
    
        if(control.value != ''){
        let cant = document.getElementById('cant2').value;
        let punit = document.getElementById('puni2').value;
        
        document.getElementById('importe2').value = preciodos(cant,punit);
        }
    }
    
                    
    
    
                    function precio2(control){
    
                        if(control.value != ''){
                        let cant = document.getElementById('cant2').value;
                        let punit = document.getElementById('puni2').value;
                        
                        document.getElementById('importe2').value = preciouno(cant,punit);
                        }
                    }
    
                                    function importedos(cant,punit,descuento){
    
                                        let dcuento = (cant*punit*(descuento/100));
                                        let valor = ((cant * punit) - dcuento);
                                        return Number.parseFloat(valor).toFixed(2); 
                                    }
                                    function descuento2(control){
    
                                        if(control.value != ''){
                                        let cant = document.getElementById('cant2').value;
                                        let punit = document.getElementById('puni2').value;
                                        let descuento = document.getElementById('descuentoB').value;
    
                                        document.getElementById('importe2').value = importedos(cant,punit,descuento);
                                    
                                        }
    
                                    }
    
 function totalImporte(importe1,importe2){
     let valor = parseFloat(importe1) + parseFloat(importe2);

     return Number.parseFloat(valor).toFixed(2);
 }
                                    
function functionTotal(){
     
        let importe1 = document.getElementById('importe1').value;
        let importe2 = document.getElementById('importe2').value;

        if(importe2 ==''){
            document.getElementById('total').value =importe1

        }else if(importe1 ==''){
            document.getElementById('total').value =importe2
        }else {
            document.getElementById('total').value = totalImporte(importe1,importe2);
        }
    
}

// -------------------------------- CALCULAR PROMEDIOS -----------------------------

//    CALCULAR EL PROMEDIO ARITMETICO 


function functionAritmetico(){

    let suma = 0;
    let valor = document.getElementById('valorAritmetico').value;
    let cont = valor.length;
  
     
        for(let i=0; i<cont; i++){
          suma = suma + parseInt(valor[i]);
        
        }
        resultadotAritmetico.innerText =`La Suma de las cantidades es: ${suma}, el Número de cantidades es: ${cont} y su Promedio Aritmético es: ${Number.parseFloat(suma/cont).toFixed(2)}`;
    
}

//    CALCULAR EL PROMEDIO GEOMETRICO 


function functionGeometrico(){

    let mult = 1;
    let valor = document.getElementById('valorGeometrico').value;
    let cont = valor.length;
  
     
        for(let i=0; i<cont; i++){
          mult = mult * parseInt(valor[i]);
        
        }

        resultadotGeometrico.innerText =`La Multiplicación de los numeros es: ${mult}, el Número de cantidades es: ${cont} y su Promedio Geométrico es: ${Number.parseFloat(Math.pow(mult,1/cont)).toFixed(2)}`;
    
}

//    CALCULAR LA MODA 


function functionModa(){

    let cont = 1;
    let valor = document.getElementById('valorModa').value;

    let arrOriginal =[];
    let unicosElemen = [];
    let elemenRepetidos = [];
    let valorRepetido = [];
  
  
        for(let i=0; i<valor.length; i++){
         arrOriginal.push(valor[i]);
        }
        let ordenado = arrOriginal.sort();
        //let arreglar=[1,1,2,5,5,6,6,6];
       
        for(let y=0; y<ordenado.length; y++){
           if(ordenado[y+1] === ordenado[y]){
                
                valorRepetido.push(ordenado[y]);
                cont++;

           }else{
            unicosElemen.push(ordenado[y]);
            elemenRepetidos.push(cont);
            cont = 1;
           }
        }
           elemenRepetidos.reverse()
           unicosElemen.reverse();
        let mayor =0;
        let unicoElement =0;
        for(let z=0; z<elemenRepetidos.length; z++){
            if(elemenRepetidos[z]>mayor){
                  mayor = elemenRepetidos[z]
                  unicoElement = unicosElemen[z];
            }   
        }

        resultadoModa.innerText = ` La Moda es: ${unicoElement} y se repite ${mayor}`  

        // let Mayor = mayor;
        // let con = 1;
        // for(let m=0; m<elemenRepetidos; m++){
        //     if (mayor)
        // }

    //let repetido=[];

        // for(let j=0; j<unicosElemen.length;j++){
        //    if(unicosElemen[0] >= unicosElemen[j]){
        //     resultadoModa.innerText = `${unicosElemen[j]} y ${elemenRepetidos[j]} \n`;
        //    }
        // } 

        
        

        //elemenRepetidos.sort();

        //for(let j=0; j<unicosElemen.length; j++){
        //resultadoModa.innerText = `el valor ${unicosElemen[j]} se repite  ${elemenRepetidos[j]} veces '<br>'`;
       // }

        //  for(let z=0 ; z<elemenRepetidos.length; z++){
        //      if(elemenRepetidos[z+1] > elemenRepetidos[z] ){
        //         elemenRepetidos[z] = elemenRepetidos[z+1]
        //      }
        //      resultadoModa.innerText = elemenRepetidos[z] ;
        //  }
        //resultadoModa.innerText = elemenRepetidos.length ;




       

        
        // resultadotGeometrico.innerText =`La Multiplicación de los numeros es: ${mult}, el Número de cantidades es: ${cont} y su Promedio Geométrico es: ${Number.parseFloat(Math.pow(mult,1/cont)).toFixed(2)}`;
    
}