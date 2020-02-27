function getName(){
	var name = document.getElementById("name");
	
}
function setGenderDefault(){
	var gender = document.getElementById('gender');
	var selectedText = gender.options[gender[0].selectedIndex] = 0;
        var selectedValue = gender.value;
        console.log("Default Gender onload : "+selectedValue);

        
        //alert("Selected Text: " + selectedText + " Value: " + selectedValue);
}
function getSelectedGender() {
	 	var gender = document.getElementById('gender');
        var selectedText = gender.options[gender.selectedIndex].innerHTML;
        var selectedValue = gender.value;
        console.log("Selected Gender Onchange : " +selectedValue);
        //alert("Selected Text: " + selectedText + " Value: " + selectedValue);
}

 function getCheckedBoxes() {
	var count = 0;
	var inputLabels = document.querySelectorAll('.hobby');
	var inputElems = document.querySelectorAll('input[type="checkbox"]:checked');
		for(var i = 0 ; i < inputElems.length; i++){
 			if(inputElems[i].type === 'checkbox'){
 				count++;
 			}
 			console.log(inputLabels[i].innerHTML);
		}
		if (count < 3) {
			alert("Please choose at least 3");
		}
}


function addHobby(){
	var hobbyElem = document.getElementById("addHobby");
	hobbyElem.classList.toggle(createElem());
	var btn = document.getElementById("btnHobby");
	btn.setAttribute('disabled', 'disabled');
	if(!document.getElementById("save").disabled){
		var saved = document.getElementById('save');
		save.addEventListener("click",function(){
			var text = document.getElementById('added');
			var inputElems = document.querySelector("div");
			var addedChecBox = document.createElement("input");
			 var textNode = document.createTextNode(text.value);
			 addedChecBox.appendChild(textNode);
			addedChecBox.type = 'checkbox';
			addedChecBox.innerHTML = "Hello";
			inputElems.appendChild(addedChecBox);
			console.log(inputElems);
			alert("Yowww");
		});
	}
	
}


function createElem(){
	var hobbyElem = document.getElementById("addHobby");
   	var txtNewInputBox = document.createElement('input');
    var buttonAdd = document.createElement("button");
    buttonAdd.setAttribute('id','save');
  	var text = document.createTextNode("Save");
	txtNewInputBox.innerHTML = "<input type='text' id='added'>";
	hobbyElem.appendChild(txtNewInputBox);
	buttonAdd.appendChild(text);
	hobbyElem.appendChild(buttonAdd);

}


function ifEmpty(text){
		if(text == null){
			return;
		}
}


function getAdded(){
	
	console.log(added);

}



