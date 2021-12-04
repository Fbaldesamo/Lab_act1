



function compute_1(val)
{
  document.getElementById("ansval").value = val * 135;
  tot();
}

function compute_2(val)
{
  document.getElementById("ansval_1").value = val * 128;
  tot();

    
}

function tot(){

	var first_number = parseInt(document.getElementById("ansval").value);
	var second_number = parseInt(document.getElementById("ansval_1").value);
	var result = first_number + second_number;


	document.getElementById("total_2").value = result;


}

function checkvalid(){

	if (document.getElementById("ansval").value.length == 0) 
	{

		alert("Pls put a Quantity!!!")


	}
	else if (document.getElementById("ansval_1").value.length == 0) 
	{

		alert("Pls put a Quantity!!!")


	}

	else if(document.getElementById("email").value.length == 0)
	{
    	alert("No email inputted")
    }
    
    
    else if (document.getElementById("fname").value.length == 0) 
	{

		alert("Pls put a FirstName!!!")


	}
	
	
	else if (document.getElementById("lname").value.length == 0) 
	{

		alert("Pls put a LastName!!!")


	}
	else if (document.getElementById("address").value.length == 0) 
	{

		alert("Pls put a Address!!!")


	}
	else{

		document.write("submitted")
	}

}









