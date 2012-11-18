(function($){
		$.extend($.fn,{
			fadeLoop :function(options){

				options=$.extend({
					duration : 2500,
					delay : 6000,
					startIndex : -1,
					fadeFirstImage : true
				},options);

				var nextPic,
					pics    =this,
					indx    =options.startIndex,
					plen    =this.length,
					fadeIn  ={opacity:1},
					fadeOut ={opacity:0 ,'background-position':'',"background-size":""},
					ease = !!window.Zepto ? 'ease-in-out' : 'swing';

				pics.css(fadeOut);
				options.fadeFirstImage || pics.eq(0).css(fadeIn);

				(nextPic=function(){
					
					pics.eq(indx).animate(fadeOut,options.duration,ease);
					indx=indx<plen-1?indx+1:0;

					pics.eq(indx).animate(fadeIn,options.duration,ease,function(){

						bgPos(this,'0%','80%','250%','250%');
						setTimeout(bgPos,'3000',this,'0%','40%','110%','110%');
						//setTimeout(bgPos,'6000',this,'80%','20%','250%','250%');//use this line and plus 3000 to option.delay 

						setTimeout(nextPic,options.delay);
					});

				})();
			}
		});
	})($)

	function bgPos(div,bgpX,bgpY,bgsX,bgsY){
		$(div).animate({
			"background-position":bgpX+" "+bgpY ,
			"background-size":bgsX+" "+bgsY
		},3000);
	}

	$(function(){
		$('#q > div').fadeLoop();
	});