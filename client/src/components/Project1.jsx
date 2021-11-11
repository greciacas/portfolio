import { Spring } from 'react-spring/renderprops';

export default function Project1() {
  const p1Style = {
    background: '#EAC1AB',
    color: 'black',
    padding: '4em'
  }

  return (
    <Spring
      from={{ opacity: 0, marginTop: -500}}
      to={{opacity: 1, marginTop: 0}}
    >
      {props => (
        <div style={props}>
          <div style={p1Style} >
            <h1>Finding Books</h1>
            <p>Front end application using a third party API to allow users to search and find books. Built using HTML, CSS, JavaScript, axios</p>
          </div>
        </div>
      )}
    </Spring>
  )
}
