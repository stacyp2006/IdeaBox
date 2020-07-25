class Idea {
  constructor(title, body){
    this.id = Date.now()
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage() {
    // storage.push(this)
    // localStorage.setItem(this.id, this)
  }
}
