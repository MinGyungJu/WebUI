$(function(){
	
	$('#bio h3').css({'cursor' : 'pointer'})
	
	$('#bio div').hide();
//	$('').show();
	
	//이름을 클릭하면 해당 사진이 나올 수 있게
	/*
	$('#bio h3').hover(function(){
		
		$(this).next().show();
		},function(){
			$(this).next().hide();
		});
	*/
		
	$('#bio h3').mouseover(function(){	
		
	$(this).next().animate({'height' : 'toggle'},
	 2000, 'easeOutBounce')
	
	});
	
	//$('#bio h3').click(function(){	
	//$(this).next().toggle();
	//})
	
})