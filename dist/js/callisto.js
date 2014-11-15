/*
  callisto.js authord by steelydylan
*/

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
			$(this).removeClass("active");
			$(this).find(".cs-modal_content").removeClass("active");
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
/*
	offcanvas.js
*/
$(function(){
	$("body").addClass("cs-offcanvasBody");
	$(".cs-right-open-btn,.cs-left-open-btn").click(function(){
		var $target = $($(this).attr("href"));
		var $that = $(this);
		if($that.hasClass("cs-right-open-btn")){
			$(".cs-offcanvasBody").addClass("rightActive");
		}else if($that.hasClass("cs-left-open-btn")){
			$(".cs-offcanvasBody").addClass("leftActive");
		}
		$target.addClass("active");
		var $sidebar = $target.find(".cs-offcanvas-sidebar");
		if($that.hasClass("cs-right-open-btn")){
			$sidebar.addClass("rightActive");
		}else{
			$sidebar.addClass("leftActive");
		}
		setTimeout(function(){
			$sidebar.addClass("active");
		},0);
	});
	$(".cs-offcanvas").click(function(e){
		if(!$(e.target).hasClass("cs-offcanvas-sidebar") && $(e.target).parent("cs-offcanvas-sidebar").length == 0){
				$(".cs-offcanvasBody").removeClass("rightActive");
				$(".cs-offcanvasBody").removeClass("leftActive");
				$(".cs-offcanvas-sidebar").removeClass("active");
			setTimeout(function(){
				$(".cs-offcanvas").removeClass("active");
				$(".cs-offcanvas-sidebar").removeClass('rightActive');
				$(".cs-offcanvas-sidebar").removeClass('leftActive');
			},210);
		}
	});
});
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
/*
	tab.js
*/
$(function(){
	/*タブの切り替え*/
	$('[data-toggle="showTab"]').click(function(){
		$(this).addClass("active");
		$(this).siblings('.cs-tab_item').removeClass('active');
		var target = $(this).data("target");
		$(target).siblings('.cs-tabContainer').removeClass('active');
		$(target).addClass("active");
	});
});
/*
	toggleMenu.js
*/
$(function(){
	$(".cs-toggleMenu_expandable").click(function(e){
		if($(e.target).hasClass("cs-toggleMenu_expandable")){
			var $that = $(this);
			var $ul = $that.find("ul");
			if(!$that.hasClass("active")){
				$that.addClass("active");
				$ul.slideToggle();
			}else{
				$ul.slideToggle(function(){
					$that.removeClass('active');
				})
			}
		}
	});
});