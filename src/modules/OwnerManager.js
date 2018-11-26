import APIManager from "./apiCalls"

class OwnerManager extends APIManager {
  getAnimals(id) {
    return this.get("owners", id)
  }

  getAllOwners() {
    return this.getAll("owners")
  }

  removeOwners(id){
    return this.deleteAndGrag("owners", id)
  }
}

export default new OwnerManager();