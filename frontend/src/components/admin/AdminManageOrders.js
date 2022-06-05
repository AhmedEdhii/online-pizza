import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
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

import { useDispatch, useSelector } from 'react-redux'

import OrderConfirmation from './OrderConfirmation';
import { updateOrder, getOrderDetails, clearErrors } from '../../actions/orderActions'
import { UPDATE_ORDER_RESET } from '../../constants/orderConstants'


// function createData(id, date, orderDetails, total, status) {
//     return {
//         id,
//         date,
//         orderDetails,
//         total,

//         status,
//     };
// }


const rows = [
    // createData('1123', '22.05.2022', '2xPizza 2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza 2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza2xPizza', 1199, false),
    // createData('1123', '22.05.2022', '2xPizza', 1199, true),
    // createData('1123', '22.05.2022', '2xPizza', 1199, true),
    // createData('1123', '22.05.2022', '2xPizza', 1199, false),
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

function AdminManageOrders() {

    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 80,
        padding: 1,
        margin: 1
    });

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

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

    const dispatch = useDispatch();
    const [status, setStatus] = useState('Delivered');

    const [openOrderConfirmation, setOpenOrderConfirmation] = useState(false)

    const { orders } = useSelector(state => state.allOrders)
    const { loading, order } = useSelector(state => state.orderDetails)
    // const { deliveryaddress, orderItems, paymentmethod, customer_id, totalPrice, orderStatus } = order
    const { error, isUpdated } = useSelector(state => state.order)

    orders.forEach(order => {
        rows.push({
            id: order._id,
            date: String(order.orderDate).substring(0, 10),
            orderDetails: order.orderItems.length,
            total: order.totalPrice,
            status: order.orderStatus
        })
    })

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            alert.success('Order updated successfully');
            dispatch({ type: UPDATE_ORDER_RESET })
        }

        rows.splice(0, rows.length)
    }, [dispatch, alert, error, isUpdated])

    const updateOrderHandler = (id) => {

        const formData = new FormData();
        formData.set('orderStatus', status);

        dispatch(updateOrder(id, formData))
    }

    // useEffect(() => {
    //     rows.splice(0, rows.length)
    // })

    return (
        <>
            <Grid display='flex' sx={{ alignItems: 'center', paddingTop: 2 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
                    All Orders
                </Typography>

            </Grid>
            <Divider sx={{ marginTop: 2, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
                <Grid item xs={12} >


                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <Table >

                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#E5E4E2" }}>

                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Order Id</TableCell>

                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Order Date</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Quantity</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Total</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Status</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 'bold', }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                    ).map((row) => (
                                        <TableRow key={row.id}>

                                            <TableCell component="th" scope="row">
                                                {row.id}

                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {row.date}

                                            </TableCell>

                                            {/* <TableCell component="th" scope="row" sx={{ width: '400px', pr: 15, wordBreak: 'break-word' }}> */}
                                            <TableCell component="th" scope="row">
                                                {row.orderDetails}

                                            </TableCell>


                                            <TableCell component="th" scope="row">
                                                {row.total}
                                            </TableCell>



                                            {row.status == 'Delivered' && (
                                                <>
                                                    <TableCell component="th" scope="row" sx={{ color: "#00D100" }} >
                                                        Delivered
                                                    </TableCell>


                                                    <TableCell align="center" component="th" scope="row">
                                                        <Button disabled variant='contained'

                                                            sx={{
                                                                backgroundColor: '#f30c1c',
                                                                '&:hover': {
                                                                    backgroundColor: '#FCAB04',

                                                                }
                                                            }} > Order Delivered</Button>
                                                    </TableCell>
                                                </>
                                            )}
                                            {row.status === 'Processing' && (
                                                <>
                                                    <TableCell component="th" scope="row">
                                                        Pending
                                                    </TableCell>


                                                    <TableCell align="center" component="th" scope="row">
                                                        <Button variant='contained'
                                                            onClick={() => {
                                                                dispatch(getOrderDetails(row.id))
                                                                const formData = new FormData();
                                                                formData.set('orderStatus', status);
                                                                dispatch(updateOrder(row.id, formData))
                                                                setOpenOrderConfirmation(false)
                                                            }}
                                                            sx={{
                                                                backgroundColor: '#f30c1c',
                                                                '&:hover': {
                                                                    backgroundColor: '#FCAB04',

                                                                }
                                                            }} > Mark As Delivered</Button>
                                                    </TableCell>
                                                </>
                                            )}



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
                                            rowsPerPageOptions={[3, 10, 25, { label: 'All', value: -1 }]}
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

                <OrderConfirmation
                    title="Employee Form"
                    openPopup={openOrderConfirmation}
                    setOpenPopup={setOpenOrderConfirmation}
                >

                </OrderConfirmation>


            </Grid>
        </>
    )
}

export default AdminManageOrders