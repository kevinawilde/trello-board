function allowDrop(ev) {
 	ev.preventDefault();
}

function drag(ev) {
 	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
function createPopover(){
	document.getElementById('popup').style.display='block';
}
function createTask(){
	/*Create Card*/
	var card = document.createElement('div');
	card.className = 'card';
	var taskName=document.getElementById("taskName").value;
	var taskBody=document.getElementById("description").value;
	/*card.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';*/
	document.getElementById('cards').appendChild(card);
	/*Card Head*/
	var cardHead = document.createElement('div');
	var cardHeadText = document.createTextNode(taskName); 
	cardHead.appendChild(cardHeadText);
	cardHead.className = 'card-header';
	card.appendChild(cardHead);
	/*Card Body*/
	var cardBody = document.createElement('div');
	
	cardBody.className = 'card-body';
	var cardBodyText = document.createTextNode(taskName); 
	cardBody.appendChild(cardBodyText);
	card.appendChild(cardBody);

}
function cancelTask(){
	document.getElementById('popup').style.display='none';
}