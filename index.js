function addForm(){
	var age = document.getElementById("age").value;
    var relationShip = document.getElementById("rel").value;
    var smokerStatus = document.getElementById("smoker").checked;
	resetFields();
	if(age == '' || age <= 0){
		alert("Please enter valid age");
		return;
	}
	if (relationShip == '' || relationShip == null ) {
		alert("Please select relationship");
		return;
	} 
	var tempList = {
	        "Age": age,
	        "Relationship":relationShip,
	        "Smoker":smokerStatus
	        };
	         
	if(localStorage.getItem('household') == null){
	   localStorage.setItem('household', '[]');
	 }
	         
    var old_data = JSON.parse(localStorage.getItem('household'));
	old_data.push(tempList);
	localStorage.setItem('household', JSON.stringify(old_data));
 }
	  
window.onload = function() {
	var key = "";
	var list = "<table border='1'><tr><th>Age</th><th>Relationship</th><th>Smoker</th></tr>\n";
	var i = 0;
	if (localStorage.length != 0) {	
	 	for (i = 0; i < localStorage.length; i++) {
	    	 key = localStorage.key(i);
	     	let data = JSON.parse(localStorage.getItem(key));
	     	var j = 0;
	     	for (j=0; j<data.length; j++) {
	      	  list +=  "<tr><td>"+ data[j].Age + "</td>\n<td>"+ data[j].Relationship + "</td>\n<td>"+ data[j].Smoker + "</td>\n</tr>\n"
	      	}
	   	}
	}
	list+= "</table>";
	document.getElementById("houseHoldersList").innerHTML = list;
};

function resetFields() {
	document.getElementById("age").value = '';
	document.getElementById("rel").value = '';
	document.getElementById("smoker").checked = false;
}

