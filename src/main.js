var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save-button');
var ideaTitle = document.querySelector('.card-idea-title');
var ideaText = document.querySelector('.card-idea-text');
var bubbleParent = document.querySelector('.purple-1');
var ideaForm = document.querySelector('.idea-form');
var allCards = document.querySelector('.all-cards');
var deleteIcon = document.querySelector('.card-delete-icon');
var menuHeaderIcon = document.querySelector('.menu-header-icon');
var mobileMenu = document.querySelector('.open-nav-filter');
var overlay = document.querySelector('.whole-filter-section');
var closeIcon = document.querySelector('.menu-nav-close-icon');
var showStarredButton = document.querySelectorAll('.show-starred-ideas');
var searchInput = document.querySelector('.search-box-input');

var storage = [];

bubbleParent.addEventListener('click', clickHandler);
window.addEventListener('keyup', keyHandler);
window.addEventListener('load', loadHandler);

function loadHandler() {
  localStoragePush()
  populateCards()
}

function clickHandler(event) {
  if (event.target.className === "save-button") saveIdeaButton();
  if (event.target.className === "card-delete-icon") deleteIdea();
  if (event.target.classList.contains("card-star-favorite-icon")) starIdeaButton();
  if (event.target.className === "menu-header-icon") openNav();
  if (event.target.className === "menu-nav-close-icon") closeNav();
  if (event.target.className === "show-starred-ideas") starHandler();
}

function keyHandler(event) {
  if (event.target.className === "title-input") saveButtonDisable();
  if (event.target.className === "body-input") saveButtonDisable();
  if (event.target.className === "search-box-input") searchFilter();
}

function saveIdeaButton() {
  var newIdea = new Idea(titleInput.value, bodyInput.value)
  buildCard(newIdea)
  resetForm()
  pushToStorage(newIdea)
  newIdea.saveToStorage()
}

function buildCard(newIdeaObject) {
  allCards.insertAdjacentHTML('afterbegin', `
    <section class="card" data-fav="${newIdeaObject.star}" data-id="${newIdeaObject.id}">
      <section class="card-header">
        <img src="${setStar(newIdeaObject)}" class="card-star-favorite-icon" alt="star favorite">
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

function setStar(newIdeaObject) {
  if (newIdeaObject.star === true) {
    return './img/star-active.svg'
  } else {
    return './img/star.svg'
  }
}

function pushToStorage(newIdeaObject) {
  storage.push(newIdeaObject);
}

function localStoragePush() {
  if (localStorage.key("ideas")) {
    var ideas = JSON.parse(localStorage.getItem("ideas")) || [];
    for (var i = 0; i < ideas.length; i++) {
      var currentCard = new Idea(ideas[i].title, ideas[i].body, ideas[i].star);
      currentCard.id = ideas[i].id;
      storage.push(currentCard);
    }
  }
}

function populateCards() {
  for (var i = 0; i < storage.length; i++) {
    buildCard(storage[i])
  }
}

function resetForm() {
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.classList.add("disabled");
}

function saveButtonDisable() {
  if (titleInput.value.trim() !== "" && bodyInput.value.trim() !== "") {
    saveButton.classList.remove("disabled");
  }
}

function searchFilter() {
  allCards.innerHTML = "";
  for (var i = 0; i < storage.length; i++) {
    if (storage[i].title.includes(searchInput.value) ||
      storage[i].body.includes(searchInput.value)) {
        buildCard(storage[i]);
    };
  }
}

function deleteIdea() {
  var deleteSelection = event.target.closest(".card");
  deleteSelection.remove();
  for (var i = 0; i < storage.length; i++) {
    if (deleteSelection.dataset.id === `${storage[i].id}`) {
      var deletedIdea = storage[i];
      storage.splice(i, 1);
      deletedIdea.deleteFromStorage(storage);
    };
  };
}

function starIdeaButton() {
  changeStarImage(event);
  toggleFavorite(event);
}

function changeStarImage(event) {
  if (event.target.attributes.src.nodeValue === "./img/star.svg") {
    event.target.attributes.src.nodeValue = "./img/star-active.svg";
  } else {
    event.target.attributes.src.nodeValue = "./img/star.svg";
  };
}

function toggleFavorite(event) {
  var favorite = event.target.closest(".card");
  for (var i = 0; i < storage.length; i++) {
    if (favorite.dataset.id === `${storage[i].id}` && !storage[i].star) {
      storage[i].star = true;
    } else if (favorite.dataset.id === `${storage[i].id}` && storage[i].star) {
      storage[i].star = false;
    };
    storage[i].updateIdea(storage);
  };
}

function starHandler() {
  console.log(showStarredButton[0].innerText);
  if (showStarredButton[0].innerText === "Show All Ideas") {
    restoreIdeas();
  } else {
    starredIdeas();
  };
}

function starredIdeas() {
  showStarredButton[0].innerText = "Show All Ideas";
  showStarredButton[1].innerText = "Show All Ideas";
  allCards.innerHTML = "";
  for (var i = 0; i < storage.length; i++) {
    if (storage[i].star) {
      buildCard(storage[i]);
    };
  };
}

function restoreIdeas() {
  showStarredButton[0].innerText = "Show Starred Ideas";
  showStarredButton[1].innerText = "Show Starred Ideas";
  allCards.innerHTML = "";
  for (var i = 0; i < storage.length; i++) {
    buildCard(storage[i]);
  };
}

function openNav() {
  mobileMenu.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeNav() {
  mobileMenu.classList.add('hidden');
  overlay.classList.add('hidden');
}
