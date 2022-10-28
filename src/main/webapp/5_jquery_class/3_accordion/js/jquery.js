$(function(){
	
	$('.accordion').each(function(){
		
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		//첫번째꺼 열기
		allDd.first().show();
		//dt에 마우스 댔을때 손가락표시
		allDt.css({'cursor' : 'pointer'})
		//dt 각해당클릭시 해당글 나오게하기
		allDt.click(function(){
			//먼저 다 감춘다음
			allDd.hide();
			//해당하는거의 다음꺼(다음꺼 = 바로아래의 해당탭의 글)열기
			//$(this).next().show();
			
			//faedIn = 서서히 나옴, slideDown = 슬라이드처럼 수욱나옴, toggle = ? show랑 차이 안보임 비슷한듯
			$(this).next().toggle();
		})
		
	})
	
})