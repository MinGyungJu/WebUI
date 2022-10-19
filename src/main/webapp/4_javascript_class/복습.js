window.onload = function(){
	
	let a = document.getElementById('tbl');
	a.onclick = function(evt){
		let b = evt.target.getAttribute('data-price');
		alert(b);
	}
	
	//let a = document.getElementById();
	//a.onclick = function(){
	//	alert('ok')
	//}
	
}
