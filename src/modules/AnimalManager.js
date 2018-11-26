import APIManager from "./apiCalls"

class AnimalManager extends APIManager {
  getAnimals(id) {
    return this.get("animals", id)
  }

  getAllAnimals() {
    return this.getAll("animals")
  }

  removeAnimals(id){
    return this.deleteAndGrag("animals", id)
  }
}

export default new AnimalManager();