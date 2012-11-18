	function bgPos(div,bgpX,bgpY,bgsX,bgsY){
		$(div).animate({
			"background-position":bgpX+" "+bgpY ,
			"background-size":bgsX+" "+bgsY
		},3000);
	}
	$(function(){
		/*bgPos('#q > div','0%','80%','250%','250%');
		setTimeout(bgPos,'3000','#q > div','0%','40%','110%','110%');
		setTimeout(bgPos,'5000','#q > div','80%','20%','250%','250%');*/
		//OR
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