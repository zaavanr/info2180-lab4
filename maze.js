 	window.onload= function(){
  		var bound1= document.getElementById('boundary1');
  		bound1.addEventListener('mouseover', function(){
  		bound1.setAttribute('class', ' boundary youlose');
  	})

  		var allRed = document.querySelectorAll('.boundary');
  		for(var i=0; i<allRed.length; i++){
  			allRed[i].addEventListener('mouseover', function(){
  			this.setAttribute('class', 'boundary youlose');
  			})
  		}
  	}

