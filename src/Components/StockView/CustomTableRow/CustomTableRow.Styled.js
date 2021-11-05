import { TableRow } from '@mui/material'
import styled, { keyframes } from 'styled-components'

const flash = (color) => keyframes`
    0% {
        background-color: ${color};
        opacity:1;
    }
    22% {
        background-color: ${color};
    }
    77% {
        background-color: ${color};

    }
    100% {
        background-color: gray;

    }
`

export const StyledTableRow = styled(TableRow)`
font-size: '0.7em';
background-color: ${({$fav})=>$fav?'#1b1203':'white'};
animation: 800ms ${({$flashColor})=>flash($flashColor)} ease-in-out;

/* animation-duration: 900ms;
animation-iteration-count: 1;
animation-timing-function: ease-in-out; */

`
/* animation: 1s ${({flashColor})=>
flashColor>0?flash('green')
:flashColor<0?flash('red'):
flash('gray')
}ease-out; */
/* background-color: `${ row.isFavorite ?'#1b1203': 'black'}`; */