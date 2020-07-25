var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save-button');
var ideaTitle = document.querySelector('.card-idea-title');
var ideaText = document.querySelector('.card-idea-text');
var bubbleParent = document.querySelector('.purple-1');
var ideaForm = document.querySelector('.idea-form');

var titles = [];
var texts = [];

bubbleParent.addEventListener('click', clickHandler);
ideaForm.addEventListener('keypress', keyHandler);
window.addEventListener('load', keyHandler);
//saveButtonDisable();

function clickHandler(event) {
  if (event.target.className === "save-button") saveIdea()
}

function keyHandler(event) {
  if (event.target.className === "title-input") saveButtonDisable()
  if (event.target.className === "body-input") saveButtonDisable()
}

function saveIdea() {
  newIdeaCard(titleInput.value, bodyInput.value)
  ideaTitle.innerText = titleInput.value;
  ideaText.innerText = bodyInput.value;
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.classList.add("disabled");
}

function saveButtonDisable() {
  // saveButton.disabled = true;
  // saveButton.classList.add("disabled");
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.remove("disabled");
  }
}

function newIdeaCard(title, body) {
  var newIdea = new Idea (title, body)
  console.log(newIdea)
}



//stop
