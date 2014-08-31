$.fn.extend({
	/*のちのちにもう少しアニメーションをかける予定*/
	showModal:function(){
		$(this).addClass("active");
		$(this).find(".cs-modal_content").addClass("active");
	},
	hideModal:function(){
		$(this).removeClass("active");
		$(this).find(".cs-modal_content").removeClass("active");
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
	/*タブの切り替え*/
	$('[data-toggle=showTab').click(function(){
		$(this).addClass("active");
		$(this).siblings('.cs-tab_item').removeClass('active');
		var target = $(this).data("target");
		$(target).siblings('.cs-tabContainer').removeClass('active');
		$(target).addClass("active");
	});
	/*マテリアルデザインを適応したいボタンに付与すると実行される*/
	$('[data-type=btn]').click(function(){
		$(this).addClass("active").delay(300).removeClass("active");
	});
	var $current;
	var index = 0;
	$('[data-type=sortable]').attr("draggable",true).each(function(){
		$(this).css("order",index);
		index++;
	}).on('dragover',function(e){
		e.preventDefault();
		return false;
	}).on('drag',function(e){
		$current = $(this);
	}).on('drop',function(e){
		$target = $(this);
		//var $current = $(e.target);
		order_o = $current.css('order'),
		order_t = $target.css('order');
		$current.css('order',order_t).animate({opacity:0},200).animate({opacity:1},200);
		$target.css('order',order_o).animate({opacity:0},200).animate({opacity:1},200);
	});
});