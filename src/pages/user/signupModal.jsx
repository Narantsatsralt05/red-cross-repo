import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Check from '../../assets/icon/check.svg';
import { Stack, Margin, Text } from '../../components';

const style = {
  position: 'absolute',
  top: '8%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '0.5px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    console.log('check', Check);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row">
            <Margin size={[0, 20, 0, 0]}>
              <img src={Check.src}/>
            </Margin>
            <Typography id="modal-modal-description">
              Хэрэглэгч таны мэдээлэл амжилттай бүртгэгдлээ.
              <Text cursor="pointer" color="#0066B3">
                ЭНД
              </Text>{' '}
              дарж нэвтрэх хуудас руу шилжих боломжтой.
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
