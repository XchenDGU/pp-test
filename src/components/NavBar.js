import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
  },
  title:{
    flexGrow:1,
  }
}))

export default function NavBar(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="5" className={classes.title}>
            Planning Poker Tool
          </Typography>
          <Button color="inherit">
            <Link href="/login" color="inherit">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}