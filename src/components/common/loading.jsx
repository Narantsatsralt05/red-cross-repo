import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Loading = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };

    const [open, setOpen] = React.useState(true);
    
    // const [loading, setLoading] = useState(false)
    // const Change = () => {
    //   setLoading(!loading)
    // }
            
            
    // {loading ? <Loading /> : ''}
    // <button onClick={Change}>heleo</button>
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </Box>
            </Modal>
        </div>
    )
}

export default Loading