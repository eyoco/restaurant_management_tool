import { combineReducers } from 'redux';

import menu from './menu';
import revenue from './revenue';
import tables from './tables';

export default combineReducers({ menu, revenue, tables });