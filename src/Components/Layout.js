import { Fragment, useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import StockView from "./StockView/StockView";
import { dataActions } from "../store/data-slice";
import store from "../store/store";
import { useSelector } from "react-redux";
import { StyledSelectButton } from "./Styled/StyledSelectButton";
// import Spinner from "./Spinner/Spinner";

const Layout = () => {
    const data = useSelector(state => state.data.data)
    const currencies = ["AUD", "BTC", "CAD", "ETH", "EUR", "GBP", "JPY", "USD", "USDT"];
    const [selected, setSelected] = useState(["BTC","XRP", "BCH"]);
    const onFavorite = (coin, rowItem) => {
        store.dispatch(dataActions.updateData({
            coin: coin,
            rowItem: rowItem
        }));
    }

    const updatedSelect = (coin) => {
        if (selected.includes(coin)) {
            setSelected(prevState=>prevState.filter(s => s !== coin))
        } else {
            setSelected(prevState=>[...prevState, coin])
        }
    }
    return (
        <Fragment>
            <Container maxWidth="sm">
                <Box sx={{
                    display: "flex",
                    paddingTop: '5px',
                    paddingBottom: '50px',
                    flexDirection: "column"
                }}>

                    <ButtonGroup sx={{ backgroundColor: '#C1C1C1',display:"flex"}} variant="contained" aria-label=" button group" >
                        <StyledSelectButton onClick={() => updatedSelect('XRP')} $isActive={selected.includes("XRP")}>XRP</StyledSelectButton>
                        <StyledSelectButton onClick={() => updatedSelect('BCH')} $isActive={selected.includes("BCH")}>BCH</StyledSelectButton>
                        <StyledSelectButton onClick={() => updatedSelect('BTC')} $isActive={selected.includes("BTC")}>BTC</StyledSelectButton>
                    </ButtonGroup>


                    {/* <DataList/> */}

                    <StockView coins={selected} currencies={currencies} data={data.filter(item => selected.includes(item.title))} onFavorite={onFavorite} />
                </Box>
            </Container>
        </Fragment>
    )
};
export default Layout;