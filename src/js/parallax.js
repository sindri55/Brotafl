$(document).ready(function(){
	//initialise Stellar.js
    //$(window).stellar();
    var globalDiffY;
    var invert = false;
    var lastDiffY = 0;
    var fixed = false;

    $.stellar.positionProperty.bannerTransform = {
	  setPosition: function($el, x, startX, y, startY) {
	  	var transform = "";
	  	var diffY = y - startY;
	  	var diffX = x - startX;
	  	var scrollY = diffY - lastDiffY;

	  	var offset = 40;
	  	var offset2 = 335 + startY;

	  	console.log("y: " + y + ", startY: " + startY);
	  	//console.log("x: " + x + ", startX: " + startX);
	  	// console.log("diffX: " + diffX);
	  	// console.log("diffY: " + diffY);
	  	// console.log("scrollY " + scrollY);
	  	// console.log("lastDiffY " + lastDiffY);
	  	if((y - startY) >= 335){
	  		y = y * 2;
	  		fixed = true;
	  	} else {
	  		fixed = false;
	  	}

	  	if($el.hasClass('logo-img') && fixed !== true){
	  		if(globalDiffY === undefined) {
	  			globalDiffY = y - startY;
	  			console.log("globalDiffY " + globalDiffY);
	  		}
			var realDiffY = diffY - globalDiffY;
	  		var toScale = ((200 - realDiffY) / 250) + 0.4;
	  		
	  		transform += 'translate3d(' +
		  		(x - startX) + 'px, ' +
		  		((y - startY) - offset) + 'px, ' +
		  		'0)';

	  		transform += 'scale(' + toScale + ')';
	  	} else if ($el.hasClass('logo-img') && fixed === true){
	  		transform += 'translate3d(' +
		  		(x - startX) + 'px, ' +
		  		((y - startY) - offset2 - offset) + 'px, ' +
		  		'0)';
			transform += 'scale(0.36)';
	  	} else {
	  		transform += 'translate3d(' +
		  		(x - startX) + 'px, ' +
		  		((y - startY) - offset) + 'px, ' +
		  		'0)';
	  	}

	  	$el.css('transform', transform);

	  	lastDiffY = diffY;
	  }
	};

	var navbarLogo = $('.navbar .logo');
	var logo = $('.banner .logo-img');

	$.stellar({
		// Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

    	positionProperty: 'bannerTransform',

    	hideDistantElements: false,

    	//hideElement: function($elem) { $elem.css('opacity', '1'); },
  		//showElement: function($elem) { $elem.css('opacity', '1'); }
	});
});