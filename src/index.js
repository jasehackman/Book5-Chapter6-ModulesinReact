import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/kennel'

import './index.css'

ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'))