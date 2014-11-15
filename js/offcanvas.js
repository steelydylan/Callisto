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