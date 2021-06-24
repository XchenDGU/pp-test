import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CurrentStory from './CurrentStory';
import StoryList from './StoryList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    //width: 500,
  },
}));


export default function Backlog(){
  const classes = useStyles();
  //const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  */
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Story" {...a11yProps(0)} />
          <Tab label="Backlog" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
          <CurrentStory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StoryList />
        </TabPanel>

    </div>
  )
}