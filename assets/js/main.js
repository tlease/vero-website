/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$main = $('#main');

	// hide serviceDetail on load
	$('#servicesDetail div').hide();

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$menu
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// info expander
	var $expandToggle = $('#expandToggle');
	$expandToggle.on('click', function () {
		$('#servicesDetail div').toggle(250, function () {
			var visible = $('#servicesDetail div').is(':visible');
			if (visible) {
				$expandToggle.text('Hide Details');
			}
			else {
				$expandToggle.text('Read More');
			}
			$('html, body').animate({
				scrollTop: $('#servicesDetail').offset().top - 100
			}, 100);

		})
	})



})(jQuery);