import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animalList'
import LocationList from './location/locationList'
import EmployeeList from './employee/employeeList'
import OwnersList from './owners/owners'
import apiCalls from "../modules/apiCalls"

import AnimalManager from "../modules/AnimalManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"


class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  }


  componentDidMount() {
    const newState = {}

    AnimalManager.getAllAnimals()
      .then(allAnimals => {
        this.setState({
          animals: allAnimals
        })
      })
      .then(EmployeeManager.getAllEmployees()
      .then(allEmployees => {
        this.setState({
          employees: allEmployees
        })
      }))
      .then(LocationManager.getAllLocations()
      .then(allLocations => {
        this.setState({
          locations: allLocations
        })
      }))
      .then(OwnerManager.getAllOwners()
      .then(allOwners => {
        this.setState({
          owners: allOwners
        })
      }))


    // apiCalls.getAll("animals")
    //   .then (animals => newState.animals = animals)
    //   .then(() => apiCalls.getAll("employees"))
    //   .then (employees => newState.employees = employees)
    //     .then(() => apiCalls.getAll("locations")
    //      .then (locations => newState.locations = locations))
    //         .then(() => apiCalls.getAll("owners")
    //         .then (owners => newState.owners = owners))
    //           .then(() => this.setState(newState))
  }

  delete = (dataName, id) => {
    apiCalls.deleteAndGrag(dataName, id)
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