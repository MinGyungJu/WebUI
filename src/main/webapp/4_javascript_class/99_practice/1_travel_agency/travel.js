window.onload = function(){
	
	var adult = document.frm.adult;
	var child = document.frm.child;
	var baby = document.frm.baby;
	
	adult.onchange = calc;
	child.onchange = calc;
	baby.onchange = calc;
	
	function calc(){
		frm.sum.value = adult.value*39000 + child.value*29000 +baby.value*19000;
	}
	var frm = document.getElementById('frm');
		//var inputs = document.querySelectorAll("input");
		
		frm.onsubmit=function(evt){
		
			evt.stopPropagation();
			evt.preventDefault();
			
			if(!frm.checkbox.checked){
				alert('반드시 입력해주셔야만 합니다.');
				return;
			}
			
			frm.submit();
		}
 					
 	}
	
	
	
	
