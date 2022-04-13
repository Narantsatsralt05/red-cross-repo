import React from 'react'
import { Button, Stack } from '..'
import { FullShadow } from '../core/shadow'

const Delete = () => {
    return (<>
        <Stack width='172px' height='66px' bg='red'>
            Устгах уу?
            <Button>Үгүй</Button>
            <Button>Тийм</Button>
        </Stack>
        <div className="" style={{ width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderTop: '35px solid red', marginLeft: '90px' }}></div>  </>

    )
}

export default Delete