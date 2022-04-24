import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import useStyles from './styles';
import { updateTable } from '../../actions/tables';

const curTableIDs = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
  ];
  
  
  const curMeals = [
      {
        value: 'Pasta',
        label: 'Pasta',
      },
      {
        value: 'Pizza',
        label: 'Pizza',
      },
      {
        value: 'Burger',
        label: 'Burger',
      },
      {
        value: 'Salad',
        label: 'Salad',
      },
    ];
  


const TableUpdate = ({ oid, oidCur}) => {
    const tableCur = useSelector((state) => oidCur? oidCur : null);
    console.log('tableCur is ' + tableCur);
  
    const [oidCurUp, setOidCur] = useState(null);
  
    useEffect(() => {
      if (tableCur) setOidCur(tableCur);
    }, [tableCur])

    const classes = useStyles();
    const [tableData, setTableData] = useState({ order_id: 1, meal_name: 'Pasta', table_id: 1, price: 0, quantity: 0 });
    const dispatchTables = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTables(updateTable(tableData));
    }
    return (
        <Box component="form" 
             sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
             noValidate autoComplete="off">
            <Paper className={classes.tableupdate}>
                Update Order
            <div>
                <TextField
                    id="standard-number"
                    label="Order ID"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    margin='dense'
                    value={tableData.order_id} 
                    onChange={(e) => setTableData({ ...tableData, order_id: e.target.value })}
                />
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="Meal Name"
                    value={tableData.meal_name} 
                    onChange={(e) => setTableData({ ...tableData, meal_name: e.target.value })}
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                    >
                    {curMeals.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="Table ID"
                    value={tableData.table_id} 
                    onChange={(e) => setTableData({ ...tableData, table_id: e.target.value })}
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                    >
                    {curTableIDs.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    margin='dense'
                    value={tableData.quantity} 
                    onChange={(e) => setTableData({ ...tableData, quantity: e.target.value })}
                />
                <TextField
                    id="standard-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    margin='normal'
                    value={tableData.price} 
                    onChange={(e) => setTableData({ ...tableData, price: e.target.value })}
                />
                <Button className={classes.buttondone} variant="outlined" startIcon={<DoneOutlineIcon />} onClick={handleSubmit}>
                    Done
                </Button>
            </div>
            </Paper>
        </Box>
    );
}

export default TableUpdate;