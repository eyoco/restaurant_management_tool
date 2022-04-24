import axios from 'axios';

const url = 'http://localhost:5000/menu';
const urlTables = 'http://localhost:3002/tables';
export const fetchMenu = () => axios.get(url);
export const createMeal = (newMeal) => axios.post(url, newMeal);
export const updateMeal = (id, updatedMeal) => axios.patch(`${url}/${id}`, updatedMeal);
export const deleteMeal = (id) => axios.delete(`${url}/${id}`);
export const addMeal = (id) => axios.patch(`${url}/${id}/addMeal`);
export const removeMeal = (id) => axios.patch(`${url}/${id}/removeMeal`);

export const fetchTables = (tid) => axios.get(urlTables, {
    params: {
        tid: tid,
    },
});

export const createTable = (newtable) => {
    console.log('newtable is ' + newtable.meal_name);
    axios.post(urlTables, newtable);
};
