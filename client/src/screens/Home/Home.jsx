import './Home.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import Image from '../../../src/images/imagebody.jpg';

const useStyles = makeStyles((theme)=>({
  title: {
    color: "#E29924",
    fontWeight: "bold",
    fontFamily: "Handlee",
    position: "absolute",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      top: "52%"
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className='body'>
      <img src={Image} alt='body' className='home-body-bg'/>
      <Typography variant='h5' className={classes.title}>
        <Typed strings={["Jr. Front-End Developer", "Jr. Software Engineer", "Senior Foodie", "Based in New Jersey"]}
          typeSpeed={70}
          backSpeed={80}
          loop
        />
      </Typography>
    </div>
  );
}
