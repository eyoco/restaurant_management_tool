import { Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';

import {deleteTable, checkoutTable} from '../../../actions/tables';

import useStyles from './styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useState } from 'react';
import  Axios  from 'axios';

const TableEach = ({ tid, setTidCreate, setOidUpdate }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [TablesList, setTablesList] = useState([]);

    const [tableData, setTableData] = useState({ meal_name: 'Pasta', table_id: 1, price: 0, quantity: 0 });
    const dispatchTables = useDispatch();

    Axios.get('http://localhost:3002', {
        params: {
            tid: tid,
        },
    }).then((response) => {
        setTablesList(response.data);
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.tableSingle}  >
                <TableHead>
                <TableRow ><Typography className={classes.tablerow} align='center'>Table{tid}</Typography></TableRow>
                <TableRow>
                    <TableCell align="center" size='small'>order_id</TableCell>
                    <TableCell align="center" size='small'>meal_name</TableCell>
                    <TableCell align="center" size='small'>table_id</TableCell>
                    <TableCell align="center" size='small'>price</TableCell>
                    <TableCell align="center" size='small'>quantity</TableCell>
                    <TableCell align='center' size='small'>
                        <Button size="small" color="primary" onClick={() => dispatchTables(checkoutTable(tid))}>
                            <CheckIcon className={classes.iconcheckout} fontSize="small"/>
                                <Typography className={classes.fontcheckout} align='center'>Checkout</Typography>
                        </Button>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {TablesList.map((order) => (
                    <TableRow
                    key={order.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center" size='small'>{order.order_id}</TableCell>
                    <TableCell align="center" size='small'>{order.meal_name}</TableCell>
                    <TableCell align="center" size='small'>{order.table_id}</TableCell>
                    <TableCell align="center" size='small'>{order.price}</TableCell>
                    <TableCell align="center" size='small'>{order.quantity}</TableCell>
                    <TableCell align='center' size='small'>
                        <Button size="small" color='primary' onClick={() => dispatchTables(deleteTable(order.order_id))}>
                            <DeleteIcon className = {classes.icondelete} fontSize="small" />
                                <Typography className={classes.fontdelete} align='center'>Delete</Typography>
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    );
}

export default TableEach;