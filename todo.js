var inputText = document.getElementById("input-text");
var submitButton = document.getElementById("input-submit");
var deleteButton = document.getElementById("input-delete");
var content = document.getElementsByTagName("article")[0];

submitButton.onclick = function(){
	addNote();
}


function addNote(){
	var paragraph = document.createElement("p");
	var input = document.createElement("INPUT");
	input.setAttribute("type", "checkbox");
	var textNode = document.createTextNode("this is new");

	paragraph.appendChild(input);
	paragraph.appendChild(textNode);

	content.appendChild(paragraph);

}