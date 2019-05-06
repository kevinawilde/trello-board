var cardCount = 1;
var listCount = 1;

function allowDrop(ev) {
 	ev.preventDefault();
}

function drag(ev) {
 	ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text/html");
	ev.target.appendChild(document.getElementById(data));
}
function createPopover(){
	document.getElementById('popup').style.display='block';
}
function deleteCard(e){
	e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
function createTask(){
	cardCount++

	/*Create Card*/
	var card = document.createElement('div');
	card.setAttribute("draggable", "true");
	card.setAttribute("ondragstart", "drag(event)");
	card.className = 'card';
	card.id=`taskCard${cardCount}`
	var taskName=document.getElementById("taskName").value;
	var taskBody=document.getElementById("description").value;
	card.style.cssText = 'background-color:#FFFFAA; box-shadow: 3px 3px 3px; margin-top:5px';
	
	/*Card Head*/
	var cardHead = document.createElement('div');
	var cardHeadText = document.createTextNode(taskName); 
	var cardHeadElement =document.createElement('h4');
	cardHeadElement.appendChild(cardHeadText);
	cardHead.appendChild(cardHeadElement);
	cardHead.className = 'card-header';
	card.appendChild(cardHead);

	/*Card Body*/
	var cardBody = document.createElement('div');
	cardBody.className = 'card-body';
	var cardBodyText = document.createTextNode(taskBody);
	var cardBodyElement =document.createElement('p');
	cardBodyElement.appendChild(cardBodyText);
	cardBody.appendChild(cardBodyElement); 
	card.appendChild(cardBody);
	
	/*Card Footer*/
	var cardFooter = document.createElement('div');
	cardFooter.className = 'card-footer';
	var deleteButton = document.createElement('a');
	
	var deleteText = document.createTextNode('DELETE'); 
	deleteButton.appendChild(deleteText);
	cardFooter.appendChild(deleteButton);


	deleteButton.style.cssText = 'border-radius:10px; color: white; background-color: #d11a2a; padding:4px;';
	deleteButton.setAttribute("href", "#");
	deleteButton.setAttribute("value", `taskCard${cardCount}`);
	deleteButton.setAttribute("onclick", "deleteCard(this)");

	card.appendChild(cardFooter);


	document.getElementById('cards').appendChild(card);
	document.getElementById('popup').style.display='none';
	document.getElementById("taskName").value = '';
	document.getElementById("description").value = '';

}
function createList(){
	var row = document.getElementById("lists");
	/*List Creation*/
	var list = document.createElement('div');
	list.id = `list${listCount}`;
	listCount++;
	list.className = 'col';
	list.setAttribute("ondrop", "drop(event)");
	list.setAttribute("ondragover", "allowDrop(event)");
	row.appendChild(list);
	/*Header*/
	var listName = document.createElement('h3');
	list.appendChild(listName);
	var listNameText = document.getElementById("listName").value;
	var listNameNode = document.createTextNode(listNameText);
	listName.appendChild(listNameNode);
	var editButton = document.createElement('a');
	editButton.setAttribute("href", "#");
	editButton.setAttribute("onclick", "edit(this)");
	editButton.className = "newListButton"
	listName.appendChild(editButton);
	var editButtonImg = document.createElement('img');
	editButtonImg.setAttribute("src", "edit-icon.png");
	editButton.appendChild(editButtonImg);

	document.getElementById('createListPopover').style.display='none';
	document.getElementById("listName").value = '';

}
function cancelTask(){
	document.getElementById('popup').style.display='none';
	document.getElementById("taskName").value = '';
	document.getElementById("description").value = '';
}
function createListPopover(){
	document.getElementById('createListPopover').style.display='block';
}
function cancelList(){
	document.getElementById('createListPopover').style.display='none';
	document.getElementById("listName").value = '';
}
function edit(a){
	document.getElementById("editName").style.display = "block";
	var idValue = a.parentElement.parentElement.id;
	document.getElementById("valueHolder").value = idValue;
	var currentListName = a.parentElement.textContent;
	document.getElementById("editListName").setAttribute("placeholder", currentListName);

}
function cancelListEdit(){
	document.getElementById("editName").style.display = "none";
}
function editList(){
	var getIdValue = document.getElementById("valueHolder").value;
	var newListName = document.getElementById("editListName").value;
	var valueId = document.getElementById(getIdValue);
	document.getElementById("editListName").setAttribute("placeholder", valueId);
	valueId.getElementsByTagName("h3")[0].innerHTML = `${newListName} <a href="#" onclick="edit(this)"><img src="edit-icon.png" alt=""></a>`;
	document.getElementById("editName").style.display = "none";
	document.getElementById("editListName").value = '';

}
function deleteList(){
	var getIdValue = document.getElementById("valueHolder").value;
	var toBeRemoved = document.getElementById(getIdValue);
	toBeRemoved.parentElement.removeChild(toBeRemoved);
	document.getElementById("editName").style.display = "none";
}
