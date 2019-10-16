$(function () {

	$('#clients_slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 2,
		infinite: true,
		centerMode: true,
		draggable: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('#clients__nextButton').click(function () {
		$('#clients_slider').slick('slickNext');
	});
	$("#clients__prevButton").click(function () {
		$("#clients_slider").slick("slickPrev");
	});

	$(".dot").click(function () {
		var scrollTo = $(this).text();
		$('#clients_slider').slick('slickGoTo', scrollTo);
	});

	// remove active 
	$("#clients_slider").on("beforeChange", function () {
		var currentPos = $('#clients_slider').slick('slickCurrentSlide');
		var arrayOfItems = document.getElementsByClassName("dot");
		arrayOfItems[currentPos].classList.remove("dot--active");
	});

	// add ative
	$('#clients_slider').on('afterChange', function () {
		var currentPos = $('#clients_slider').slick('slickCurrentSlide');
		var arrayOfItems = document.getElementsByClassName("dot");
		arrayOfItems[currentPos].classList.add("dot--active");
	});

	$('#services_slider').slick({
		arrows: false,
		dots: false,
	});

	$(".services__dot").click(function () {
		var scrollTo = $(this).text();
		$('#services_slider').slick('slickGoTo', scrollTo);
	});
	$("#services_slider").on("beforeChange", function () {
		var currentPos = $('#services_slider').slick('slickCurrentSlide');
		var arrayOfItems = document.getElementsByClassName("services__dot");
		arrayOfItems[currentPos].classList.remove("services__dot--active");
	});
	$('#services_slider').on('afterChange', function () {
		var currentPos = $('#services_slider').slick('slickCurrentSlide');
		var arrayOfItems = document.getElementsByClassName("services__dot");
		arrayOfItems[currentPos].classList.add("services__dot--active");
	});

	$('#hamburger').on('click', function () {
		$('#header_menu').css('display', 'block');
		$('#header_menu').animate({
			'right': '0',
		}, function () {
			$('#hamburger').hide();
			$('#cross').show();
		});
	});
	$('#cross').on('click', function () {
		$('#header_menu').animate({
			'right': '-330',
		}, function () {
			$('#hamburger').show();
			$('#cross').hide();
			$('#header_menu').css('display', 'none');
		});

	});

});
