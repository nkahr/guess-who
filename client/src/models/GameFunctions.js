class GameFunctions {
  removePeopleWithFeature(peopleArray, feature, value) {
    peopleArray.forEach((person) => {
      if (person[feature] === value) {
        person["removed"] = true;
      }
    })
  }

  removePeopleWithoutFeature(peopleArray, feature, value) {
    peopleArray.forEach((person) => {
      if (person[feature] !== value) {
        person["removed"] = true;
      }
    })
  }
}



export default GameFunctions