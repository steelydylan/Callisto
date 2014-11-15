/*
	carousel.js
*/
$(function(){
	$.fn.extend({
		/*のちのちにもう少しアニメーションをかける予定*/
		carousel:function(json){
			var json = json || {};
			json.items = json.items || 3;
			json.time = json.time || 60;
			var $that = $(this);
			$that.wrap("<div class='cs-slider-wrapper'></div>");
			$parent = $that.parent(".cs-slider-wrapper");
			var width = $parent.width();
			var itemWidth = parseInt(width / json.items);
			var $children = $that.children("li");
			$children.width(itemWidth);
			$that.width($children.length * itemWidth);
			var $btnWrapper = $("<div class='cs-slider-btn-wrapper'>");
			var cnt = Math.ceil($children.length / json.items);
			var $btn = $("<div class='cs-slider-btn'></div>");
			for(var i = 0; i < cnt; i++){
				var $tmp = $btn.clone()
				if(i == 0){
					$tmp.addClass('active');
				}
				$btnWrapper.append($tmp);
			}
			$parent.append($btnWrapper);
			$that.attr("data-items",json.items);
			$that.attr("data-time",json.time);
		},
	});
	$(window).resize(function(){
		$(".cs-slider").each(function(){
			var width = parseInt($(this).parent(".cs-slider-wrapper").width());
			var itemWidth = parseInt(width / parseInt($(this).data("items")));
			var $children = $(this).children("li");
			console.log(itemWidth);
			$children.width(itemWidth);
		});
	})
	$(document).on("click touchstart",".cs-slider-btn",function(){
		$(".cs-slider-btn").removeClass('active');
		$(this).addClass('active');
		var index = $(".cs-slider-btn").index(this);
		var $slider = $(this).parent().parent(".cs-slider-wrapper").children(".cs-slider");
		var itemWidth = $slider.children("li").width();
		var left = $slider.css("left") ==  "auto" ? 0 : parseInt($slider.css("left"));
		var offset = -left - (parseInt($slider.data("items")) * itemWidth * index);
		var time = $slider.data("time");
		var cnt = 0;
		var add = offset / parseInt(time);
		var interval = setInterval(function(){
			if(cnt <= time){
				x = left + offset*(cnt/time);
			}else{
				clearInterval(interval);
			}
			cnt++;
			$slider.css("left",x+"px");
		});
	});
});