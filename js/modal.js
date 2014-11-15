/*
	modal.js
*/
$(function(){
	$.fn.extend({
		showModal:function(){
			$(this).addClass("active");
			$(this).find(".cs-modal_content").addClass("active");
		},
		hideModal:function(){
			$(this).find(".cs-modal_content").removeClass("active");
			var $that = $(this);
			setTimeout(function(){
				$that.removeClass("active");
			},500);
		},
	});
	$('[data-toggle="showModal"]').click(function(){
		var target = $(this).data("target");
		$(target).showModal();
	});
	$('[data-toggle="hideModal"]').click(function(){
		var target = $(this).data("target");
		$(target).hideModal();
	});
});