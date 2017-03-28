$(document).ready(function() {
var ticking = false,
				isFirefox = (/Firefox/i.test(navigator.userAgent)),
				isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
				scrollSensitivitySetting = 30,
				slideDurationSetting = 600,
				currentSlideNumber = 0,
				totalSlideNumber = $(".background").length;
		// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
		function parallaxScroll(evt) {
	  		if (isFirefox) {
		    	// DELTA FOR FIREFOX
		    	delta = evt.deltaY * (-120);
					console.log('FIREFOX DELTA', delta);

		  	} else if (isIe) {
		    	// DELTA FOR IE
		    	delta = -evt.deltaY;
		  	} else {
		    	// DELTA FOR OTHER BROWSERS
		    	delta = evt.wheelDelta;
		    	console.log('DELTA', delta);
		  	}

		  	if (ticking != true) {
		    	if (delta <= -scrollSensitivitySetting) {
			      	// Down scroll
			      	ticking = true;
		      		// if (currentSlideNumber !== totalSlideNumber - 1) {
	      			if (currentSlideNumber < totalSlideNumber - 1) {
		      			console.log('all good');
		        		currentSlideNumber ++;
		        		console.log('CURRENT SLIDE', currentSlideNumber);
		        		nextItem();
		      		}
		      		slideDurationTimeout(slideDurationSetting);
		    	}
		    	if (delta >= scrollSensitivitySetting) {
		      		// Up scroll
		      		ticking = true;
		      		if (currentSlideNumber !== 0) {
		        		currentSlideNumber --;
		      		}
		      		previousItem();
		      		slideDurationTimeout(slideDurationSetting);
		    	}
		  	}
		}

		// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
		function slideDurationTimeout(slideDuration) {
		  	setTimeout(function() {
		    	ticking = false;
		  	}, slideDuration);
		}

		// ------------- ADD EVENT LISTENER ------------- //
		var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
		window.addEventListener('wheel', throttle(parallaxScroll, 60), false);
		// window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

		// ------------- SLIDE MOTION ------------- //
		function nextItem() {
		  	var $previousSlide = $(".background").eq(currentSlideNumber - 1);
		  	$previousSlide.removeClass("up-scroll").addClass("down-scroll");
		}

		function previousItem() {
			var $currentSlide = $(".background").eq(currentSlideNumber);
			$currentSlide.removeClass("down-scroll").addClass("up-scroll");
		}

		function throttle(fn, threshold, scope) {
			console.log('throttle');
			console.log('THRESHOLD BEFORE', threshold);
			threshold || (threshold = 60);
			console.log('THRESHOLD', threshold);
			var last,
				deferTimer;
			return function () {
				var context = scope || this;
				var now = +new Date,
					args = arguments;
				if (last && now < last + threshold) {
					clearTimeout(deferTimer);
					deferTimer = setTimeout(function() {
						last = now;
						fn.apply(context, args);
					}, threshold);
				} else {
					last = now;
					fn.apply(context, args);
				}
			};
		}
});
