import React, { createContext, useContext, useState } from 'react';
import { Position, Stack } from '../../components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Text} from '../../components/core/text'
export const LoaderContext = createContext({});


export const LoaderProvider = (props) => {
    const { children } = props
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('Уншиж байна...')

    const setLoader = (props) => {
        setLoading(props)
    }

    const setMessage = (props) => {
        setContent(props)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };
    return (
        <LoaderContext.Provider value={{ setLoader, setMessage, loader: loading }}
        >
            {children}
            {loading &&
                <Stack justifyContent='center' style={{ position: 'absolute', top: '45vh', left: '45vw', zIndex: 1 }} direction='column'>
                    <Modal
                        open={true}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </Box>
                    </Modal>
                    <Text color='white'>
                        {content}
                    </Text>
                </Stack>
            }
        </LoaderContext.Provider>
    );
};

export const useLoaderContext = () => useContext(LoaderContext);