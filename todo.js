var inputText = document.getElementById("input-text");
var submitButton = document.getElementById("input-submit");
var deleteButton = document.getElementById("input-delete");
var content = document.getElementsByTagName("article")[0];

submitButton.onclick = function(){	
	if(inputText.value!=""){
		addNote(inputText.value);
		inputText.value="";
	}else{
		alert("Empty field");
	}


	
}

deleteButton.onclick = function(){
	deleteNotes();

}


function addNote(inputValue){
	var paragraph = document.createElement("p");
	paragraph.classList.add("note");
	var input = document.createElement("INPUT");
	input.setAttribute("type", "checkbox");	

	var textNode = document.createTextNode(inputValue);

	paragraph.appendChild(input);
	paragraph.appendChild(textNode);

	content.appendChild(paragraph);

}

function deleteNotes(){
	var notes = document.getElementsByClassName("note");

	for(var i = notes.length - 1; i >= 0 ; i--){

		if(notes[i].getElementsByTagName("input")[0].checked == true){			
			notes[i].remove();
		}
	}
}

