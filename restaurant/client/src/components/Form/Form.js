import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FireBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createMeal,updateMeal } from '../../actions/menu';

// GET THE CURRENT ID

const Form = ({ currentId, setCurrentId }) => {
    const [mealData, setMealData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const meal = useSelector((state) => currentId ? state.menu.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(meal) setMealData(meal);
    }, [meal])
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateMeal(currentId, mealData));
        } else {
            dispatch(createMeal(mealData));
        }
        
        clear();

        
    }

    const clear = () => {
        setCurrentId(null);
        setMealData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Meal</Typography>
                <TextField name="creator" variant="outlined" label="Cook(s)" fullWidth value={mealData.creator} onChange={(e) => setMealData({ ...mealData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Meal's Name" fullWidth value={mealData.title} onChange={(e) => setMealData({ ...mealData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={mealData.message} onChange={(e) => setMealData({ ...mealData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Table number" fullWidth value={mealData.tags} onChange={(e) => setMealData({ ...mealData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FireBase type="file" multiple={false} onDone={({base64}) => setMealData({ ...mealData, selectedFile: base64})} /></div>
                <Button className={classes.buttonSubmit} variant="container" size="large" type="submit" fullWidth>Submit Meal</Button>
                <Button variant="contained"  size="small" onClick={clear} fullWidth>Clear Info</Button>
            </form>
        </Paper>
    );
}

export default Form;
