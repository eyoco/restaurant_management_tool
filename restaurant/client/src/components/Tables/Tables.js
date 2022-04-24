import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TableEach from './TableEach/TableEach';
import TableUpdate from '../TableUpdate/TableUpdate';
import TableCreate from '../TableCreate/TableCreate';
import { Grid } from '@material-ui/core';

const Tables = () => {

    const [TablesList, setTablesList] = useState([]);
    const [tidCreate, setTidCreate] = useState(null);

    const [oidUpdate, setOidUpdate] = useState(null);

    const oidCur = useSelector((state) => oidUpdate? oidUpdate:null);



    console.log('oidUpdate in tables is ' + oidCur);


    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TableCreate tidCreate={tidCreate} setTidCreate={setTidCreate}/>
        </Grid>
        <Grid item xs={6}>
          <TableEach tid={1} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
          <TableEach tid={2} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
          <TableEach tid={3} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
        </Grid>
        <Grid item xs={3}>
          <TableUpdate oidCur={oidCur} />
        </Grid>
        <Grid item xs={12}>
          <TableEach tid={4} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
          <TableEach tid={5} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
          <TableEach tid={6} setTidCreate={setTidCreate} setOidUpdate={setOidUpdate}/>
        </Grid>
        
        
      </Grid>
    );
}

export default Tables;