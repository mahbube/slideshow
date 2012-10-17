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