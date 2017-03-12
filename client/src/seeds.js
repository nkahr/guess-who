import Person from './models/Person'

class PeopleData {
  constructor() {
    this.seeds = [
      new Person({
        name: "Frank", 
        hairColour: "blue"
      }), 
      new Person({
        name: "Laura", 
        hairColour: "brown"
      })
    ];
  }


}

export default PeopleData