import { FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api';
import axios from 'axios';
 
export const getTables = (tid) => async (dispatchTables) => {
    try {
        const { data } = await api.fetchTables(tid);

        dispatchTables({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(api.fetchTables())
        console.log(error.message);
    }
}

export const createTable = (table) => async (dispatchTables) => {
    const json = JSON.stringify({ meal_name: table.meal_name,
                                  table_id: table.table_id,
                                  price: table.price,
                                  quantity: table.quantity,});
    try {
        const res = axios.post('http://localhost:3002/tables', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
    }
}

export const updateTable = (table) => async (dispatchTables) => {
    const json = JSON.stringify({ order_id: table.order_id,
                                  meal_name: table.meal_name,
                                  table_id: table.table_id,
                                  price: table.price,
                                  quantity: table.quantity,});
    try {
        const res = axios.put('http://localhost:3002/update', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
    }
}

export const deleteTable = (table) => async (dispatchTables) => {
    try {
        const res = axios.delete('http://localhost:3002/delete', {
            params: {
                oid: table,
            },
        });
    } catch (error) {
    }
}

export const checkoutTable = (table) => async (dispatchTables) => {
    try {
        const res = axios.delete('http://localhost:3002/checkout', {
            params: {
                tid: table,
            },
        });
    } catch (error) {
    }
}
