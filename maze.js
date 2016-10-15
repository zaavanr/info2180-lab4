 	var eCount=0;
 	window.onload= function(){
  		var bound1= document.getElementById('boundary1');
  		bound1.addEventListener('mouseover', function(){
  			bound1.setAttribute('class', ' boundary youlose');
  		});
  		ex3();
  		ex2();
  		ex4();
  	}

  		function ex2(){
  			var allRed = document.querySelectorAll('.boundary');
  			for(var i=0; i<allRed.length; i++){
  				allRed[i].addEventListener('mouseover', function()
  				{

  					var allRed = document.querySelectorAll('.boundary');
  					for(var i=0; i<allRed.length-1; i++){
  							allRed[i].setAttribute('class', 'boundary youlose');
  						eCount++;			
  					}

  					if(eCount > 0)
  						{
  						 document.getElementById('status').innerHTML="You lose";
  						}
  				});
  			}
  		}
  		
  		function ex3(){
  			var winnings= document.getElementById('end');
  			winnings.addEventListener('mouseover', function(){
  				 	var response = document.getElementById("status");

  					if(eCount === 0){
  						document.getElementById('status').innerHTML="You Win";
  						}
  				
  				});

  			}


  		function ex4(){
  			var begin= document.getElementById("start");
  			var restart =document.querySelectorAll("div.boundary");
  			begin.addEventListener('click', function clearwall(){
  					for (var j = 0; j< restart.length; j++)
			{				
				restart[j].setAttribute('class','boundary');				
			} 
				eCount = 0;
				document.getElementById('status').innerHTML="Click Mouse on \"S\" to begin";

			});	

  		}

  	

