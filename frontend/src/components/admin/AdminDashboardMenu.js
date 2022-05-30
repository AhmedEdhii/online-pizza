
import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, clearErrors } from '../../actions/productActions'

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
import AdminSidebar from './AdminSidebar';


// yeh nhi baanana abb
// function createData(name, prices, category, actions) {
//   return {
//     name,
//     prices,
//     category,
//     actions,
//   };
// }


const rows = [
  []
// createData('Pizza 1', 380, 'Pizza'),
// createData('Pizza 2', 380, 'Pizza'),
// createData('Pizza 3', 380, 'Pizza'),
// createData('Pizza 4', 380, 'Pizza'),
// createData('Pizza 5', 380, 'Pizza'),
// createData('Pizza 6', 380, 'Pizza'),
// createData('Pizza 7', 380, 'Drinks'),
// createData('Pizza 8', 450, 'Pizza'),
// createData('Pizza 9', 185, 'Pizza'),

];


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

function AdminDashboardMenu(props) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { loading, error, products } = useSelector(state => state.products);


  /*function createData(id, name, category, url, price, small, regular, large, jumbo) {
    return { id, name, category, url, price, small, regular, large, jumbo };
  }
  
  // need to pass products in this using props
  const rows = [
    products.forEach(product => {
      if (product.category === 'Pizzas') {
        createData(product._id, product.name, product.category, product.url, product.PizzaDetails.size.small, product.PizzaDetails.size.small,
          product.PizzaDetails.size.regular, product.PizzaDetails.size.large, product.PizzaDetails.size.jumbo
        )
      }
      else if (product.category === 'Beverages') {
        createData(product._id, product.name, product.category, product.url, product.BeverageDetails.price)
      }
      else if (product.category === 'Sauces') {
        createData(product._id, product.name, product.category, product.url, product.SauceDetails.price)
      }
    })
  ]; */

  const alert = useAlert();
  const dispatch = useDispatch();

  const Img = styled('img')({
    alignItems: "center",
    maxwidth: "100%",
    height: 80,
    padding: 1,
    margin: 1
  });
  


  const setProducts = () => {
    products.forEach(product => {
      if (product.category === 'Pizzas') {
        rows.push({
          name: product.name,
          small: product.PizzaDetails.size.small,
          regular: product.PizzaDetails.size.regular,
          large: product.PizzaDetails.size.large,
          jumbo: product.PizzaDetails.size.jumbo,
          category: product.category,
          url: product.url
        })
      }
      else if (product.category === 'Beverages') {
        rows.push({
          name: product.name,
          price: product.BeverageDetails.price,
          category: product.category,
          url: product.url
        })
      }
      else if (product.category === 'Sauces') {
        rows.push({
          name: product.name,
          price: product.SauceDetails.price,
          category: product.category,
          url: product.url
        })
      }
    })
    return rows;
  }
  console.log(rows);

  useEffect(() => {
    dispatch(getAdminProducts());
    setProducts();
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [])




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

      <MetaData title={'All Products'} />
     

        

          <Grid display='flex' sx={{ alignItems: 'center', paddingTop: 2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, }}>
              Menu
            </Typography>
            <Grid item sx={{ paddingRight: 9 }}>
              <Button variant='contained' startIcon={<AddCircleIcon />}>Add New Item</Button>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 2, marginBottom: 3 }} /><Grid display='flex' container rowSpacing={5} columnSpacing={8} sx={{ marginBottom: 8, width: "100%" }}>
            <Grid item xs={12} >


              <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                  <Table >

                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#E5E4E2" }}>

                        <TableCell align="left" sx={{ width: "200px", fontWeight: 'bold', }}>Name</TableCell>
                        <TableCell align="left" ></TableCell>
                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Prices</TableCell>
                        <TableCell align="left" sx={{ fontWeight: 'bold', }}>Category</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold', }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>

                    {!loading && (
                      <Fragment>
                        <TableBody>
                          {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                          ).map((row) => (
                            <Fragment>
                              {row.category === 'Pizzas' && (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                    <Img alt="complex" src={row.url} />
                                  </TableCell>
                                  <TableCell align="left">
                                    <TableCell align="left" sx={{ borderBottom: 0, m: 0, paddingLeft: 0, }}>
                                      Small <br></br> Medium <br></br> Large <br></br> Jumbo
                                    </TableCell>
                                    <TableCell align="right " sx={{ borderBottom: 0, m: 0, fontWeight: 'bold', }}>
                                      Rs. {row.small} <br></br> Rs. {row.regular} <br></br> Rs. {row.large} <br></br> Rs. {row.jumbo}
                                    </TableCell>
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                    {row.category}
                                  </TableCell>
                                  <TableCell align="center" component="th" scope="row">
                                    <IconButton
                                      onClick={console.log('success')}>
                                      <EditIcon color='success' />
                                    </IconButton>
                                    <IconButton
                                      onClick={console.log('success')}>
                                      <DeleteOutlineIcon color='error' />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              )}
                              {(row.category === 'Beverages' || row.category === 'Sauces') && (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                    <Img alt="complex" src={row.url} />
                                  </TableCell>
                                  <TableCell align="left">
                                    <TableCell align="left" sx={{ borderBottom: 0, m: 0, paddingLeft: 0, }}>
                                      Price
                                    </TableCell>
                                    <TableCell align="right " sx={{ borderBottom: 0, m: 0, fontWeight: 'bold', }}>
                                      Rs. {row.price}
                                    </TableCell>
                                  </TableCell>

                                  <TableCell component="th" scope="row">
                                    {row.category}
                                  </TableCell>
                                  <TableCell align="center" component="th" scope="row">
                                    <IconButton
                                      onClick={console.log('success')}>
                                      <EditIcon color='success' />
                                    </IconButton>
                                    <IconButton
                                      onClick={console.log('success')}>
                                      <DeleteOutlineIcon color='error' />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              )
                              }
                            </Fragment>
                          ))}



                          {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                              <TableCell colSpan={6} />
                            </TableRow>
                          )}
                        </TableBody>
                      </Fragment>
                    )}

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
          </Grid>
   
     


    </>
  )
}

export default AdminDashboardMenu