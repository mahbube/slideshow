(function($){
		$.extend($.fn,{
			fadeLoop :function(options,bg){

				options=$.extend({
					duration : 2500,
					delay : 6000,//it should be equal the duration of bg movement
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

				bg=$.extend({
						px1 : '0%',
						py1 : '80%',
						sx1 : '250%',
						sy1 : '250%',

						px2 : '0%',
						py2 : '40%',
						sx2 : '110%',
						sy2 : '110%',
				},bg);


				(nextPic=function(){
					
					pics.eq(indx).animate(fadeOut,options.duration,ease);
					indx=indx<plen-1?indx+1:0;
					
					pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
						bgPos(this,bg.px1,bg.py1,bg.sx1,bg.sy1);
						setTimeout(bgPos,'3000',this,bg.px2,bg.py2,bg.sx2,bg.sy2);
						//setTimeout(bgPos,'6000',this,'80%','20%','250%','250%');//use this line and plus 3000 to option.delay 

						temp=bg.py1;
						bg.py1=bg.px1;
						bg.px1=temp ;

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