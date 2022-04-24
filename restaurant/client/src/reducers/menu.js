import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (menu = [], action) => {
    switch (action.type) {
        case DELETE:
            return menu.filter((meal) => meal._id !== action.payload);
        case UPDATE:
            return menu.map((meal) => meal._id === action.payload._id ? action.payload : meal);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...menu, action.payload];
        default:
            return menu;
    }
}