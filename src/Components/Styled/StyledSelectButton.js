import { Button } from "@mui/material";
import styled from 'styled-components'

export const StyledSelectButton = styled(Button)`
flex:1;
background-color: ${({$isActive})=>$isActive?"#898989":'#C1C1C1'};
`