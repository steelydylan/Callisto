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