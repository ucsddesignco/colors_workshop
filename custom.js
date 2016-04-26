const bgs = ['nav-bg-color', 'card-bg-color', 'front-bg-color', 'middle-bg-color', 'btn-bg-color'];
const clr = ['nav-fg-color', 'card-fg-color', 'front-fg-color', 'btn-fg-color'];

function randomize() {
	for (var i=0; i<bgs.length; i++) {
		$('.' + bgs[i]).css('background-color', randomHex());
	}
	for (i=0; i<clr.length; i++) {
		$('.' + clr[i]).css('color', randomHex());
	}
}

function randomHex() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var sidebarShown = true;
function toggleSidebar() {
	if (sidebarShown == true) hideSidebar();
	else showSidebar();
}

function hideSidebar() {
	$("body").css('margin-left', '0');
	$(".sidebar").css('left', '-310px');
	sidebarShown = false;
}

function showSidebar() {
	$("body").css('margin-left', '300px');
	$(".sidebar").css('left', '0px');
	sidebarShown = true;
}

$(document).ready(() => {

	// Listen for color changes
	for (var i=0; i<bgs.length; i++) {
		$('#' + bgs[i]).spectrum({ 
			showInput: true,
			preferredFormat: "hex",
			allowEmpty:true,
    		showInitial: true,
    		showInput: true
		});
		$('#' + bgs[i]).on('move.spectrum',function(e, tinycolor){
			$('.' + e.target.id).css('background-color', tinycolor.toHexString());
  		});
  	}
  	for (i=0; i<clr.length; i++) {
		$('#' + clr[i]).spectrum({ 
			showInput: true,
			preferredFormat: "hex",
			allowEmpty:true,
		    showInitial: true,
		    showInput: true
		});
		$('#' + clr[i]).on('move.spectrum',function(e, tinycolor){
			$('.' + e.target.id).css('color', tinycolor.toHexString());
  		});
	}


	$("#random").click(function(e) {
		randomize();
	});

	$("#sidebar").click(function(e) {
		toggleSidebar();
	})
});

