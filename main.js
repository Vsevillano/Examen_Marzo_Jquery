$(function(){
    
    $("h1").attr("id", "sevillano")
    .text("Examen jQuery. Marzo de 2018.Victoriano Sevillano Vega")
    .fadeOut("slow")
    .fadeIn()
    .on("click", function(){
        $(this).fadeOut().fadeIn();
    });
    
    $(".example textarea").val("Victoriano Sevillano Vega");
    
    /* Sube y baja el h3 de .domtree */
    let subeYBaja = function() {
        $(".domtree h3").slideUp().slideDown();
    }
    
    /* Esconde los elementos ul de .domtree y los muestra */
    let escondeElementosLista = function() {
        $(".domtree ul").fadeOut().fadeIn();
    }
    
    /* Sube y baja los elementos de la sublista de .domtree */
    let sublistaComoAcordeon = function () {  
        $(".domtree > ul > li > ul > li").slideUp().slideDown();
    }
    
    /* Anima el primer parrafo, ancho a 0 y alto a su estado normal.*/
    let soloElPrimerParrafito = function () {
        $(".domtree p").first().animate({
            width: 0
        }, 2000, function(){
            $(this).animate({
                width: 600
            },0).slideUp(0).fadeOut().slideDown();
        });
    }
    
    /* Pone en verde el fondo de los seleccionados */
    let ponFondoVerdeSeleccionados = function() {
        $(':selected').css({backgroundColor: "#0f0"})
    }
    
    /* Aplica la clase highlight (  background-color: #ff6;  color: #c00;  position: relative;) y animamos el margen. */
    let aplicaClaseYAnima = function() {
        $("code").addClass("highlight").animate({
            'margin': '0px 10px'
        }, 1000);
    }
    
    /* Solicitud Ajax normal y corriente */
    let solicitudAJAX = function () {
        $.get("peticion.txt", function( data ) {
            $(".example textarea").val( data );
        });
    }
    
    // Array con las funciones que vamos a implementar en el orden que queremos
    let funcionesClick = [solicitudAJAX, subeYBaja, escondeElementosLista, sublistaComoAcordeon, soloElPrimerParrafito, ponFondoVerdeSeleccionados, aplicaClaseYAnima]
    
    // Cogemos todos los inputs de tipo submit
    $submits = $('div.example :submit');
    
    // Y los recorremos asignando a cada boton la funcion correspondiente del array
    $submits.each(function(index, element){
        $(element).on('click', funcionesClick[index]);
    });
    
    // Creamos el plugin con las opciones por defecto
    jQuery.fn.plugin = function () {
        let color, porcentaje, numTamanio, rgba;
        let tamanioActual = $(this).height();
        let fontsizeActual = $(this).css('font-size');
        
        // Fondo amarillo, altura 0.4 y tamaño fuente 5 * tamanioActual
        if (arguments[0] == null) {
            porcentaje = '0.4';
            numTamanio = 5;
            rgba = 'rgba(255, 229,0,';

        }
        // Con argumentos, sera fondo rojo, altura 100% y fuente 6 * tamanioActual 
        else {
            let opciones = arguments[0];
            porcentaje = opciones.porc;
            numTamanio = opciones.numTamanio;
            rgba = opciones.rgba;
        }
        color = rgba + porcentaje + ')';
        
        return $(this).css({
            'background': color

        // Click aumenta altura y tamaño fuente
        }).on('click', function () {
            $(this).css({
                'height': tamanioActual * numTamanio + 'px',
                'font-size': '2em'
            });

        // dblclick Altura y tamaño original
        }).on('dblclick', function () {
            $(this).css({
                'height': tamanioActual + 'px',
                'font-size': fontsizeActual
            });
        });
    };
    
    // Asignamos al h3 de domtree sin parametros
    $('.domtree>h3').plugin();
    
    // Asignamos al div miId con los parametros altura 100%, tamaño * 6 y color rojo
    $('#miId').plugin({
        porc:'1',
        numTamanio:6,
        rgba:'rgba(255, 0, 0,',
    });
});