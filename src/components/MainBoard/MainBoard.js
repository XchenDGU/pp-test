import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VotingTray from './VotingTray';
import VotingStat from './VotingStat';
import PlayersStatus from './PlayersStatus';

const useStyles = makeStyles((theme) => ({
  
}));


export default function MainBoard(){
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item sm={8} xs={12}>
        <VotingTray />
        <PlayersStatus />
      </Grid>
      <Grid item sm={4} xs={12}>
        <VotingStat />
      </Grid>
    </Grid>
  )

}