import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getMenu = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMenu();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(api.fetchMenu())
        console.log(error.message);
    }
}

export const createMeal = (meal) => async (dispatch) => {
    try {
        const { data } = await api.createMeal(meal);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateMeal = (id, meal) => async (dispatch) => {
    try {
        const { data } = await api.updateMeal(id, meal);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMeal = (id) => async (dispatch) => {
    try {
        await api.deleteMeal(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const addMeal = (id) => async (dispatch) => {
    try{
        const { data } = await api.addMeal(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const removeMeal = (id) => async (dispatch) => {
    try{
        const { data } = await api.removeMeal(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}