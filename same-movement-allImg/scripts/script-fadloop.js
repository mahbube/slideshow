(function($){
		$.extend($.fn,{
			fadeLoop :function(options){

				options=$.extend({
					duration : 2500,
					delay : 10000,
					startIndex : -1,
					fadeFirstImage : true
				},options);

				var nextPic,
					pics    =this,
					indx    =options.startIndex,
					plen    =this.length,
					fadeIn  ={opacity:1},
					fadeOut ={opacity:0},
					ease = !!window.Zepto ? 'ease-in-out' : 'swing';

				pics.css(fadeOut);
				options.fadeFirstImage || pics.eq(0).css(fadeIn);

				function ani1step(n){
					cls='step-'+n
					$('#q').removeClass() ;
					$('#q').addClass(cls);
				}

				

				(nextPic=function(){
					
					pics.eq(indx).animate(fadeOut,options.duration,ease);
					indx=indx<plen-1?indx+1:0;
					pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
						ani1step(2);
						setTimeout(function(){
							ani1step(3);
						},5000);
						
						setTimeout(nextPic,options.delay);
					});

				})();
			}
		});
	})($)
	
	$(function(){
		$('#q > div').fadeLoop();
	});