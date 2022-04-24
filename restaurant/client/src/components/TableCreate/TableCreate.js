import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import useStyles from './styles';
import { createTable } from '../../actions/tables';


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

const TableCreate = (tidCreate, setTidCreate) => {
    const tableCur = useSelector((state) => tidCreate? tidCreate : null);
    console.log('tableCur is ' + tableCur.tidCreate);

    const [tidCur, setTidCur] = useState(null);

    useEffect(() => {
      if (tableCur) setTidCur(tableCur.tidCreate);
    }, [tableCur])
    const [tableData, setTableData] = useState({ meal_name: 'Pasta', table_id: 1, price: 0, quantity: 0 });
    const dispatchTables = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('tableData is ' + tableData.quantity);
        dispatchTables(createTable(tableData));
    }

    return (
        <Box component="form" 
             sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
             noValidate autoComplete="off">
            <Paper className={classes.tablecreate}>
                Create Order
            <div>
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
                <Button className={classes.buttondone} variant="outlined" size="medium" startIcon={<DoneOutlineIcon />} onClick={handleSubmit} >
                    Done
                </Button>
            </div>
            </Paper>
        </Box>
    );
}

export default TableCreate; 