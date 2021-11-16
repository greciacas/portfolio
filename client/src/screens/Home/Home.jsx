import './Home.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import Image from '../../../src/images/imagebody.jpg';

const useStyles = makeStyles({
  title: {
    color: "#E29924",
    fontWeight: "bold",
    fontFamily: "Handlee",
    position: "absolute",
    top: "60.1%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className='body'>
      <img src={Image} alt='body'/>
      <Typography variant='h5' className={classes.title}>
        <Typed strings={["Jr. Front-End Developer", "Jr. Software Engineer", "Senior Foodie", "Based in New Jersey"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </div>
  );
}
