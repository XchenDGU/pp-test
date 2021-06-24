import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Popup from './Popup';

import Typography from '@material-ui/core/Typography';
import ActionButton from '../Controls/ActionButton';

const useStyles = makeStyles((theme) => ({
  storyList: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 400,
    
  },
  
  textField:{
    width:'25%',
    float:'right',
  },
  span:{
    float:'right',
  }
}));

function createData(title,point){
  return {title, point}
}

const TestData = [
  createData('Story 0', 1),
  createData('Story 1', 2),
  createData('Story 2', 3),
  createData('Story 3', 4),
  createData('Story 4', 5),
  createData('Story 5', 7),
  createData('Story 6', -1),
  createData('Story 7', -1),
  createData('Story 9',-1),
  createData('Story 10',-1),
  createData('Story 11',-1),
  createData('Story 12',-1),
  createData('Story 13',-1),
]


export default function StoryList(){
  const classes = useStyles();
  const [openPopup,setOpenPopup] = useState(false);
  

  return (
    <div> 
      <List
        subheader={
          <ListSubheader>
            <Typography variant="h6"> Story Title <span className={classes.span}> Point</span></Typography>
          </ListSubheader>
        } 
        className={classes.storyList}>
        {TestData.map((item) =>(
          <ListItem key={item.title} button>
            <ListItemText primary={item.title} onClick={()=>{setOpenPopup(true)}}/>
            <ListItemSecondaryAction>
              <TextField
                className={classes.textField} 
                variant="outlined"
                //label="point"
                
                size="small"
                type="number"
                defaultValue={item.point >=0 ? `${item.point}` : ""}
                />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <Divider />
        <ListItem key="total">
          <ListItemText primary="Total"/>
          <ListItemSecondaryAction>
            <TextField
              className={classes.textField} 
              variant="outlined"
              //label="point"
              disabled
              size="small"
              type="number"
              defaultValue="0"
              />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <div>
        <ActionButton color="primary">
            <Typography variant="body" >End Game</Typography>
        </ActionButton>
      </div>

      <Popup
        Title = "Story Detail"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>
          <div>
            Story Detail
          </div>
      </Popup>
      
    </div> 

    
  )
}