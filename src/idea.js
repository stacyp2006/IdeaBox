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

  retrieveIdeas() {
    //this fxn will retrieve the ideas string from local storage and parse the string back into an array of object literals and set that array equal to storage array. Or possibly push to local storage
  }

  deleteFromStorage() {
    //delete an object out of the data model and immediately update local storage; add saveToStorage here?
  }

  updateIdea() {

    // var favorite = event.target.closest(".card")
    // for (var i = 0; i < storage.length; i++) {
    //   localStorage.getItem("ideas");
        console.log(Object.keys(ideas))
  }
  //This should update our data model with new values for title/body/star and push those updates to localStorage.
}
