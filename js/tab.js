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