import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  span:{
    float:'right',
  },
  pointAlign:{
    textAlign:'right'
  },
  checkMarkSize:{
    minWidth:'30px'
  },
  listItem:{
    paddingTop:0,
    paddingBottom:0
  }
}));

function createData(name,point){
  return {name, point}
}

const TestData = [
  createData('Person A', 1),
  createData('Person B', 2),
  createData('Person C', 3),
  createData('Person D', 4),
  createData('Person E', 5),
  createData('Person F', 7),
  createData('Person G', -1),
  createData('Person H', -1),
  createData('Person I',-1),
]


export default function PlayersStatus(){
  const classes = useStyles();
  return (
    <List dense
      subheader={
        <ListSubheader>
          <Typography variant="h6">Player <span className={classes.span}> Point</span></Typography>
        </ListSubheader>
      }
      className={classes.root}
    >
      {TestData.map((item) => (
        <ListItem className={classes.listItem} key={item.name}>
          {item.point >=0 ? 
            (<ListItemIcon className={classes.checkMarkSize}>
              <CheckIcon color="primary" fontSize="small"/>
            </ListItemIcon>) 
            :(<div />)}
          <ListItemText primary={item.name} />
          <ListItemText className={classes.pointAlign} primary={item.point >=0 ? item.point:'?'} />
        </ListItem>
      ))}
    </List>
  )

}