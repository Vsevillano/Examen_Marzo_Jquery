$(function(){
	
    jQuery.fn.plugin = function () {
        let color, porcentaje, numTamanio, rgba;
        let tamanioActual = $(this).height();
        let fontsizeActual = $(this).css('font-size');
        
        if (arguments[0] == null) {
            porcentaje = '0.4';
            numTamanio = 5;
            rgba = 'rgba(255, 229,0,';
        } else {
            let opciones = arguments[0];
            porcentaje = opciones.porc;
            numTamanio = opciones.numTamanio;
            rgba = opciones.rgba;
        }
        color = rgba + porcentaje + ')';
        
        return $(this).css({
            'background': color,
        }).on('click', function () {
            $(this).css({
                'height': tamanioActual * numTamanio + 'px',
                'font-size': '2em'
            });
        }).on('dblclick', function () {
            $(this).css({
                'height': tamanioActual + 'px',
                'font-size': fontsizeActual
            });
        });
    };
    
    $("h1").attr("id", "sevillano")
    .text("Examen jQuery. Marzo de 2018.Victoriano Sevillano Vega")
    .fadeOut("slow")
    .fadeIn()
    .on("click", function(){
        $(this).fadeOut().fadeIn();
    });
    
    $(".example textarea").val("Victoriano Sevillano Vega");
    
    
    let subeYBaja = function() {
        $(".domtree h3").slideUp().slideDown();
    }
    
    let escondeElementosLista = function() {
        $(".domtree ul").fadeOut().fadeIn();
    }
    
    let sublistaComoAcordeon = function () {  
        $(".domtree > ul > li > ul > li").slideUp().slideDown();
    }
    
    let soloElPrimerParrafito = function () {
        $(".domtree p").first().animate({
            width: 25
        }, 2000, function(){
            $(this).animate({
                opacity: 1,
                width: 600
            },0).slideUp(0).fadeOut().slideDown();
        });
    }
    
    let ponFondoVerdeSeleccionados = function() {
        $(':selected').css({backgroundColor: "#0f0"})
    }
    
    let aplicaClaseYAnima = function() {
        $("code").addClass("highlight").animate({
            'margin': '0px 10px'
        }, 1000);
    }
    
    let solicitudAJAX = function () {
        $.get("peticion.txt", function (data) {
            $(".example textarea").text(data);
        },"text");
    }
    
    let funcionesClick = [solicitudAJAX, subeYBaja, escondeElementosLista, sublistaComoAcordeon, soloElPrimerParrafito, ponFondoVerdeSeleccionados, aplicaClaseYAnima]
    
    $submits = $('div.example :submit');
    
    $submits.each(function(index, element){
        $(element).on('click', funcionesClick[index]);
    });
	
	$('.domtree>h3').plugin();
    $('#miId').plugin({
        porc:'1',
        numTamanio:6,
        rgba:'rgba(255, 0, 0,',
    });
    
});