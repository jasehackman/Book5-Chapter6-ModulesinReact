const remoteURL = "http://localhost:5002"

export default class APIManager {

  get(dataName, id) {
    return fetch(`${remoteURL}/${dataName}/${id}`).then(e => e.json())
  }

  getAll(dataName) {
    return fetch(`${remoteURL}/${dataName}`).then(e => e.json())
  }

  deleteAndGrag(dataName,id) {
    return fetch(`${remoteURL}/${dataName}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => this.getAll(dataName))
  }
}