var cardCount = 1;
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
function deleteButton(parent){

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
	deleteButton.setAttribute("onclick", "deleteCard()");

	card.appendChild(cardFooter);


	document.getElementById('cards').appendChild(card);
	document.getElementById('popup').style.display='none';

}
function cancelTask(){
	document.getElementById('popup').style.display='none';
}