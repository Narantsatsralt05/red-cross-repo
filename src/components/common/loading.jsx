import React from 'react'
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Box} from '../core/box'
import {Stack} from "../core/stack"
import gif from "../../assets/image/loginBg.png"
export const Loading = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };

    const [open, setOpen] = React.useState(true);
    return (
        <Stack height='100vh' width='100vw' justifyContent='center' alignItens='center'>
            <Box url={gif} height='150px' width='150px'/>
        </Stack>
     
    )
}