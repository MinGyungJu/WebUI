$(function(){
	//1
	$('.year').text(new Date().getFullYear());
	$('.month').text(new Date().getMonth()+1);
	$('.date').text(new Date().getDate());
	// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 
		//다시 포커스가 없으면 다시 출력 (10점)
	$('#keyword').focus(function(){
		$(this).css("background-position","0 -500px");
	});
	$('#keyword').blur(function(){
		$(this).css("background-position","0 0");
	})
	// (3) 탭팬 구현 (10점)
	$('#tabmenu dt').click(function(){
		
		$('#tabmenu dd').hide();		
		$(this).next('dd').show();
		
		var src = $('#tabmenu dt a img');
		for(var i=0; i<src.length; i++){
			let eq = src.eq(i)
			eq.attr('src',eq.attr('src').replace('over','out'));
		}
		var img = $(this).find('img')
		img.attr('src',img.attr('src').replace('out','over'));
		
		});
	// (4)
      var slider = $('#best_bg>ul').bxSlider({
   			auto:true,
   		 	pager: true,
    		controls: true,
    		autoControls: false,
    		minSlides: 5,
    		maxSlides: 5,
    		moveSlides: 1,
    		slideWidth: 150,
    		slideMargin: 10,
    		margin: 0,
    		slidewidth : 170,
         });
      $('.prev_btn img').click(function(){
		slider.goToPrevSlide();
		})  
		$('.next_btn img').click(function(){
		slider.goToNextSlide();
		})  
		 $('#best_bg').css({ 'padding-left': '60px' }) // 이지스퍼블리싱 베스트 책
   $('#best_bg li').css({ 'padding-left': '5px' }) // 책 제목, 저자
	 //(5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임
	  $('.login_wrap > a > img').click(function(){
      $('#login_f').css("top","20px");      
   })
   
   $('.login_close_btn > a > img').click(function(){
      $('#login_f').css("top","-250px");
   })
    // 6. [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 
   $('#total_btn > a > img').click(function(){
      $('#total_menu').show();
   })
   
   $('#total_close > a > img').click(function(){
      $('#total_menu').hide();
   })
   // 7 . 추가기능 만들기
   	// (1). 줌인, 줌아웃 버튼
   	$(".zoom_in").click(function(){
       updateZoom(0.25);
      })   
  	 $(".zoom_out").click(function(){
       updateZoom(-0.25);
      })   
    zoomLevel = 1;
	var updateZoom = function(zoom) {
  	zoomLevel += zoom;
   	$('body').css({
					 zoom			 : zoomLevel, 
					 '-moz-transform': 'scale(' + zoomLevel + ')' 
				  });
	} 
	// (2) 인쇄하기 버튼 눌릴시 인쇄페이지나오기
	$('.print_btn').click(function(){
		window.print();
	})  
});