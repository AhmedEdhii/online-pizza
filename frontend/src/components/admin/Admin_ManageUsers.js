


import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';




import AdminSidebar from './AdminSidebar';


import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import MetaData from '../layout/MetaData'
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination,
    TableRow, TabelSortLabel, Toolbar, Typography, Paper, IconButton, Button, Grid,
    FormControlLabel, Divider, TableFooter, Icon, styled
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { LOGIN_SUCCESS } from '../../constants/userConstants';

import UserModal from './UserModal';

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { allUsers } from '../../actions/userActions';
import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';



// function createData(name, email) {


//     return {
//         name,
//         email,
//     };
// }


// const rows = [
//     createData('Cheese', 80,),
//     createData('Jalepenos', 70,),
//     createData('1123', 120,),
//     createData('1123', 40,),
// ];

const rows = [
    []
];

rows.splice(0, 1)

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function Admin_ManageUsers() {


    const { error, products } = useSelector(state => state.products);
    const alert = useAlert();
    const dispatch = useDispatch();
    const { users, usersCount } = useSelector(state => state.allUsers)
    const [openUsers, setOpenUsers] = useState(false)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    users.forEach(user => {
        rows.push({
            id: user._id,
            name: user.name,
            phonenumber: user.phonenumber,
            email: user.email,
            deliveryaddress: user.deliveryaddress,
            status: user.account_status,
            role: user.role
        })
    })

    useEffect(() => {
        rows.splice(0, rows.length)
    })

    

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <>
            <MetaData title={'All Users'} />
            <Grid display='flex' sx={{ alignItems: 'center', paddingTop: 2 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                    All Users
                </Typography>
                <Grid item sx={{ paddingRight: 9, }}>
                    <Button variant='contained' startIcon={<AddCircleIcon />}
                        onClick={() => { setOpenUsers(true) }}>Add New User</Button>
                </Grid>
            </Grid>
            <Divider sx={{ marginTop: 2, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                <Grid item xs={12} >


                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <Table  >

                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#E5E4E2", }}>

                                        <TableCell align="left" sx={{ fontWeight: 'bold'}}>User Name</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Phone Number</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Email</TableCell>
                                        {/* <TableCell align="left" sx={{ fontWeight: 'bold', }}>Delivery Address</TableCell> */}
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Account Status</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Role</TableCell>
                                      

                                        {/* <TableCell align="center" sx={{ fontWeight: 'bold', }}>Actions</TableCell> */}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                    ).map((row) => (
                                        <TableRow key={row.name} >

                                            <TableCell component="th" scope="row">
                                                {row.name}

                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {row.phonenumber}

                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {row.email}

                                            </TableCell>
                                            {/* <TableCell component="th" scope="row">
                                                {row.deliveryaddress}

                                            </TableCell> */}
                                            <TableCell component="th" scope="row">
                                                {row.status}

                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.role}

                                            </TableCell>
                                           

                                            {/* <TableCell align="center" component="th" scope="row">
                                                <IconButton
                                                    onClick={() => { console.log('delete clicked') }}>
                                                    <EditIcon color='success' />
                                                </IconButton>

                                                <IconButton
                                                    onClick={() => { console.log('delete clicked') }}>
                                                    <DeleteOutlineIcon color='error' />
                                                </IconButton>
                                            </TableCell> */}


                                        </TableRow>
                                    ))}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>



                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>

                            </Table>

                        </Paper>

                    </Box>


                </Grid>
                {/* <UserModal
                    title="Employee Form"
                    openPopup={openUsers}
                    setOpenPopup={setOpenUsers}
                >

                </UserModal> */}
            </Grid>
        </>
    )
}

export default Admin_ManageUsers