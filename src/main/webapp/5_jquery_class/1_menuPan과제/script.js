$(function() {

	var sum = 0;
	// select 선택했을때
	$('select').change(function() {

		var tr = $('<tr/>');

		//2 메뉴 이름 저장
		var name = $(this).parent().find('span:eq(0)').attr('value');
		
	
		//3 주문 개수 저장
		var count = $(this).val();

		// 카운트 0인거 리스트에 안올리는거 
		if (count == 0) {
			return;
		}
		//4 가격 저장 후 총합 계산
		var price = $(this).parent().find('span:eq(1)').attr('value');
		sum += count * price;
		$('#total').attr('value', sum);
		
		//각각의 메뉴명,값,가격 가져와서 변수에 저장
		var tdName = $('<td/>').text(name);
		var tdCount = $('<td/>').text(count);
		var tdPrice = $('<td/>').text(price * count);
		//취소버튼만들어서 변수에 저장
		var tdDel = $('<td><button class="del">취소</button></td>');
		tr.append([tdName, tdCount, tdPrice, tdDel])
		$('#listTable').append(tr)

		//table = document.getElementById('listTable');
		//tr2 = table.getElementsByTagName('tr')
		//td = table.getElements
		
		//for(let i =0; i<tr2.length; i++){
		//	if(name ==a[i].getElementsByTagName('td')[0]){
		//	alert('중복')
		//}
		//}


	})

	/* 주문내역의 삭제 버튼을 누를 경우 */
	$("#listTable").on("click", ".del", function() { //listTable안의 btn을 선택
		sum -= $(this).parent().parent().find('td:eq(2)').text();
		$('#total').attr('value', sum);
		$(this).parent().parent().remove();       //this(btn)의 부모(td)의 부모(tr)를 삭제
	});

	$('#btn').click(function() {
		alert('총액은 : ' +sum)
	})
})



