var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save-button');
var ideaTitle = document.querySelector('.card-idea-title');
var ideaText = document.querySelector('.card-idea-text');
var bubbleParent = document.querySelector('.purple-1');
var ideaForm = document.querySelector('.idea-form');
var allCards = document.querySelector('.all-cards');
var deleteIcon = document.querySelector('.card-delete-icon')
var favoriteStar = document.querySelector('favorite')
var nonFavoriteStar = document.querySelector('non-favorite')

var storage = [];

bubbleParent.addEventListener('click', clickHandler);
window.addEventListener('keypress', keyHandler);

function clickHandler(event) {
  if (event.target.className === "save-button") saveIdeaButton();
  if (event.target.className === "card-delete-icon") deleteIdea();
  if (event.target.classList.contains("card-star-favorite-icon")) starIdeaButton();
}

function keyHandler(event) {
  if (event.target.className === "title-input") saveButtonDisable();
  if (event.target.className === "body-input") saveButtonDisable();
}

function saveIdeaButton() {
  var newIdea = new Idea (titleInput.value, bodyInput.value)
  newIdea.saveToStorage()
  buildCard(newIdea)
  resetForm()
  pushToStorage(newIdea)
}


function buildCard(newIdeaObject) {
  allCards.insertAdjacentHTML('afterbegin',`
    <section class="card" data-fav="${newIdeaObject.star}" id="${newIdeaObject.id}">
      <section class="card-header">
        <img src="./img/star.svg" class="card-star-favorite-icon" alt="star favorite">
        <img src="./img/delete.svg" class="card-delete-icon" alt="delete button">
      </section>
      <section class="card-body">
        <h3 class="card-idea-title">
          ${newIdeaObject.title}
        </h3>
        <p class="card-idea-text">
          ${newIdeaObject.body}
        </p>
      </section>
      <section class="card-footer">
        <img src="./img/comment.svg" class="card-add-comment-icon" alt="add comment button">
        <p>Comment</p>
      </section>
    </section>
  `)
}

function pushToStorage(newIdeaObject) {
  storage.push(newIdeaObject);
}

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

function deleteIdea() {
  var deleteSelection = event.target.closest(".card")
  deleteSelection.remove();
  for (var i = 0; i < storage.length; i++) {
    if (deleteSelection.id === `${storage[i].id}`) {
      storage.splice(i,1);
    }
  }
}

function starIdeaButton() {
  changeStarImage(event)
  toggleFavorite(event)
}

function changeStarImage(event) {
  if (event.target.attributes.src.nodeValue === "./img/star.svg") {
    event.target.attributes.src.nodeValue = "./img/star-active.svg"
  } else {
      event.target.attributes.src.nodeValue = "./img/star.svg"
  }
}


function toggleFavorite(event) {
  var favorite = event.target.closest(".card")
  for (var i = 0; i < storage.length; i++) {
    if (favorite.id === `${storage[i].id}` && !storage[i].star) {
      storage[i].star = true;
      } else if (favorite.id === `${storage[i].id}` && storage[i].star) {
        storage[i].star = false;
    }
  }
}


//stop
