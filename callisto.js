$.fn.extend({
	/*のちのちにもう少しアニメーションをかける予定*/
	showModal:function(){
		$(this).addClass("active");
		$(this).find(".cs-modal_content").addClass("active");
	},
	hideModal:function(){
		$(this).find(".cs-modal_content").removeClass("active");
		$(this).removeClass("active");
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
	$('[data-type=btn]').click(function(){
		$(this).addClass("active").delay(300).removeClass("active");
	});
	/*data-type=sortableなモジュールの中身をソートできる*/
	$('[data-type=sortable]').attr("draggable",true)
		.each(function(){

		});
	var $current;
	var index = 0;
	$('[data-type=sortable]').each(function(){
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