/*scroll entre secciones*/
				/*posicionReal = $("#contact").offset(); averiguar posicion real
				alert(posicionReal.top);
				alert(posicionReal.left);*/
				$("#gohome").on("click", function(){
    				var posicion = $("#home").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 0); 
					}, 2000); 
				});
				$("#name-home").on("click", function(){
    				var posicion = $("#home").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 0); 
					}, 2000); 
				});
				$("#link-aboutMe").on("click", function(){
    				var posicion = $("#aboutMe").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 684); 
					}, 2000); 
				});
				$("#link-skill").on("click", function(){
    				var posicion = $("#skill").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 2493); 
					}, 2000); 
				});
				$("#link-portfolio").on("click", function(){
    				var posicion = $("#portfolio").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 1287); 
					}, 1287);
				});
				$("#link-contact").on("click", function(){
    				var posicion = $("#contact").offset().top;
    				$("html, body").animate({
        				scrollTop: posicion
    				//}, 1890);
					}, 2000); 
				});