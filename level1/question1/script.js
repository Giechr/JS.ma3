//Use RegEx to validate form
document.getElementById("submit").addEventListener('click',	function(){
	
	var inputForm = document.getElementsByTagName("input");
	for (var i = 0; i < inputForm.length; i ++ ){	
		var actuallInput = inputForm[i].value; 
		var thePattern = new RegExp(inputForm[i].pattern);
		var actuallTest = thePattern.test(actuallInput);
		
		if(actuallTest === true){
			console.log(inputForm[i].name + " is in the correct format, congrats!");
		}
		else{
			
			console.log(inputForm[i].name + " is not correct, try again!");
			
		}	
		}
	}
)

