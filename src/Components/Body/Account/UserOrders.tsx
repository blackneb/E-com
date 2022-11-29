import React, {useEffect} from 'react'
import axios from 'axios';
import { URL } from '../../../Redux/ActionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addbooks } from '../../../Redux/Actions';


import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
    BID: string,
    date: number,
    totalPrice: number,
  ) {
    return {
      BID,
      date,
      totalPrice,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.BID}
          </TableCell>
          <TableCell align="right">{row.date}</TableCell>
          <TableCell align="right">{row.totalPrice}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Detailed
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>CustomerID</TableCell>
                      <TableCell align="right">Booking ID</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
  ];

const UserOrders = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const userinfo = useSelector((state:any) => state.user);
  const booked = useSelector((state:any) => state.books);
  async function getbookeddata(){
    const sendjson = JSON.stringify(
        {
            userid : userinfo.userid
        }
    );
    try{
        let response = await axios.post(URL + "/read_booking.php", sendjson);
        dispatch(addbooks(response.data.data));
        console.log(response.data.data);
    }
    catch(error){
        console.log(error);
    }
}
    useEffect(() => {
        if(booked.length === 0){
            getbookeddata();
        }
    }, [])

  return (
    <div className=' '>
        <div className='shadow border-b-2 border-gray-400 mx-4 md:mx-16 mt-8'>
          <h1>Your Orders List</h1>
        </div>
        <div className='mt-8 mx-4 md:mx-16'>
            <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>BID</TableCell>
                    <TableCell align="right">date</TableCell>
                    <TableCell align="right">totalPrice</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row.BID} row={row} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default UserOrders
