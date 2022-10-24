$(function(){
	
	$('#hideButton').click(function(){
		$('#celebs').hide()
	})
	$('#showButton').click(function(){
		$('#celebs').show()
	})
	$('#toggleButton').click(function(){
		$('#celebs').slideToggle(200)
	})
	
	//테이블의 내용 중 홀수행의 배경색 지정
	//$('#celebs table.data > tbody > tr:odd').css({'background' : 'blue'})
	$('#celebs table.data > tbody > tr:odd').addClass('table_striping')
	
	//마우스가 올라갔을떄 배경색이 바꾸고 다시 나왔을떄 원상복귀
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover')
	},function(){
		$(this).removeClass('td_mouseover')
	})
	
})