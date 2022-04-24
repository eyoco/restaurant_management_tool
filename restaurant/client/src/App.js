import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, LinearProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 

import { getMenu } from './actions/menu';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form';
import Tables from './components/Tables/Tables';
import yancong from './images/yancong.jpeg'
import mcute from './images/mcute.jpeg'
import useStyles from './styles';
import "@fontsource/roboto"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    useEffect(() => {
        dispatch(getMenu());
    }, [currentId, dispatch]);


    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" style={{ background: 'transparent', boxShadow: 'none'}}>
                <img className={classes.image} src={yancong} alt="yancong" height="90" />
                <Typography className={classes.heading} variant="h2" align="center" fontStyle='normal'> Anna's Cuisine </Typography>
                <img className={classes.image} src={mcute} alt="mcute" height="90"  />
            </AppBar>
            <LinearProgress />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Kitchen-Server" {...a11yProps(0)} />
                    <Tab label="Server-Cashier" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <TabPanel value={value} index={0} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <Menu setCurrentId={setCurrentId} />
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                            <Grid  >
                                <Tables />
                            </Grid>
                        </TabPanel>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;