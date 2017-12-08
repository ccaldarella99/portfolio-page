var menuIsOpen=false;

//muss with this for header to stick to top after scrolling
//OR, listen to events to check position and change from
//  a class that is absolute to a class that is fixed
$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};
$('#yourDiv').followTo(250);


function topFunction(speedInSeconds) {
	'use strict';
	var numberOfPixelsFromTop = document.body.scrollTop;
	
	//get time-stamp
	var timeOffset = 1000;
	var moveSeconds = Math.ceil((speedInSeconds*timeOffset)/numberOfPixelsFromTop);
	if(moveSeconds==0) {moveSeconds==1;}
	var movePixels = Math.ceil(numberOfPixelsFromTop/(speedInSeconds*timeOffset));
	if(movePixels==0) {movePixels==1;}
	var timeStamp = Math.floor(Date.now());
	var timeIncrement = timeStamp + moveSeconds;
	var timeNow = Math.floor(Date.now());
	//alert ("Time Stamp: " + timeStamp + "\nTime Now: " + timeNow + "\nTime Stop: " + stopTime);
	while(document.body.scrollTop > 0) {
		timeNow = Math.floor(Date.now());
		if(timeNow > timeIncrement){
			timeIncrement += moveSeconds;
			window.scrollBy(0, (-1 * movePixels));
			//document.body.scrollTop -= movePixels;
			//document.documentElement.scrollTop = document.body.scrollTop;
		}
		//console.log(window.pageYOffset);
	}
	
	
	//calculate speed by time to complete animation
	//calculate intervals to move (number of) pixels by
	//while loop until predicted time is met
	//----->>>>Perhaps a for loop that uses calculations to move up - recursion???
	//if statement calculating the increments
	//when mod==0, scroll up by interval of pixels  <<<--- mod is too accurate, look to see if equals or greater than incrmeent of time
	//keep the last two lines below to make up any inaccuracies
	//seeing issue where it just takes the time with no action and moves to the top once time runs out.
	
	//document.body.scrollTop = 0;
	//document.documentElement.scrollTop = 0;
}

function moveMenu() {
	if(menuIsOpen == false)
	{
		document.getElementById('left-menu').classList.remove('hide-menu');
		document.getElementById('left-menu').classList.add('show-menu');
		document.getElementById('aboutme').classList.remove('content-left');
		document.getElementById('portfolio').classList.remove('content-left');
		document.getElementById('contactme').classList.remove('content-left');
		document.getElementById('aboutme').classList.remove('move-left');
		document.getElementById('portfolio').classList.remove('move-left');
		document.getElementById('contactme').classList.remove('move-left');
		document.getElementById('aboutme').classList.add('move-right');
		document.getElementById('portfolio').classList.add('move-right');
		document.getElementById('contactme').classList.add('move-right');
		document.getElementById('mobile').classList.remove('move-left');
		document.getElementById('mobile').classList.add('move-right');
		
		menuIsOpen = true;
	} else {
		document.getElementById('left-menu').classList.remove('show-menu');
		document.getElementById('left-menu').classList.add('hide-menu');
		document.getElementById('aboutme').classList.remove('move-right');
		document.getElementById('portfolio').classList.remove('move-right');
		document.getElementById('contactme').classList.remove('move-right');
		document.getElementById('aboutme').classList.add('move-left');
		document.getElementById('portfolio').classList.add('move-left');
		document.getElementById('contactme').classList.add('move-left');
		document.getElementById('mobile').classList.remove('move-right');
		document.getElementById('mobile').classList.add('move-left');
	
		menuIsOpen = false;
	}
}