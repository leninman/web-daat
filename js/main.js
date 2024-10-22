$(document).ready(function(){	
	
	// Ejecutar la función inmediatamente cuando se cargue la página

    checkMediaQuery(); // Comprobar al cargar la página

 		valida;

// Escuchar el redimensionamiento de la ventana y ejecutar la función
$(window).on('resize', function() {
    checkMediaQuery(); // Comprobar al redimensionar la ventana
});

  
$('li .fa-circle').on('click', function() {			
	// Detiene todas las animaciones en curso para los elementos #imgEquipo1 y #imgEquipo2
	$('#imgEquipo1').stop(true, true);			
	$('#imgEquipo2').stop(true, true);

	console.log("pasa por aqui al hacer click 2")
  });
	


	function checkMediaQuery() {
	

		if (window.matchMedia('(max-width: 900px) and (orientation: portrait)').matches) {			
					
				
				$('#stickyMenu').css('display', 'none');
				$('#mainMenu').css('display', 'none');	
				$('#cintillo_').css('display','none');
				$('#logo_').css('display','none');
				
				valida=true;

				
		} else {

						
			console.log('La pantalla no cumple con la media query.');
			
			valida=false;
			
			if ($('#mainMenu').length > 0) {

				$('#mainMenu').show();

			}
						
			$(window).on('scroll', function () {

				if ($(window).scrollTop() > 1) {

					console.log('entra con el scroll');


					$('#stickyMenu').addClass('menu-fixed');

					console.log('valor de valida:'+ valida);

					if(!valida){

						$('#stickyMenu').show();

						$('#mainMenu').hide();	
						
						$('#stickyMenu ul').css({'background': 'white'});

						$('#stickyMenu ul').css({'border-bottom': '1px solid #D1D1D1'}); 			

						$('#cintillo_').addClass('logo-fixed');

						$('#cintillo_').show()

						$('#logo_').addClass('logo-fixed');

						$('#logo_').show()

						cambiarImagenHover('img/linea_gris.png');

					}
					
					
		
		} else {


			$('#stickyMenu').addClass('menu-fixed');

			if(!valida){

			$('#stickyMenu').hide();

			$('#mainMenu').show();	

			
			}	
			
			cambiarImagenHover('img/linea_blanca.png');


		}

		

	});
		}
	}
	

	function cambiarImagenHover(imagenUrl) {
		

		const estilo = document.createElement('style');
        estilo.innerHTML = `
            #mainMenu ul li a:hover::after, #stickyMenu ul li a:hover::after {
                background-image: url(${imagenUrl});
			
            }
        `;
	
        document.head.appendChild(estilo);
		
	
	}

	//////////////////////////////////////////////////////////////

	document.querySelectorAll('nav a').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
	
			// Obtener la ID de la sección y el nuevo nombre para la URL
			const targetId = this.getAttribute('href');
			const newUrl = this.dataset.url;
				
			// Hacer scroll a la sección correspondiente
			//document.querySelector(targetId).scrollIntoView({
			//behavior: 'smooth'
			//});

			const targetSection = document.querySelector(targetId);

			// Obtener las coordenadas de la sección
			const sectionPosition = targetSection.offsetTop;
	
			// Mover la página a la posición de la sección sin scroll suave
			window.scrollTo(0, sectionPosition);
	
	
			// Cambiar la URL sin recargar la página
			history.pushState(null, null, newUrl);
		});
	});

	////////////////////////////////////////////////////////////
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	/*for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} */
	//------------------------

	$('#imgEquipo1').fadeIn(3000);//Realiza el efecto fundirse en la imgen Equipo1, la primera vez
	$('.slider li').hide(); // Ocultamos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide	
	$('.pagination li:first').css({'color': '#0048FF'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	
	$('.pagination li').click(pagination);
	/*$('.right span').click(nextSlider);*/
	/*$('.left span').click(prevSlider);*/


	myTimer = setInterval(nextSlider, 5000);	

	// FUNCIONES =========================================================

	function pagination(){

		

		clearInterval(myTimer);
		
        myTimer = setInterval(nextSlider, 5000);

		console.log('Entra por el pagination');
				
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		
		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado	

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#FFFFFF'});		
		$(this).css({'color':'#0048FF'});

		imgPos = paginationPos;
	
		if(imgPos != 1){

			$('#imgEquipo1').hide();

		}else {
			
			$('#imgEquipo1').fadeIn(2500);
		}

		
		if(imgPos !=2){	
			
			$('#imgEquipo2').hide();	
			
		}else {		
			
			$('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"right",mode:"show"},2000, function(){		

				$('#imgEquipo2').fadeTo(200,0.50);
				$('#imgEquipo2').fadeTo(200,0.60);
				$('#imgEquipo2').fadeTo(200,1);

			  });				
		

			$('.pagination li').css({'z-index': 100});

			
		}

		
	
		/******************************* */

	}

	function nextSlider(){

		$('#imgEquipo1').stop(true, true);			
		$('#imgEquipo2').stop(true, true);

		clearInterval(myTimer);
        myTimer = setInterval(nextSlider, 5000);

		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

			
		$('.pagination li').css({'color': '#FFFFFF'});	
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#0048FF'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
		
		if(imgPos != 1){

			$('#imgEquipo1').hide();
			

		}else{

			$('#imgEquipo1').fadeIn(2500);
		}

		if(imgPos !=2){	
			
			$('#imgEquipo2').hide();	
			
			
		}else{

			
			$('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"right",mode:"show"},2000, function(){		

				
				$('#imgEquipo2').fadeTo(200,0.50);
				$('#imgEquipo2').fadeTo(200,0.60);
				$('#imgEquipo2').fadeTo(200,1);


			  });				
		

			$('.pagination li').css({'z-index': 100});

		}
	}

	


	

});