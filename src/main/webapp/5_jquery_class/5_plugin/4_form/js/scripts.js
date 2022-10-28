$(function(){
	$('#signup > form').validate({
		rules : {
				name : { required : true},
				email : { required : true,
						  email : true
						},
				website : {url :true},
				password : {minlength : 6, maxlength : 12},
				passconf : {equalTo : password}
				},
		success : function(label){
					label.addClass('valid');
					label.text('성공')
					}
	})
	
	
	$('.check-all').click(function(){
		/*var checked = $('.check-all').is(':checked');
		
		if(checked){
			$('.agree').prop('checked',true);
		}else{
			$('.agree').prop('checked',false);
		}
		*/
		$('.agree').prop('checked',$('.check-all').is(':checked'));	
	});
	
})