function getLongestWord(){
	var str = document.getElementById('longWord').value;
	var separate = str.split(" ");
	var longestWord = '';
  
    for(var i = 0 ; i < separate.length ; i ++){
    	if(separate[i].length > longestWord.length){
        	longestWord = separate[i];
        }
    }
    document.getElementById('long').innerHTML = longestWord;
}

function getPrimeNumber(){
	var num = document.getElementById('num').value;
	if(!num){
		return;
	}else if(num < 0){
		alert("Please enter number not less than 0");
	}else{
		var count = 0 ;
		
	   	for (var i = 2; i < num; i++) {
	        if(num % i == 0){
	        	count = 1;
	        	break;   
	         }  	
	    }
	    
	    if(count == 1 || num < 2){
	    	document.getElementById('number').innerHTML= num + ' is NOT a PRIME number';
	    }else{
	    	document.getElementById('number').innerHTML= num +' is a PRIME number';
	   	}
	}
}

function convertHourToMinutes(){
	var hour = document.getElementById('hour').value;
	var validation = document.getElementById('hour');

	if (!validation.checkValidity()) {
		 document.getElementById("display").innerHTML = validation.validationMessage;
	}else if(!hour){
		return;
	}

	var convert = 0;
	convert = hour * 60;
	document.getElementById("display").innerText = convert + " minutes";
}


