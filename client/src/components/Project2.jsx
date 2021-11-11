import { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class Project2 extends Component {
  render() {
    return (
      <Spring
      from={{opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000}}
      >
      {props => (
        <div style={props}>
          <div style={p2Style} >
          <h1>EVNTZ</h1>
          <p>Full CRUD full stack web application with user authentication and authorization. Designed to be an event management posting board for residents of a local community. Built with React, Express, Node.js, MongoDB, bcrypt and JWT</p>
    </div>
        </div>
      )}
    </Spring>
    )
  }
}
const p2Style = {
  background: '#DDB39C',
  color: 'black',
  padding: '3.9em'
}

export default Project2
