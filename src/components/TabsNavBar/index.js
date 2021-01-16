import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './TabsNavBar.scss'

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
        <Box p={2}>
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
    width: 500,
    display: 'contents',
    fontSize: '1.4em',
    fontFamily: 'Montserrat',
  },
  tabs: {
    color: '#484848',
  },
  tabPanel: {
    minWidth: 300,
    maxWidth: 600,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          // Changing a specific Mui component style with a css class
          classes={{ indicator: 'tabIndicator color' }}
          //
          value={value}
          onChange={handleChange}
          textColor='#484848'
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Activos" {...a11yProps(0)} />
          <Tab label="Archivo" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div className={classes.tabPanel}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
      </TabPanel>
      </div>
    </div >
  );
}
