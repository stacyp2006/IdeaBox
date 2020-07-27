class Idea {
  constructor(title, body){
    this.id = Date.now()
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage() { //we want this to stringify the object item and set to local storage
    var idString = this.id
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    // var ideas = {};
    ideas[this.id] = this
    var stringifiedIdea = JSON.stringify(ideas);
    localStorage.setItem("ideas", stringifiedIdea);
  }
}
//if ideas is  undefined then {} 
//ls {ideas {this.id newIdeaObject}}
