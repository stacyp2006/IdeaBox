class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
  };

  saveToStorage(array) {
    var stringStorage = JSON.stringify(storage);
    localStorage.setItem('ideas', stringStorage);
  };

  deleteFromStorage(array) {
    this.saveToStorage(array);
  };

  updateIdea(array) {
    this.saveToStorage(array);
  };
}
