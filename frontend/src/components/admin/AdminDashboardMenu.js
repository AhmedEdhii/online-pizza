
import React from 'react'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination,
    TableRow, TabelSortLabel, Toolbar, Typography, Paper, IconButton, Button, Grid,
    FormControlLabel, Divider
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

function createData(name, prices, category, actions) {
    return {
      name,
      prices,
      category,
      actions,
    };
  }


const rows = [
    createData('Pizza 1', [{Price:0}, {Small:100}, {Medium:200}, {Large:300}, {Jumbo:400}], 'Pizza'),
    createData('Pizza 2', [{Small:100}, {Medium:200}, {Large:300}, {Jumbo:400}], 'Pizza'),
    createData('Pizza 3', [{Small:100}, {Medium:200}, {Large:300}, {Jumbo:400}], 'Pizza'),
    createData('Drink 1', [{Price:50}], 'Drinks'),
    createData('Drink 2', [{Price:50}], 'Drinks'),
    createData('Drink 2', [{Price:50}], 'Drinks'),
  ];



function AdminDashboardMenu(props) {

    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


      
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

    return (
        <>
            <Grid>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, paddingTop: 1 }}>
                    Menu
                </Typography>


            </Grid>
            <Divider sx={{ marginTop: 1, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                <Grid item xs={12} >


                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                           
                            
                            
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>

                    </Box>
















                </Grid>

            </Grid>
        </>
    )
}

export default AdminDashboardMenu