
$(function(){



	$( "#calc" ).on( "click", function(){

		var v = $("#q").val();
		
		// 数値と演算子、()以外が含まれると return
		if( !/^[\d\*\+\-\/\(\)$/.test(v) ) return; 
		$.ajax( {
			url : "http://allow-any-origin.appspot.com/http://www.google.com/search",
			data : {
				q : v
			}
		}).done( function(text){
			var re = /<h2\s+class=['"]?r['"]?[^>]*>(.*)<\/h2/i;
			var m = re.exec( text );

			if( m !== null ) alert(m[1]);
		});
	} );

});
