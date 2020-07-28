class Idea {
  constructor(title, body, star){
    this.id = Date.now()
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

  saveToStorage() {
    var stringStorage = JSON.stringify(storage);
    localStorage.setItem('ideas', stringStorage);
  }

  deleteFromStorage() {
    var memory = JSON.parse(localStorage.getItem('ideas'));
    for (var i = 0; i < memory.length; i++) {
      if (this.id == memory[i].id) {
        memory.splice(i,1);
      }
    }
    var stringStorage = JSON.stringify(memory);
    localStorage.setItem('ideas', stringStorage);
  }


    // var deleteSelection = event.target.closest(".card");
    // for (var i = 0; i < storage.length; i++) {
    //   if (deleteSelection.dataset.id === `${storage[i].id}`) {
    //     localStorage.remove(storage[i]);
    //   }
    // }


  updateIdea() {

    // var favorite = event.target.closest(".card")
    // for (var i = 0; i < storage.length; i++) {
    //   localStorage.getItem("ideas");
        console.log(Object.keys(ideas))
  }
  //This should update our data model with new values for title/body/star and push those updates to localStorage.
}
