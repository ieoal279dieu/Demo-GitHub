 $(function(){
 	
 	$('.noidungthe').addClass('noidungtheshow');
 	$('.gradiant').addClass('gradiantshow');

 	var thongbao = setInterval(function(){
 		$('.noidungthe').removeClass('noidungtheshow');
 		$('.gradiant').removeClass('gradiantshow');
 		clearInterval(thongbao);
 	},4000);

 	$('.buttonClick').click(function(event){
 		$('.noidungthe').addClass('noidungtheshow');
 		$('.gradiant').addClass('gradiantshow');

 	});
 	$('.buttonclose, .gradiant').click(function(event){
 		$('.noidungthe').removeClass('noidungtheshow');
 		$('.gradiant').removeClass('gradiantshow');
 	});

})  
 