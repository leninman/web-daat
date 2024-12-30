$(document).ready(function () {


	let language = "textos-span";
	let stickyM = "spanish-sticky";
	let mainMenu = "spanish";
	let menuHamburguesa = "mHSpanish";
	let langSpaEng = "langSpanish";
	let valida;
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	
	$('.menuHamburguesa ul .espn span').css('color', 'blue');


	checkMediaQuery();

	validaMediaQuery();

	// Escuchar el redimensionamiento de la ventana y ejecutar la función
	$(window).on('resize', function () {
		$('#imgCentral_').css({ 'display': 'none' });
		validaM();
		checkMediaQuery(); // Comprobar al redimensionar la ventana

	});




	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	animacionEterna = true;
	efectoEterno(); // Inicia la animación

	$('.textoSomos' + '.' + language).css({ 'display': 'block' });

	$('.textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
		.hide() // Oculta nuevamente para iniciar el fadeIn
		.fadeIn(2000);
	$('.textoTrabajamos' + '.' + language).css({ 'display': 'block' });

	$('.textoInnova' + '.' + language).css({ 'display': 'none' });
	$('.textoNorte' + '.' + language).css({ 'display': 'none' });

	$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
	$('.textoSitio' + '.' + language).css({ 'display': 'none' });

	$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

	$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
	$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

	$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
	$('.textoServicios' + '.' + language).css({ 'display': 'none' });


	$('li .fa-circle').on('click', function () {
		// Detiene todas las animaciones en curso para los elementos #imgEquipo1 y #imgEquipo2
		$('#imgEquipo1').stop(true, true);
		$('#imgEquipo2').stop(true, true);

		$('.textoSomos' + '.' + language).stop(true, true);

		$('.textoEquipo' + '.' + language).stop(true, true);

		$('.textoTrabajamos' + '.' + language).stop(true, true);

		$('.textoInnova' + '.' + language).stop(true, true);
		$('.textoNorte' + '.' + language).stop(true, true);

		$('.textoDiseña' + '.' + language).stop(true, true);
		$('.textoSitio' + '.' + language).stop(true, true);
		
		$('.textoAdaptado' + '.' + language).stop(true, true);

		$('.textoSoluciones' + '.' + language).stop(true, true);
		$('.textoNecesidades' + '.' + language).stop(true, true);

		$('.textoOfrecemos' + '.' + language).stop(true, true);
		$('.textoServicios' + '.' + language).stop(true, true);


	});



	$('.spa').on('click', function () {


		$('#spanish .listMenu').css('display', 'block');
		$('#spanish .listMenu').css('display', 'flex');
		$('#spanish-sticky .listMenu').css('display', 'block');
		$('#spanish-sticky .listMenu').css('display', 'Flex');

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
		langSpaEng = "langSpanish";
		language = "textos-span";
		stickyM = "spanish-sticky";
		mainMenu = "spanish";

		if ($(window).scrollTop() > 1) {

			$('#' + mainMenu).hide();
			$('#english-sticky').css('display', 'none');
			$('#' + stickyM).css('display', 'block');
			$('#spanish-sticky .listMenu').css('background', 'white');

		}

		nextSlider();


	});


	$('.eng').on('click', function () {


		$('#english .listMenu').css('display', 'block');
		$('#english .listMenu').css('display', 'flex');
		$('#english-sticky .listMenu').css('display', 'block');
		$('#english-sticky .listMenu').css('display', 'Flex');

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
		langSpaEng = "langEnglish";
		language = "textos-eng";
		stickyM = "english-sticky";
		mainMenu = "english";


		if ($(window).scrollTop() > 1) {

			$('#' + mainMenu).hide();
			$('#' + stickyM).css('display', 'block');
			$('#spanish-sticky').css('display', 'none');
			$('#english-sticky .listMenu').css('background', 'white');

		}

		nextSlider();

	});

		  
	$('.menuHamburguesa ul .engl span').on('click', function () {


		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');
		$('.textos-span').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-eng";
		menuHamburguesa = "mHEnglish";
		mainMenu = "english";
		$('#mHSpanish').css('display', 'none');
		$('#mHEnglish').css('display', 'block');	
		$('.menuHamburguesa ul .engl span').css('color', 'blue');		
		$('.menuHamburguesa ul .espn span').css('color', '#676869');
		langSpaEng = "langEnglish";

		nextSlider();
	});


	
	$('.menuHamburguesa ul .espn span').on('click', function () {


		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');
		$('.textos-eng').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-span";
		menuHamburguesa = "mHSpanish";
		mainMenu = "spanish";
		$('#mHSpanish').css('display', 'block');
		$('#mHEnglish').css('display', 'none');		
		$('.menuHamburguesa ul .espn span').css('color', 'blue');		
		$('.menuHamburguesa ul .engl span').css('color', '#676869');
		
		langSpaEng = "langSpanish";

		nextSlider();
	});

	$('.vzla-l').on('click', function () {


		$('#spanish .listMenu').css('display', 'block');
		$('#spanish .listMenu').css('display', 'flex');
		$('#spanish-sticky .listMenu').css('display', 'block');
		$('#spanish-sticky .listMenu').css('display', 'Flex');

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

		langSpaEng = "langSpanish";
		language = "textos-span";
		stickyM = "spanish-sticky";
		mainMenu = "spanish";

		if ($(window).scrollTop() > 1) {
			$('#' + mainMenu).hide();
			$('#english-sticky').css('display', 'none');
			$('#' + stickyM).css('display', 'block');

		}


		nextSlider();

	});

	$('.usa-l').on('click', function () {


		$('#english .listMenu').css('display', 'block');
		$('#english .listMenu').css('display', 'flex');
		$('#english-sticky .listMenu').css('display', 'block');
		$('#english-sticky .listMenu').css('display', 'Flex');

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

		langSpaEng = "langEnglish";
		language = "textos-eng";
		stickyM = "english-sticky";
		mainMenu = "english";


		if ($(window).scrollTop() > 1) {
			$('#' + mainMenu).hide();
			$('#' + stickyM).css('display', 'block');
			$('#spanish-sticky').css('display', 'none');

		}


		nextSlider();

	});

	$('.vzla').on('click', function () {


		$('.spanish').css('display', 'block');
		$('.english').css('display', 'none');
		$('#spanish').css('display', 'block');
		$('#english').css('display', 'none');
		$('.textos-eng').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-span";
		menuHamburguesa = "mHSpanish";
		mainMenu = "spanish";
		$('#mHSpanish').css('display', 'block');
		$('#mHEnglish').css('display', 'none');		
		$('.menuHamburguesa ul .espn span').css('color', 'blue');		
		$('.menuHamburguesa ul .engl span').css('color', '#676869');

		nextSlider();

	})

	$('.usa').on('click', function () {

		$('.spanish').css('display', 'none');
		$('.english').css('display', 'block');
		$('.textos-span').css('display', 'none');
		$('.listMenu').css('display', 'none');
		language = "textos-eng";
		menuHamburguesa = "mHEnglish";
		mainMenu = "english";
		$('#mHSpanish').css('display', 'none');
		$('#mHEnglish').css('display', 'block');		
		$('.menuHamburguesa ul .engl span').css('color', 'blue');	
		$('.menuHamburguesa ul .espn span').css('color', '#676869');


		nextSlider();

	})

	function checkMediaQuery() {


		if (window.matchMedia('(max-width: 740px) and (orientation: portrait)').matches) {


			$('#' + langSpaEng).css('display', 'none');
			$('.stickyMenu' + '#' + stickyM).css('display', 'none');
			$('#english').css('display', 'none');
			$('#spanish').css('display', 'none');
			$('#cintillo_').css('display', 'none');
			$('#logo_').css('display', 'none');

			valida = true;

			$('#barras').css('display', 'block');


		} else {



			$('#' + langSpaEng).css('display', 'block');

			valida = false;

			$('#barras').css('display', 'none');

			checkMediaMenu();

			if ($('#' + mainMenu).length > 0) {

				$('#' + mainMenu).show();

			}

			$(window).on('scroll', function () {

				validaMediaQuery();

			});


		}
	}


	function validaMediaQuery() {


		if ($(window).scrollTop() > 1) {


			$('.stickyMenu' + '#' + stickyM).addClass('menu-fixed');
			$('.stickyMenu' + '#english-sticky').addClass('menu-fixed');
			$('#' + langSpaEng).css("position", "fixed");



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



	}

	function validaM() {



		if (menuHamburguesa == "mHSpanish") {

			$('.spa').css('color', 'blue');
			$('.eng').css('color', '#676869');


		} else {


			$('.spa').css('color', '#676869');
			$('.eng').css('color', 'blue');


		}



		if (langSpaEng == "langSpanish") {


			$('.menuHamburguesa ul .espn span').css('color', 'blue');			
			$('.menuHamburguesa ul .engl span').css('color', '#676869');
			stickyM = "spanish-sticky";
			mainMenu = "spanish";
			menuHamburguesa = "mHSpanish";			
			$('.mainMenu').css('display', 'block');
			$('#spanish .listMenu').css('display', 'block');
			$('#english .listMenu').css('display', 'none');
			$('#spanish .listMenu').css('display', 'flex');
			$('#spanish-sticky .listMenu').css('display', 'block');
			$('#spanish-sticky .listMenu').css('display', 'Flex');



		} else {


			$('.menuHamburguesa ul .engl span').css('color', 'blue');			
			$('.menuHamburguesa ul .espn span').css('color', '#676869');
			stickyM = "english-sticky";
			mainMenu = "english";
			menuHamburguesa = "mHEnglish";			
			$('.mainMenu').css('display', 'block');
			$('#english .listMenu').css('display', 'block');
			$('#spanish .listMenu').css('display', 'none');
			$('#english .listMenu').css('display', 'flex');
			$('#english-sticky .listMenu').css('display', 'block');
			$('#english-sticky .listMenu').css('display', 'flex');


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

	imgEquipo1.classList.add('animacion');

	$('.slider li').hide(); // Ocultamos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide	
	$('.pagination li:first').css({ 'color': '#0048FF' }); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones

	$('.pagination li').click(pagination);


	myTimer = setInterval(nextSlider, 5000);

	// FUNCIONES =========================================================

	function pagination() {



		clearInterval(myTimer);

		myTimer = setInterval(nextSlider, 5000);

		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada


		$('.slider li').hide(); // Ocultamos todos los slides			
		$('.slider li:nth-child(' + paginationPos + ')').show();
		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({ 'color': '#FFFFFF' });
		$(this).css({ 'color': '#0048FF' });

		imgPos = paginationPos;


		if (imgPos == 1) {

			$('#imgEquipo1').removeClass('hide').addClass('animacion');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoSomos' + '.' + language).css({ 'display': 'block' });
			$('.textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(2000);
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'block' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

		} else if (imgPos == 2) {

			$('#imgEquipo1').removeClass('animacion').addClass('hide');

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


			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });
			$('.textoInnova' + '.' + language).css({ 'display': 'block' });
			$('.textoNorte' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);




		} else if (imgPos == 3) {

			$('.textoSitio' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('#imgEquipo1').removeClass('animacion').addClass('hide');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });
			$('.textoDiseña' + '.' + language).css({ 'display': 'block' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'block' });



		} else if (imgPos == 4) {

			$('#imgEquipo1').removeClass('animacion').addClass('hide');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(500);

			$('.textoNecesidades' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

		} else if (imgPos == 5) {

			$('#imgEquipo1').removeClass('animacion').addClass('hide');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'block' });
			$('.textoServicios' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });


		}

		/******************************* */

	}

	function nextSlider() {

		$('#imgEquipo1').stop(true, true);
		$('#imgEquipo2').stop(true, true);
		$('.textoSomos' + '.' + language).stop(true, true);

		$('.textoEquipo' + '.' + language).stop(true, true);

		$('.textoTrabajamos' + '.' + language).stop(true, true);

		$('.textoInnova' + '.' + language).stop(true, true);
		$('.textoNorte' + '.' + language).stop(true, true);

		$('.textoDiseña' + '.' + language).stop(true, true);
		$('.textoSitio' + '.' + language).stop(true, true);
		
		$('.textoAdaptado' + '.' + language).stop(true, true);

		$('.textoSoluciones' + '.' + language).stop(true, true);
		$('.textoNecesidades' + '.' + language).stop(true, true);

		$('.textoOfrecemos' + '.' + language).stop(true, true);
		$('.textoServicios' + '.' + language).stop(true, true);


		clearInterval(myTimer);
		myTimer = setInterval(nextSlider, 5000);

		if (imgPos >= imgItems) { imgPos = 1; }
		else { imgPos++; }


		$('.pagination li').css({ 'color': '#FFFFFF' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#0048FF' });

		$('.slider li').hide(); // Ocultamos todos los slides		
		$('.slider li:nth-child(' + imgPos + ')').show();


		$('.pagination li').css({ 'z-index': 100 });




		if (imgPos == 1) {


			$('#imgEquipo2').css('opacity', '0');
			$('#imgEquipo1').removeClass('hide').addClass('animacion');

			$('.textoSomos' + '.' + language).css({ 'display': 'block' });

			$('.textoEquipo' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(2000);
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'block' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

		} else if (imgPos == 2) {



			$('#imgEquipo1').removeClass('animacion').addClass('hide');

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


			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'block' });

			$('.textoNorte' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);




		} else if (imgPos == 3) {


			$('#imgEquipo1').removeClass('animacion').addClass('hide');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoSitio' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'block' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'block' });



		} else if (imgPos == 4) {

			$('#imgEquipo1').removeClass('animacion').addClass('hide');

			$('#imgEquipo2').css('opacity', '0');

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'none' });
			$('.textoServicios' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(500);

			$('.textoNecesidades' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

		} else if (imgPos == 5) {

			$('#imgEquipo1').removeClass('animacion').addClass('hide');
			$('#imgEquipo2').css('opacity', '0');

			$('.textoOfrecemos' + '.' + language).css({ 'display': 'block' });

			$('.textoServicios' + '.' + language).css("display", "block") // Asegura que sea un bloque
				.hide() // Oculta nuevamente para iniciar el fadeIn
				.fadeIn(1000);

			$('.textoSomos' + '.' + language).css({ 'display': 'none' });
			$('.textoEquipo' + '.' + language).css({ 'display': 'none' });
			$('.textoTrabajamos' + '.' + language).css({ 'display': 'none' });

			$('.textoInnova' + '.' + language).css({ 'display': 'none' });
			$('.textoNorte' + '.' + language).css({ 'display': 'none' });

			$('.textoDiseña' + '.' + language).css({ 'display': 'none' });
			$('.textoSitio' + '.' + language).css({ 'display': 'none' });
			
			$('.textoAdaptado' + '.' + language).css({ 'display': 'none' });

			$('.textoSoluciones' + '.' + language).css({ 'display': 'none' });
			$('.textoNecesidades' + '.' + language).css({ 'display': 'none' });


		}

	}


	$('.cerrar span').on('click', function () {

		$('.menuHamburguesa').css('display', 'none');
		$('body').css('overflow-y', 'scroll');


	})

	$('#barras').on('click', function () {

		$('#' + menuHamburguesa).css('display', 'block');
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