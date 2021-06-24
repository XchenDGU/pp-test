import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root:{
    position:'relative',
    width:'100%',
    height:500,
  },
  buttonGroup:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const POINT_CHOICES = [0,1,2,3,5,8,13,20,33]
const POINT_CHOICES2 = [53,100]
export default function VotingTray(){
  const classes = useStyles();

  return ( 
    <Paper variant="outlined" className={classes.root}>
      <Typography variant="h5">Let's Vote</Typography>
      <div className={classes.buttonGroup}>
        <ButtonGroup variant="contained">
          <Button color="primary">Start</Button>
          <Button color="secondary">Clear</Button>
          <Button color="primary">Show</Button>
        </ButtonGroup>
      </div>
      <Typography
        component="div"
        variant="body1"
        style={{ width:'100%',position: 'relative',fontSize:'16px' }}
      >
        {POINT_CHOICES.map((point,index)=>(
          <Box
          component="Button"
          bgcolor={`grey.${1000-50*index}`}
          color="black"
          p={2}
          position="absolute"
          top={index*6 +20}
          left={`${index*10}%`}
          zIndex={`${20-index}`}
          height={150}
          width={100}
          textAlign='right'
          fontSize="20px"
        >
          {point}
        </Box>
        ))}
        {POINT_CHOICES2.map((point,index)=>(
          <Box
          component="Button"
          bgcolor={`grey.${1000-50*index}`}
          color="black"
          p={2}
          position="absolute"
          top={index*6 +218}
          left={`${index*10}%`}
          zIndex={`${20-index}`}
          height={150}
          width={100}
          textAlign='right'
          fontSize="20px"
        >
          {point}
        </Box>
        ))}
        

    </Typography>
      
    </Paper>
    
  )

}