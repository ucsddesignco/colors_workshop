$(document).ready(() => {
	const bgs = ['nav-bg-color', 'card-bg-color', 'front-bg-color', 'middle-bg-color', 'btn-bg-color'];
	const clr = ['nav-fg-color', 'card-fg-color', 'front-fg-color', 'btn-fg-color'];

	// Listen for color changes
	for (var i=0; i<bgs.length; i++) {
		$('#' + bgs[i]).on('input',function(e){
			$('.' + e.target.id).css('background-color', '#' + $(e.target).val());
  	});
		$('#' + clr[i]).on('input',function(e){
			$('.' + e.target.id).css('color', '#' + $(e.target).val());
  	});
	}

});
