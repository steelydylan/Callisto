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
	$('[data-toggle="showTab"]').click(function(){
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
		order_o = $current.css('order'),
		order_t = $target.css('order');
		$current.css('order',order_t).animate({opacity:0},200).animate({opacity:1},200);
		$target.css('order',order_o).animate({opacity:0},200).animate({opacity:1},200);
	});
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
			},300);
		}
	});
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

