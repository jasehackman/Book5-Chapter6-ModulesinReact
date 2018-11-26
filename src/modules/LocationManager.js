import APIManager from "./apiCalls"

class LocationManager extends APIManager {
  getAnimals(id) {
    return this.get("locations", id)
  }

  getAllLocations() {
    return this.getAll("locations")
  }

  removeLocations(id){
    return this.deleteAndGrag("locations", id)
  }
}

export default new LocationManager();