
      $(window).load(function(){
       $(".header-area").sticky({ topSpacing: 0 });
	   
	  
	  
	   
	 $('body').scrollspy({
	  target: '.navbar-collapse',
	  offset: 95
	 })
	   
	   
	   
	       $('li.smooth-menu a').bind('click', function(event) {
     var $anchor = $(this);
	 var headerH = '30';

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
      }, 1200, 'easeTnOutExpo');
         event.preventDefault();
       

  });
	
	   
	   
			$('.parallax-bg, .top-area-bg').scrolly({bgParallax: true});   
	   
	         
	

      });
	 

	 
	 
