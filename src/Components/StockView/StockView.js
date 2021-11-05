import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios"
import { useEffect, useState } from 'react';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import { dataActions } from '../../store/data-slice';
import Spinner from '../Spinner/Spinner';
import { StyledTableRow } from './CustomTableRow/CustomTableRow.Styled';


const adaptCoinData = (data, coins, currencies, imges) => {
  //data is data.display
  let coinDataObject = [];
  for (let i = 0; i < coins.length; i++) {
    coinDataObject.push({ id: i, title: coins[i],
       img: 'https://www.cryptocompare.com/'+data[coins[i]][currencies[0]].IMAGEURL, data: [] });
    for (let j = 0; j < currencies.length; j++) {
      coinDataObject[i].data.push({
        priceTitle: coins[i] + currencies[j],
        price: data[coins[i]][currencies[j]].PRICE,
        changePerHour: data[coins[i]][currencies[j]].CHANGEPCTHOUR,
        changePerDay: data[coins[i]][currencies[j]].CHANGEPCT24HOUR,
        // img: 'https://www.cryptocompare.com/'+data[coins[i]][currencies[j]].IMAGEURL,
        isFavorite: false
      })
    }
  }
  // const {PRICE,CHANGEPCT24HOUR} = data[coins[0]][currencies[0]];
  // console.log(PRICE, CHANGEPCT24HOUR);
  return coinDataObject;
}
const StockView = function StockView(props) {
  // const data = useSelector(state => state.data.data);
  const key = "4ebc065dcb065b4c42eea8129846c459fc7c83959697e68a7ac2acf085b79c04";
  const query = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + props.coins.join() + "&tsyms=" + props.currencies.join();
  useEffect(() => {
    // console.log(props.data)
    const axiosGet = async () => {
      const response = await axios.get(query, { headers: { "authorization": `Apikey ${key}` } });
      store.dispatch(dataActions.addData(adaptCoinData(response.data.DISPLAY, props.coins, props.currencies)));
      //  console.log(adaptCoinData(response.data.DISPLAY, coins, currencies));
      // console.log("response");
      // console.log(response.data.DISPLAY);
    }
    const setIntervalImmediately = (func, interval) => {
      func();
      return setInterval(func, interval);
    }
    const id = setIntervalImmediately(axiosGet, 8000);
    return () => {
      clearInterval(id);
    }

  }, [query]);




  return (
    <>
      {/* {isDataLoaded ? <Spinner sx={{ backgroundColor: "black" }} /> : */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="spanning table">
            {props.data.map((coin) => (
              <React.Fragment key={coin.id}>
                <TableHead key={coin.id}>
                  <TableRow >
                    <TableCell sx={{ fontSize: 'inherit', color: 'white', backgroundColor: '#C1C1C1'}} align="left" colSpan={5}>
                      <img style={{ backgroundColor: "white", marginRight: "5px",height:"30px",width:"30px" }} src={coin.img} alt="img" />{coin.title}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody >
                  {coin.data.map((row, index) => (
                    // <TableRow sx={{ fontSize: '0.7em', backgroundColor: `${row.isFavorite ? '#1b1203' : 'black'}` }} key={row.priceTitle}>
                    <StyledTableRow $fav={row.isFavorite} $flashColor={row.changePerHour > 0 ? 'green' : 'red'} key={index}>
                      <TableCell sx={{ fontSize: 'inherit', color: 'gray', paddingTop: '1px', paddingBottom: '1px', border: 'none' }} align="left">{row.priceTitle}</TableCell>
                      <TableCell sx={{ fontSize: 'inherit', paddingTop: '1px', paddingBottom: '1px', paddingRight: '50px', color: 'gray', border: 'none' }} align="right">{row.price}</TableCell>
                      <TableCell sx={{ fontSize: 'inherit', color: `${row.changePerHour > 0 ? 'green' : 'red'}`, paddingTop: '1px', paddingBottom: '1px', border: 'none' }} align="center">
                        {row.changePerHour > 0 ? `+${row.changePerHour}%` : `${row.changePerHour}%`}
                      </TableCell>
                      <TableCell sx={{ fontSize: 'inherit', paddingTop: '1px', color: `${row.changePerDay > 0 ? 'green' : 'red'}`, paddingBottom: '1px', border: 'none' }} align="right">{row.changePerDay}%</TableCell>
                      <TableCell onClick={() => props.onFavorite(coin.title, row)} sx={{ fontSize: '0.4em', cursor: 'pointer', color: `${row.isFavorite ? '#e3991e' : 'gray'}`, paddingTop: '1px', paddingBottom: '1px', border: 'none' }} align="center"><StarIcon /></TableCell>
                    </StyledTableRow>
                    // </TableRow>
                  ))}
                </TableBody>
              </React.Fragment>
            ))}
          </Table>
        </TableContainer>
      {/* } */}
    </>

  );
}

export default StockView;



