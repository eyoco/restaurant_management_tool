import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Meal from './Meal/Meal';

import useStyles from './styles'

const Menu = ({ setCurrentId }) => {
    const menu = useSelector((state) => state.menu);
    const classes = useStyles();

    console.log(menu);

    return (
        !menu.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {menu.map((meal) => (
                    <Grid key={meal._id} item xs={12} sm={6}>
                        <Meal meal={meal} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Menu;