import { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class Project3 extends Component {
  render() {
    return (
      <Spring
      from={{opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 2000, duration: 2000}}
      >
      {props => (
        <div style={props}>
          <div style={p3Style} >
          <h1>Around the Globe</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim iste fuga, voluptatum modi tenetur praesentium similique facilis delectus ad quod fugit repudiandae reprehenderit ut dolorem incidunt. Atque, voluptates dolore.</p>
    </div>
        </div>
      )}
    </Spring>
    )
  }
}

const p3Style = {
  background: '#C89D86',
  color: 'black',
  padding: '4em'
}

export default Project3
