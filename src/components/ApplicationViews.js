import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animalList'
import LocationList from './location/locationList'
import EmployeeList from './employee/employeeList'
import OwnersList from './owners/owners'


class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => this.setState(newState))
    fetch("http://localhost:5002/employees")
      .then(r => r.json())
      .then (employees => newState.employees = employees)
      .then(() => this.setState(newState))
    fetch("http://localhost:5002/locations")
      .then(r => r.json())
      .then (locations => newState.locations = locations)
      .then(() => this.setState(newState))
    fetch("http://localhost:5002/owners")
      .then(r => r.json())
      .then (owners => newState.owners = owners)
      .then(() => this.setState(newState))
  }

  delete = (dataName, id) => {
    return fetch(`http://localhost:5002/${dataName}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/${dataName}`))
    .then(e => e.json())
    .then(newdata => {
      console.log("data Name:",dataName, "newdata:",newdata)
      this.setState({
        [dataName]: newdata
    }
    )})
}

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
           return <AnimalList delete={this.delete} animals={this.state.animals} />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList delete={this.delete} employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList delete={this.delete} owners={this.state.owners} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews