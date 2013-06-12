$(function(){

	$(".search-2011 input").focus(function(){
		$(".nav-2011").css("width", "775px");
			$(".search-2011 .search").css("color", "#747474");
				$(".search-2011 input").css("color", "#000");
	});
		$(".search-2011 input").blur(function(){
			$(".nav-2011").css("width", "840px");
				$(".search-2011 .search").css("color", "#FFFFFF");
					$(".search-2011 input").css("color", "#FFFFFF");
			
		});
			$(".search-2011 input").on("keypress", function(){
				if ($(this).val().length > 0){
					$(".suggest-2011").css("display", "block");
				}
				else{
					$(".suggest-2011").css("display", "none");
				}
			});
			$(".search-2011 input").on("focus", function(){
				if ($(this).val().length > 0){
					$(".suggest-2011").css("display", "block");
				}
				else{
					$(".suggest-2011").css("display", "none");
				}
			});
				$(".search-2011 input").on("blur", function(){
					$(".suggest-2011").css("display", "none");
				});

	$(".search-future input").focus(function(){
		$(".nav-future").css("width", "830px");
			$(".search-future .search").css("color", "#747474");
				$(".search-future input").css("color", "#000");
	});
		$(".search-future input").blur(function(){
			$(".nav-future").css("width", "905px");
				$(".search-future .search").css("color", "#f0f0f0");
					$(".search-future input").css("color", "#FFFFFF");
			
		});
			$(".search-future input").on("keypress", function(){
				if ($(this).val().length > 0){
					$(".suggest-future").css("display", "block");
				}
				else{
					$(".suggest-future").css("display", "none");
				}
			});
			$(".search-future input").on("focus", function(){
				if ($(this).val().length > 0){
					$(".suggest-future").css("display", "block");
				}
				else{
					$(".suggest-future").css("display", "none");
				}
			});
				$(".search-future input").on("blur", function(){
					$(".suggest-future").css("display", "none");
				});


	$(".search-ios7 input").focus(function(){
		$(".nav-ios7").css("width", "830px");
			$(".search-ios7").addClass("ios7-focus");
				$(".search-ios7 input").css("color", "#000");
	});
		$(".search-ios7 input").blur(function(){
			$(".nav-ios7").css("width", "900px");
				$(".search-ios7").removeClass("ios7-focus")
					$(".search-ios7 input").css("color", "#4e6dfe");
			
		});
			$(".search-ios7 input").on("keypress", function(){
				if ($(this).val().length > 0){
					$(".suggest-ios7").css("display", "block");
				}
				else{
					$(".suggest-ios7").css("display", "none");
				}
			});
			$(".search-ios7 input").on("focus", function(){
				if ($(this).val().length > 0){
					$(".suggest-ios7").css("display", "block");
				}
				else{
					$(".suggest-ios7").css("display", "none");
				}
			});
				$(".search-ios7 input").on("blur", function(){
					$(".suggest-ios7").css("display", "none");
				});

	$(".block a").click(function(e){
		e.preventDefault();
	});


});
