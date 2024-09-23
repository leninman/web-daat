$(document).ready(function(){


	$(window).on('scroll', function () {

		if ($(window).scrollTop() > 1) {

			$('#stickyMenu').addClass('menu-fixed');

			$('#stickyMenu').show();

			$('#mainMenu').hide();

			$('#stickyMenu ul').css({'background': 'white'});

			$('#stickyMenu ul').css({'border-bottom': '1px solid #D1D1D1'}); 			

			$('#cintillo_').addClass('logo-fixed');

			$('#cintillo_').show()

			$('#logo_').addClass('logo-fixed');

			$('#logo_').show()

			cambiarImagenHover('img/linea_gris.png');


			
		} else {


			$('#stickyMenu').addClass('menu-fixed');

			$('#stickyMenu').hide();

			$('#mainMenu').show();		
			
			cambiarImagenHover('img/linea_blanca.png');


		}

	});


	function cambiarImagenHover(imagenUrl) {
		
		// Obtener todos los enlaces en #mainMenu y #stickyMenu
		//document.querySelectorAll('#mainMenu ul li a, #stickyMenu ul li a').forEach(function(link) {
			// Modificar el estilo usando JavaScript para cambiar el background-image
			//link.style.setProperty('--hover-image', `url(${imagenUrl})`);

		const estilo = document.createElement('style');
        estilo.innerHTML = `
            #mainMenu ul li a:hover::after, #stickyMenu ul li a:hover::after {
                background-image: url(${imagenUrl});
			
            }
        `;
	
        document.head.appendChild(estilo);
		//});
	
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
	/*$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);*/


	myTimer = setInterval(nextSlider, 5000);	

	// FUNCIONES =========================================================

	function pagination(){

		clearInterval(myTimer);
		
        myTimer = setInterval(nextSlider, 5000);

		console.log('Entr por el pagination');
		
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado	

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#FFFFFF'});		
		$(this).css({'color':'#0048FF'});

		imgPos = paginationPos;

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
				$('#imgEquipo2').fadeTo(200,0.80);
				$('#imgEquipo2').fadeTo(200,1);

			  });				
		

			$('.pagination li').css({'z-index': 100});

		}
		/******************************* */

	}

	function nextSlider(){

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

				$('#imgEquipo2').fadeTo(200,0.40);
				$('#imgEquipo2').fadeTo(200,0.80);
				$('#imgEquipo2').fadeTo(200,0.80);

			  });				
		

			$('.pagination li').css({'z-index': 100});

		}
	}

	/*function prevSlider(){

		
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#FFFFFF'});		
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#0048FF'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

		console.log("Se mete por prevSlider");

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
				$('#imgEquipo2').fadeTo(200,0.80);
				$('#imgEquipo2').fadeTo(200,1);

			  });				
		

			$('.pagination li').css({'z-index': 100});

		}

		/*if(imgPos == 1){

			$('#imgEquipo1').fadeIn(2500);

		}else{

			$('#imgEquipo1').hide();
		}

		if(imgPos ==2){	
			
				  $('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"right",mode:"show"},2000, function(){		

					$('#imgEquipo2').fadeTo(200,0.50);
					$('#imgEquipo2').fadeTo(200,0.80);
					$('#imgEquipo2').fadeTo(200,1);

				  });				
			

				$('.pagination li').css({'z-index': 100});
			
		}else{

			$('#imgEquipo2').hide();

		}
		
	}*/



	

});