import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (tables = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...tables, action.payload];
        default:
            return tables;
    }
}