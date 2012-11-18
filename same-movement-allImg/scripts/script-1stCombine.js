(function($){
		$.extend($.fn,{
			fadeLoop :function(options){

				options=$.extend({
					duration : 2500,
					delay : 4000,
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



				(nextPic=function(){
					
					pics.eq(indx).animate(fadeOut,options.duration,ease);
					indx=indx<plen-1?indx+1:0;
					pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
						bgPos(pics.eq(indx),"0%" ,"0%" ,"110%" ,"110%");
						setTimeout(nextPic,options.delay);
					});

				})();
			}
		});
	})($)
	function bgPos(div,bgpX,bgpY,bgsX,bgsY){
		//var ani="'background-position':'"+bgpX+" "+bgpY+"' ,'background-size':'"+bgsX+" "+bgsY+"'" ;
		//return ani ;
		$(div).animate({
			"background-position":bgpX+" "+bgpY ,
			"background-size":bgsX+" "+bgsY
		},3000);
	}
	$(function(){
		//bgPos('#q > div',"0%","0%","250%","250%");
		//setTimeout(bgPo,3000);

		//bgPos('#q > div',"0%","0%","110%","110%");
		//bgPos('#q > div',"80%","20%","250%","250%")

		/*$('#q > div').animate({
			"background-position":'0% 80%' ,
			"background-size":'250% 250%' ,
		},3000,'',function(){
			$('#q > div').animate({
				"background-position":'0% 40%' ,
				"background-size":'110% 110%' ,
			},3000,'',function(){
				$('#q > div').animate({
					"background-position":'80% 20%' ,
					"background-size":'250% 250%' ,
				},3000)
			})
			
		})*/

		$('#q > div').fadeLoop();

		$('#q > div').animate({
			"background-position":'0% 80%' ,
			"background-size":'250% 250%' ,
		},3000,'',function(){
			$(this).animate({
				"background-position":'0% 40%' ,
				"background-size":'110% 110%' ,
			},3000)
		})
	});