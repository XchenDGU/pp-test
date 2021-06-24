import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ActionButton from '../Controls/ActionButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
  root:{
    width:'100%',
    maxHeight:400,
    position:'relative'

  }
}));


export default function CurrentStory(){
  const classes = useStyles();



  return (
    <>
    <div className={classes.root}>
      <Typography variant="h6">
        Issue #
      </Typography>
      <Divider/>
      <Typography variant="h6">
        Title:
      </Typography>
      <Typography variant="subtitle1">
        Created: time
      </Typography>
      <Typography variant="subtitle2">
        Created by:name
      </Typography>
      <Typography variant="body1">
        Description:
      </Typography>
      <Typography variant="body2">
        Comment:
      </Typography>
    </div>
    <div>
      <ActionButton color='secondary'>
        <ArrowBackIcon />
      </ActionButton>
      <ActionButton color='primary'>
        <ArrowForwardIcon />
      </ActionButton>
    </div>
    </>
  )

}