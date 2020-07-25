var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save-button');
var ideaTitle = document.querySelector('.card-idea-title');
var ideaText = document.querySelector('.card-idea-text');
var bubbleParent = document.querySelector('.purple-1');
var ideaForm = document.querySelector('.idea-form');
var allCards = document.querySelector('.all-cards');

var storage = [];

bubbleParent.addEventListener('click', clickHandler);
ideaForm.addEventListener('keypress', keyHandler);
window.addEventListener('load', keyHandler);

function clickHandler(event) {
  if (event.target.className === "save-button") saveIdeaButton()
}

function keyHandler(event) {
  if (event.target.className === "title-input") saveButtonDisable()
  if (event.target.className === "body-input") saveButtonDisable()
}

function saveIdeaButton() {
  var obj = newIdeaInstantiation(titleInput.value, bodyInput.value)
  obj.saveToStorage()
  buildCard(obj)
  resetForm()
}

function newIdeaInstantiation(title, body) {
  var newIdea = new Idea (title, body)
  return newIdea
}


function buildCard(obj) {
  var cardHTML =
   ` <section class="card" id="${obj.id}">
    <section class="card-header">
      <img src="./img/star.svg" class="card-star-favorite-icon" alt="star favorite">
      <img src="./img/delete.svg" class="card-delete-icon" alt="delete button">
    </section>
    <section class="card-body">
      <h3 class="card-idea-title">
        ${obj.title}
      </h3>
      <p class="card-idea-text">
        ${obj.body}
      </p>
    </section>
    <section class="card-footer">
      <img src="./img/comment.svg" class="card-add-comment-icon" alt="add comment button">
      <p>Comment</p>
    </section>
  </section>`;
  allCards.insertAdjacentHTML('afterbegin', cardHTML)
}

// function displayCard(str) {
//   allCards.insertAdjacentHTML('afterbegin', str)
// }

function resetForm() {
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.classList.add("disabled");
}

function saveButtonDisable() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.classList.remove("disabled");
  }
}




//stop
