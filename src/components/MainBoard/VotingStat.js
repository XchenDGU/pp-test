import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  
}));


export default function VotingStat(){
  const classes = useStyles();
  return (
    <Paper variant="outlined">
      <Typography variant="h5">
        Statistics
      </Typography>
      <Divider/>
      <Typography variant="subtitle1">
        Timer:
      </Typography>
      <Typography variant="subtitle1">
        Average:
      </Typography>
      <Typography variant="subtitle1">
        #Votes:
      </Typography>
      <Typography variant="subtitle1">
        Bar Graph:
      </Typography>
    </Paper>
  )

}