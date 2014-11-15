/*
	modal.js
*/
$(function(){
	$('[data-toggle="showModal"]').click(function(){
		var target = $(this).data("target");
		$(target).showModal();
	});
	$('[data-toggle="hideModal"]').click(function(){
		var target = $(this).data("target");
		$(target).hideModal();
	});
});