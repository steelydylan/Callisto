$.fn.extend({
	/*のちのちにもう少しアニメーションをかける予定*/
	showModal:function(){
		$(this).show("fast");
	},
	hideModal:function(){
		$(this).hide("fast");
	},
});
$(function(){
	$('[data-toggle="showModal"]').click(function(){
		var target = $(this).data("target");
		$(target).showModal();
	});
	$('[data-toggle="hideModal"]').click(function(){
		var target = $(this).data("target");
		$(target).hideModal();
	});

	/*マテリアルデザインを適応したいボタンに付与すると実行される*/
	$('[data-type=cs-btn]').click(function(){
		$(this).addClass("active").delay(300).removeClass("active");
	});
});