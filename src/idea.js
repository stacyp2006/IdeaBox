class Idea {
  constructor(title, body){
    this.id = Date.now()
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage() {
    if (localStorage.getItem("ideas") === null){
      var ideas = {};
    } else {
     var ideas = JSON.parse(localStorage.getItem("ideas"));
    }

    ideas[this.id] = this
    var stringifiedIdea = JSON.stringify(ideas);
    localStorage.setItem("ideas", stringifiedIdea);
    var keys = Object.keys(ideas);
    for (var i = 0; i < keys.length; i++) {
      // console.log(keys[i])
      // console.log(ideas[keys[i]])
      buildCard(ideas[keys[i]])

    }
  }
}
