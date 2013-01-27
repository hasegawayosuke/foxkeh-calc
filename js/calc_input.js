var calc_log = "";
var flag_point = false;
var flag_firstinput = true;

var mode_google = true;

$(function(){

	// Button down
	for(i=0;i<10;i++){
		$(('#btn'+i)).click(function(){
			// Number
			clear_input();
			calc_log = calc_log + $(this).attr("id").slice(3);
			$('#result').html(calc_log);
		})
	}
	// point(SHOUSU)
	$(('#btnPoint')).click(function(){
		if( !flag_point ){
			calc_log = calc_log + ".";
			$('#result').html(calc_log);
			flag_point = true;
		}
	})

	// multi(KAKEZAN)
	$(('#btnMultiple')).click(function(){
		calc_log = calc_log + "*";
		$('#result').html(calc_log);
		flag_point = false;
	})
	// div(WARIZAN)
	$(('#btnDivision')).click(function(){
		calc_log = calc_log + "/";
		$('#result').html(calc_log);
		flag_point = false;
	})
	// plus(TASHIZAN)
	$(('#btnPlus')).click(function(){
		calc_log = calc_log + "+";
		$('#result').html(calc_log);
		flag_point = false;
	})
	// minus(HIKIZAN)
	$(('#btnMinus')).click(function(){
		calc_log = calc_log + "-";
		$('#result').html(calc_log);
		flag_point = false;
	})
	// equal(KEISAN)
	$(('#btnEqual')).click(function(){
		//
		if( mode_google ){
			var ret_str = execute(calc_log);
		}else{
			calc_log = calc_log + "=";
			$('#result').html(calc_log);
			clear_input();			
		}
	})


	// clear(KESU)
	$(('#btnClear')).click(function(){
		calc_log = "";
		$('#result').html(calc_log);
		clear_input();
	})

	// invert(HANTEN)
	$(('#btnPlusMinus')).click(function(){
	})



});

function clear_input(){
	if( flag_firstinput ){
		calc_log = "";
		$('#result').html(calc_log);
		flag_firstinput = false;
		flag_point = false;
	}
}



function execute(v){
	// calc by goole	
	//if( !(/^[\d\*\+\-\/\(\)]$/.test(v)) ) return; 
	$.ajax( {
		url : "http://allow-any-origin.appspot.com/http://www.google.com/search",
		data : {
			q : v
		}
	}).done( function(text){
		var re = /<h2\s+class=['"]?r['"]?[^>]*>(.*)<\/h2/i;
		var m = re.exec( text );

		if( m !== null ){
			$('#result').html(m[1]);
			/*
			alert(m[1]);
			return m[1];
			*/
		};
	})
}