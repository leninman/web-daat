$(document).ready(function () {

	let language = "textos-span";
	let stickyM = "spanish-sticky";
	let mainMenu = "spanish";
	let menuHamburguesa = "mHSpanish";
	let langSpaEng = "langSpanish";


	animacionEterna = true;
	efectoEterno(); // Inicia la animación

	$('#textoSomos' + '.' + language).css({ 'display': 'block' });

	$('#textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
		.hide() // Oculta nuevamente para iniciar el fadeIn
		.fadeIn(2000);
	$('#textoTrabajamos' + '.' + language).css({ 'display': 'block' });

	$('#textoInnova' + '.' + language).css({ 'display': 'none' });
	$('#textoNorte' + '.' + language).css({ 'display': 'none' });

	$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
	$('#textoSitio' + '.' + language).css({ 'display': 'none' });
	$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

	$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
	$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

	$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
	$('#textoServicios' + '.' + language).css({ 'display': 'none' });


	// Ejecutar la función inmediatamente cuando se cargue la página

	checkMediaQuery(); // Comprobar al cargar la página

	valida;

	// Escuchar el redimensionamiento de la ventana y ejecutar la función
	$(window).on('resize', function () {
		$('#imgCentral_').css({ 'display': 'none' });
		checkMediaQuery(); // Comprobar al redimensionar la ventana
	});


	$('li .fa-circle').on('click', function () {
		// Detiene todas las animaciones en curso para los elementos #imgEquipo1 y #imgEquipo2
		$('#imgEquipo1').stop(true, true);
		$('#imgEquipo2').stop(true, true);

		$('#textoSomos' + '.' + language).stop(true, true);

		$('#textoEquipo' + '.' + language).stop(true, true);

		$('#textoTrabajamos' + '.' + language).stop(true, true);

		$('#textoInnova' + '.' + language).stop(true, true);
		$('#textoNorte' + '.' + language).stop(true, true);

		$('#textoDiseña' + '.' + language).stop(true, true);
		$('#textoSitio' + '.' + language).stop(true, true);
		$('#textoAdaptado' + '.' + language).stop(true, true);

		$('#textoSoluciones' + '.' + language).stop(true, true);
		$('#textoNecesidades' + '.' + language).stop(true, true);

		$('#textoOfrecemos' + '.' + language).stop(true, true);
		$('#textoServicios' + '.' + language).stop(true, true);


	});

	

	$('.spa').on('click', function () {

		console.log("Español");
		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');
		$('#spanish').css('display', 'block');
		$('#english').css('display', 'none');
		$('#langSpanish').css('display', 'block');
		$('#langSpanish').css('position', 'fixed');
		$('#langEnglish').css('display', 'none');
		$('.textos-eng').css('display', 'none');
		$('.spa').css('color', 'blue');
		$('.eng').css('color', '#595959');
		langSpaEng="langSpanish";
		language = "textos-span";
		stickyM = "spanish-sticky";
		mainMenu = "spanish";

		if ($(window).scrollTop() > 1) {

			$('#english-sticky').css('display', 'none');
			$('#' + stickyM).css('display', 'block');
			

		}

		nextSlider();


	});

	
	$('.eng').on('click', function () {

		console.log("Inglés");

		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');
		$('#spanish').css('display', 'none');
		$('#english').css('display', 'block');
		$('#langSpanish').css('display', 'none');
		$('#langEnglish').css('display', 'block');
		$('#langEnglish').css('position', 'fixed');
		$('.textos-span').css('display', 'none');
		$('.eng').css('color', 'blue');
		$('.spa').css('color', '#595959');
		langSpaEng="langEnglish";
		language = "textos-eng";
		stickyM = "english-sticky";
		mainMenu = "english";

			
		if ($(window).scrollTop() > 1) {

			$('#' + stickyM).css('display', 'block');
			$('#spanish-sticky').css('display', 'none');
					

		}

		nextSlider();

	});

	$('.menuHamburguesa ul #eng span').on('click', function(){

		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');			
		$('.textos-span').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-eng";
		menuHamburguesa = "mHEnglish";
		$('#mHSpanish').css('display','none');
		$('#mHEnglish').css('display','block');
		$('.menuHamburguesa ul #eng span').css('color','blue');
		$('.menuHamburguesa ul #esp span').css('color','#676869');
		
		nextSlider();
	});


	$('.menuHamburguesa ul #esp span').on('click', function(){

		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');		
		$('.textos-eng').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-span";
		menuHamburguesa = "mHSpanish";
		$('#mHSpanish').css('display','block');
		$('#mHEnglish').css('display','none');
		$('.menuHamburguesa ul #esp span').css('color','blue');
		$('.menuHamburguesa ul #eng span').css('color','#676869');
		
		nextSlider();
	});

	$('.vzla-l').on('click', function(){	
		
		console.log("vzla");

		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');
		$('#spanish').css('display', 'block');
		$('#english').css('display', 'none');
		$('#langSpanish').css('display', 'block');
		$('#langSpanish').css('position', 'fixed');		
		$('#langEnglish').css('display', 'none');
		$('.textos-eng').css('display', 'none');
		$('.spa').css('color', 'blue');
		$('.eng').css('color', '#595959');
		langSpaEng="langSpanish";
		language = "textos-span";
		stickyM = "spanish-sticky";
		mainMenu = "spanish";

		if ($(window).scrollTop() > 1) {

			$('#english-sticky').css('display', 'none');
			$('#' + stickyM).css('display', 'block');

		}

		nextSlider();

	});

	$('.usa-l').on('click', function(){

		console.log("usa");

		langSpaEng="langEnglish";
		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');
		$('#spanish').css('display', 'none');
		$('#english').css('display', 'block');
		$('#langSpanish').css('display', 'none');
		$('#langEnglish').css('display', 'block');
		$('#langEnglish').css('position', 'fixed');	
		$('.textos-span').css('display', 'none');
		$('.eng').css('color', 'blue');
		$('.spa').css('color', '#595959');
		
		language = "textos-eng";
		stickyM = "english-sticky";
		mainMenu = "english";

			
		if ($(window).scrollTop() > 1) {

			$('#' + stickyM).css('display', 'block');
			$('#spanish-sticky').css('display', 'none');

		}

		nextSlider();

	});

	$('#vzla').on('click', function(){

		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');	
		$('#spanish').css('display', 'block');
		$('#english').css('display', 'none');	
		$('.textos-eng').css('display', 'none');
		$('.listMenu').css('display', 'none');	
		language = "textos-span";
		menuHamburguesa = "mHSpanish";
		$('#mHSpanish').css('display','block');
		$('#mHEnglish').css('display','none');
		$('.menuHamburguesa ul #esp span').css('color','blue');
		$('.menuHamburguesa ul #eng span').css('color','#676869');
		
		nextSlider();

	})

	$('#usa').on('click', function(){

		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');	
		$('.textos-span').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-eng";
		menuHamburguesa = "mHEnglish";
		$('#mHSpanish').css('display','none');
		$('#mHEnglish').css('display','block');
		$('.menuHamburguesa ul #eng span').css('color','blue');
		$('.menuHamburguesa ul #esp span').css('color','#676869');
		
		nextSlider();

	})

	function checkMediaQuery() {


		if (window.matchMedia('(max-width: 740px) and (orientation: portrait)').matches) {


			$('#'+langSpaEng).css('display', 'none');
			$('.stickyMenu' + '#' + stickyM).css('display', 'none');
			$('#' + mainMenu).css('display', 'none');
			$('#cintillo_').css('display', 'none');
			$('#logo_').css('display', 'none');

			valida = true;

			$('#barras').css('display', 'block');


		} else {


			//console.log('La pantalla no cumple con la media query.');

			$('#'+langSpaEng).css('display', 'block');

			valida = false;

			$('#barras').css('display', 'none');

			checkMediaMenu();

			if ($('#' + mainMenu).length > 0) {

				$('#' + mainMenu).show();

			}

			$(window).on('scroll', function () {

				if ($(window).scrollTop() > 1) {

					console.log("pasa por aqui:::"+langSpaEng);

					$('.stickyMenu' + '#' + stickyM).addClass('menu-fixed');
					$('.stickyMenu' + '#english-sticky').addClass('menu-fixed');					
					$('#'+langSpaEng).css("position", "fixed");
					
				

					if (!valida) {

						
						$('.stickyMenu' + '#' + stickyM).show();

						$('#' + mainMenu).hide();

						$('#' + stickyM + ' ul').css({ 'background': 'white' });

						$('#' + stickyM + ' ul').css({ 'border-bottom': '1px solid #D1D1D1' });

						$('#english-sticky  ul').css({ 'background': 'white' });

						$('#english-sticky  ul').css({ 'border-bottom': '1px solid #D1D1D1' });

						$('#cintillo_').addClass('logo-fixed');

						$('#cintillo_').show()

						$('#logo_').addClass('logo-fixed');

						$('#logo_').show()

						cambiarImagenHover('img/linea_gris.png');

					}



				} else {


					$('.stickyMenu' + '#' + stickyM).addClass('menu-fixed');

					if (!valida) {

						$('.stickyMenu' + '#' + stickyM).hide();

						$('#' + mainMenu).show();


					}

					cambiarImagenHover('img/linea_blanca.png');


				}



			});
		}
	}


	function cambiarImagenHover(imagenUrl) {


		const estilo = document.createElement('style');
		estilo.innerHTML = `
            #mainMenu ul li a:hover::after, .stickyMenu ul li a:hover::after {
                background-image: url(${imagenUrl});
			
            }
        `;

		document.head.appendChild(estilo);


	}

	//////////////////////////////////////////////////////////////

	document.querySelectorAll('nav a').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
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

	/*$('#imgEquipo1').fadeIn(3000);//Realiza el efecto fundirse en la imgen Equipo1, la primera vez*/
	$('#imgEquipo1').animate({ 'opacity': '1' }, 1000);
	$('.slider li').hide(); // Ocultamos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide	
	$('.pagination li:first').css({ 'color': '#0048FF' }); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones

	$('.pagination li').click(pagination);
	/*$('.right span').click(nextSlider);*/
	/*$('.left span').click(prevSlider);*/


	myTimer = setInterval(nextSlider, 5000);

	// FUNCIONES =========================================================

	function pagination() {



		clearInterval(myTimer);

		myTimer = setInterval(nextSlider, 5000);

		//console.log('Entra por el pagination');

		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada


		$('.slider li').hide(); // Ocultamos todos los slides
		//$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado	
		$('.slider li:nth-child(' + paginationPos + ')').show();
		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({ 'color': '#FFFFFF' });
		$(this).css({ 'color': '#0048FF' });

		imgPos = paginationPos;


		//if (imgPos != 1) {

		//$('#imgEquipo1').css('opacity', '0');

		/*$('#imgEquipo1').hide();*/


		//} else {


		//$('#imgEquipo1').animate({ 'opacity': '1' }, 1000);


		/*$('#imgEquipo1').fadeIn(2500);*/
		//}


		//if (imgPos != 2) {

		/*$('#imgEquipo2').hide();	*/
		//$('#imgEquipo2').css('opacity', '0');


		//} else {

		/*$('#imgEquipo2').css('opacity', '1');*/


		/*$('#imgEquipo2').show();*/

		/*$('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"right",mode:"show"},2000, function(){*/

		/*$('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"left"},2000, function(){

			$('#imgEquipo2').fadeTo(200,0.50);
			$('#imgEquipo2').fadeTo(200,0.60);
			$('#imgEquipo2').fadeTo(200,1);

		  });	*/

		/*$('#imgEquipo2')
			.css({
				opacity: 0,
				position: 'absolute',
				right: '600px'
			})
			.animate({
				opacity: 1,
				right: '0px' // posición final en su lugar original
			}, 1000); 


		$('.pagination li').css({ 'z-index': 100 });*/



		//}

		if (imgPos == 1) {

			$('#imgEquipo1').animate({ 'opacity': '1' }, 1000);

			$('#imgEquipo2').css('opacity', '0');

			$('#textoSomos' + '.' + language).css({ 'display': 'block' });
			$('#textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(2000);
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'block' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

		} else if (imgPos == 2) {

			$('#imgEquipo1').css('opacity', '0');

			$('#imgEquipo2')
				.css({
					opacity: 0,
					position: 'absolute',
					right: '600px'
				})
				.animate({
					opacity: 1,
					right: '0px' // posición final en su lugar original
				}, 2000);


			$('.pagination li').css({ 'z-index': 100 });


			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'block' });
			$('#textoNorte' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);




		} else if (imgPos == 3) {

			$('#textoSitio' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('#imgEquipo1').css('opacity', '0');
			$('#imgEquipo2').css('opacity', '0');

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });
			$('#textoDiseña' + '.' + language).css({ 'display': 'block' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'block' });



		} else if (imgPos == 4) {

			$('#imgEquipo1').css('opacity', '0');
			$('#imgEquipo2').css('opacity', '0');

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(500);

			$('#textoNecesidades' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

		} else if (imgPos == 5) {

			$('#imgEquipo1').css('opacity', '0');
			$('#imgEquipo2').css('opacity', '0');

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'block' });
			$('#textoServicios' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });


		}

		/******************************* */

	}

	function nextSlider() {

		$('#imgEquipo1').stop(true, true);
		$('#imgEquipo2').stop(true, true);
		$('#textoSomos' + '.' + language).stop(true, true);

		$('#textoEquipo' + '.' + language).stop(true, true);

		$('#textoTrabajamos' + '.' + language).stop(true, true);

		$('#textoInnova' + '.' + language).stop(true, true);
		$('#textoNorte' + '.' + language).stop(true, true);

		$('#textoDiseña' + '.' + language).stop(true, true);
		$('#textoSitio' + '.' + language).stop(true, true);
		$('#textoAdaptado' + '.' + language).stop(true, true);

		$('#textoSoluciones' + '.' + language).stop(true, true);
		$('#textoNecesidades' + '.' + language).stop(true, true);

		$('#textoOfrecemos' + '.' + language).stop(true, true);
		$('#textoServicios' + '.' + language).stop(true, true);

		clearInterval(myTimer);
		myTimer = setInterval(nextSlider, 5000);

		if (imgPos >= imgItems) { imgPos = 1; }
		else { imgPos++; }


		$('.pagination li').css({ 'color': '#FFFFFF' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#0048FF' });

		$('.slider li').hide(); // Ocultamos todos los slides
		//$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
		$('.slider li:nth-child(' + imgPos + ')').show();

		if (imgPos != 1) {

			/*$('#imgEquipo1').hide();*/
			$('#imgEquipo1').css('opacity', '0');


		} else {

			/*$('#imgEquipo1').fadeIn(2500);*/
			$('#imgEquipo1').animate({ 'opacity': '1' }, 1000);
		}

		if (imgPos != 2) {

			/*$('#imgEquipo2').hide();*/
			$('#imgEquipo2').css('opacity', '0');


		} else {


			/*$('#imgEquipo2').show();*/

			/*$('#imgEquipo2').css("opacity", 0.2).effect("blind",{direction:"right",mode:"show"},2000, function(){	
				
				$('#imgEquipo2').fadeTo(200,0.50);
				$('#imgEquipo2').fadeTo(200,0.60);
				$('#imgEquipo2').fadeTo(200,1);

			  });*/

			$('#imgEquipo2')
				.css({
					opacity: 0,
					position: 'absolute',
					right: '600px'
				})
				.animate({
					opacity: 1,
					right: '0px' // posición final en su lugar original
				}, 2000);

			/*$('#imgEquipo2')
			.css({
				opacity: 0,           // Inicia con opacidad en 0
				width: '0',           // Ancho inicial en 0 para el efecto de brochazo
				overflow: 'hidden',   // Oculta el contenido que desborda mientras se expande
				whiteSpace: 'nowrap'  // Evita que el contenido se divida en múltiples líneas
			})
			.animate({
				width: '100%',       // Expande el ancho al 100% del contenedor
				opacity: 1           // Aumenta la opacidad a 1
			}, 2000);   */




			$('.pagination li').css({ 'z-index': 100 });

		}


		if (imgPos == 1) {


			$('#textoSomos' + '.' + language).css({ 'display': 'block' });

			$('#textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(2000);
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'block' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

		} else if (imgPos == 2) {


			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'block' });

			$('#textoNorte' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);




		} else if (imgPos == 3) {

			$('#textoSitio' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'block' });

			$('#textoAdaptado' + '.' + language).css({ 'display': 'block' });



		} else if (imgPos == 4) {

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('#textoServicios' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(500);

			$('#textoNecesidades' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

		} else if (imgPos == 5) {

			$('#textoOfrecemos' + '.' + language).css({ 'display': 'block' });

			$('#textoServicios' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('#textoSomos' + '.' + language).css({ 'display': 'none' });
			$('#textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('#textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('#textoInnova' + '.' + language).css({ 'display': 'none' });
			$('#textoNorte' + '.' + language).css({ 'display': 'none' });

			$('#textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('#textoSitio' + '.' + language).css({ 'display': 'none' });
			$('#textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('#textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('#textoNecesidades' + '.' + language).css({ 'display': 'none' });


		}

	}


	$('#cerrar span').on('click', function () {

		$('.menuHamburguesa').css('display', 'none');
		$('body').css('overflow-y', 'scroll');


	})

	$('#barras').on('click', function () {

		$('#'+menuHamburguesa).css('display', 'block');
		$('body').css('overflow', 'hidden');


	})

	$('.hamburguesaLi a').on('click', function () {

		$('.menuHamburguesa').css('display', 'none');
		$('body').css('overflow', 'scroll');


	})



	function checkMediaMenu() {


		if (window.matchMedia('(min-width: 100px) and (orientation: landscape)').matches) {

			$('.menuHamburguesa').css('display', 'none');
			$('#barras').css('display', 'none');
			$('body').css('overflow-y', 'scroll');


		}
	};


	window.addEventListener("resize", checkMediaMenu);



	function efectoEterno() {
		$('#imgCentral_').toggle('blind', { direction: 'down' }, 4000, function () {
			if (animacionEterna) {
				efectoEterno(); // Vuelve a llamar la función
			}
		});
	}





});