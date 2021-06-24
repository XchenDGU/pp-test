import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Backlog from './Backlog/Backlog';
import MainBoard from './MainBoard/MainBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:theme.spacing(1),
  },
}));


export default function RoomPage(){
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Room ID:
      </Typography>
      <Typography>Player A</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Paper elevation={0} className={classes.paper}>
            <MainBoard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={0} className={classes.paper}>
            <Backlog />
          </Paper>
        </Grid>
          
      </Grid>
    </div>
  )
}