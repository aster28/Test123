var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
	/******************************
	 ADD ANIMATION TO THE TEXT 
	******************************/
	var count = 0;
	var number = 10;
	
	var interval = setInterval(function(){
       count++;
	   if (count === number) { 
	   		clearInterval(interval);
			$('h1 ,h2').addClass('animationActive');		
		}
	}, 50);

	/*********************
	 SET ROW'S HEIGHT
	*********************/
	$.each($('.row'), function() { 
	   var h = $(this).attr("data-height");
	   $(this).css("height",h);
	});
	

	
	var count2 = 0;
	$(window).scroll(function(event){		

		var scrolled = $(this).scrollTop();		

		//If it reaches the top of the row, add an active class to it
		$(".row-nav").each(function(){
			
			var $this = $(this);
			
			if(scrolled >= $this.first().offset().top -120){
				$(".row-nav").removeClass("active");
				$this.addClass("active");	
				
				$(".animation").removeClass('animationActive');
				$this.find(".animation").addClass('animationActive');
						
			}
		});
		
		//when reaches the row, also add a class to the navigation
		for (key in sectionIds){
			if (scrolled >= sectionIds[key]){
				$(".nav-btn").removeClass("active");
				var c = $("[data-row-id="+key+"]");
				c.addClass("active");
				
				var i = c.index();
				$('#nav-indicator').css('left', i*100 + 'px');							
			}
		}	
		
		
		//Check if we've reached the top
	    if (scrolled > count2){  count2++;  } 
		else { count2--; }
	    
		count2 = scrolled;		
		
		if(count2 == 0){
			$('h1 ,h2').addClass('animationActive');
		}else{
			$('h1 ,h2').removeClass('animationActive');
		}
	
	});
	
	
	
	/**************
	 IN-NAVIGATION
	**************/
	$(".nav-btn").click(function(){		
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		var i = $(this).index();
		$('#nav-indicator').css('left', i*100 + 'px');			
		
		var name = $(this).attr("data-row-id");
		var id = "#" + name;
		var top = $(id).first().offset().top -60;			
		$('html, body').animate({scrollTop: top+'px'}, 300);
		
	});
	
	
	
	/*****
	 TOP
	******/
	$('#top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 300);
    });
