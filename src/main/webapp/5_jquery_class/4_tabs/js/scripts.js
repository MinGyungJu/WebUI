$(function(){
	
	//최상위에있는 tabSet클래스를 저장
	var topDiv = $('.tabSet');
	//anchors 에 topDiv중에 a를 찾아저장
	var anchors = topDiv.find('ul.tabs a');
	//panelDiv = 내용문단 panels에 panel찾아 저장
	var panelDivs = topDiv.find('div.panels > div.panel')
	
	//panel 부분 보이게하고
	anchors.show();
	//내용부분 숨키고
	panelDivs.hide();
	
	//속성의 값까지 찾을땐 filter쓴다
	
	//개발자모드에 class에 on이 들어간 패널을 찾아서 lastAnchor에저장
	var lastAnchor = anchors.filter('.on');
	//a 에있는 href (ex panel1-1 )가져와서 저장
	// 그냥 lastAnchor.attr('href') 하면 문자열만 가져와주는데
	// 제이쿼리에서 객체화시키는방법은 $()하기
	var lastPanel = $(lastAnchor.attr('href'));
	
	lastPanel.show();
	
	anchors.click(function(){
		var currentAnchor = $(this);
		var currentPanel = $(currentAnchor.attr('href'));
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		lastAnchor = currentAnchor;
		lastPanel = currentPanel;
		
		
	})
	
	
	
})