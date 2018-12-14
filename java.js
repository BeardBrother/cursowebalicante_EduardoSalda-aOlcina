
		
	
		
		
		function aparecer_gears(num){
	var i;
	var person = document.getElementById("personajesgears" + num);
	for(i=1; i<=5; i++){
		if (i == num){
			person.style.display="block";
		}
		if (i != num){
			var person2 = document.getElementById("personajesgears"+ i);
			person2.style.display="none";
		}
	}
}
		
function validacion(){
	var valor =documen.getElementById("nombre").value;
	if( valor ==null || valor.length == 0 || /^\s+$/.test(valor) ){
		return false;
	}
	
}