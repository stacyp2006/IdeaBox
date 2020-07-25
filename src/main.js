var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save-button');
var ideaTitle = document.querySelector('.card-idea-title');
var ideaText = document.querySelector('.card-idea-text');
var bubbleParent = document.querySelector('.purple-1');

var titles = [];
var texts = [];

bubbleParent.addEventListener('click', clickHandler)

function clickHandler(event) {
  if (event.target.className === "save-button") saveIdea()
}

function saveIdea() {
  ideaTitle.innerText = titleInput.value;
  ideaText.innerText = bodyInput.value;
  titleInput.value = "";
  bodyInput.value = "";
}


//stop
