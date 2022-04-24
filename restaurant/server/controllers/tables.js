import { db } from "../index.js";
import { ConnectionClosedEvent } from "mongodb";

export const getTables =  async (req, res) => {
    var tid = req.query.tid;
    db.query('SELECT * FROM cuisineDB.order_cur WHERE table_id = ?', [tid], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

export const createTables =  async (req, res) => {
    var meal_name = req.body.meal_name;
    var table_id = req.body.table_id;
    var quantity = req.body.quantity;
    var price = req.body.price;
    db.query('INSERT INTO cuisineDB.order_cur (meal_name, table_id, quantity, price) VALUES (?, ?, ?, ?)', [meal_name, table_id, quantity, price], (err, result) => {
        if (err) {
            console.log('err is ' + err);
        } else {
            res.send(result);
        }
    })
}

export const updateTables =  async (req, res) => {
    var order_id = req.body.order_id;
    var meal_name = req.body.meal_name;
    var table_id = req.body.table_id;
    var quantity = req.body.quantity;
    var price = req.body.price;
    db.query('UPDATE cuisineDB.order_cur SET meal_name = ?, table_id = ?, quantity = ?, price = ? WHERE order_id = ?', [meal_name, table_id, quantity, price, order_id], (err, result) => {
        if (err) {
            console.log('err is ' + err);
        } else {
            res.send(result);
        }
    })
}

export const deleteTables =  async (req, res) => {
    var order_id = req.query.oid;
    console.log('order_id is ' + order_id);
    db.query('DELETE FROM cuisineDB.order_cur WHERE order_id = ?', [order_id], (err, result) => {
        if (err) {
            console.log('err is ' + err);
        } else {
            res.send(result);
        }
    })
}

export const checkoutTables =  async (req, res) => {
    var table_id = req.query.tid;

    db.query('DELETE FROM cuisineDB.order_cur WHERE table_id = ?', [table_id], (err, result) => {
        if (err) {
            console.log('err is ' + err);
        } else {
            res.send(result);
            console.log('result is ' + result.affectRows);
        }
    })
}


