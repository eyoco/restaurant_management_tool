import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteMeal, addMeal, removeMeal } from '../../../actions/menu';

import useStyles from './styles';

const Meal = ({ meal, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={meal.selectedFile} title={meal.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{meal.creator}</Typography>
                <Typography variant="body2">Create Time:{moment(meal.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                style={{color: 'white'}} 
                size="small" 
                onClick={() => setCurrentId(meal._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <Typography className={classes.details} >Table#: {meal.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography className={classes.title} >Meal:{meal.title}</Typography>
            <Typography className={classes.messa} >info: {meal.message}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(addMeal(meal._id))}>
                    <AddIcon fontSize="small"/>
                     Add 
                    {meal.mealCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(removeMeal(meal._id))}>
                    <RemoveIcon fontSize="small"/>
                     Remove
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteMeal(meal._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete Meal
                </Button>
            </CardActions>
        </Card>
    );
}

export default Meal;