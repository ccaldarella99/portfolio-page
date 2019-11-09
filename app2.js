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
	document.body.scrollTop = 0;
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