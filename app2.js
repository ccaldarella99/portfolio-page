var menuIsOpen=false;

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