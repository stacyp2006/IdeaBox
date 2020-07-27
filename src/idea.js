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
    console.log(Object.keys(ideas))
  }
}
// make a funtion thath pulls out of loacl storage
// then we need to get the key not the cheese
// loop thorugh the array of keys
// uses those keys to target the obj
// build cards based on those object
// add those objects to our data set but pushing
//
// side note we need to fix out delete
