import './Projects.css';
import P1 from '../../components/Project1/P1';
import P2 from '../../components/Project2/P2';
import P3 from '../../components/Project3/P3';
import P4 from '../../components/Project4/P4';

export default function Projects() {
  return (
    <div id='all-projects'>
      <P4 />
      <P3 />
      <P2 />
      <P1 />
    </div>
  );
}
