/*
	sortable.js
*/
$(function(){
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
		order_o = $current.css('order'),
		order_t = $target.css('order');
		$current.css('order',order_t).animate({opacity:0},200).animate({opacity:1},200);
		$target.css('order',order_o).animate({opacity:0},200).animate({opacity:1},200);
	});
});