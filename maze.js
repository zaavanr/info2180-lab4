 	var eCount=0;
 	window.onload= function(){
  		var bound1= document.getElementById('boundary1');
  		bound1.addEventListener('mouseover', function(){
  		bound1.setAttribute('class', ' boundary youlose');
  	})

  		
  		var allRed = document.querySelectorAll('.boundary');
  		for(var i=0; i<allRed.length; i++){
  			allRed[i].addEventListener('mouseover', function()
  			{
  				var allRed = document.querySelectorAll('.boundary');
  				for(var i=0; i<allRed.length-1; i++){
  					allRed[i].setAttribute('class', 'boundary youlose');
  			
  			}
  			})
  		}
  		console.log(eCount);

  		var winnings= document.getElementById('end');
  		if(eCount > 0){
  			alert('You Lose!');
  		}
  		else{
  			winnings.addEventListener('mouseover', function(){
  				alert('You Win!');
  			})
  		}
  	}

