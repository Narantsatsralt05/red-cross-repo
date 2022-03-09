import React from 'react'
import Stack from '../styled-component/stack'
import { StyledBorder } from '../components/styledBorder'
// import ImgBg from './image/Ellipse 1.svg'
import ImgBg from './image/Ellipse 1.svg'
import Men from './image/men 1.svg'
import Picture from '../styled-component/image'
import hand from './image/ims1 1.svg'
import { Margin } from '../styled-component/margin'
import { Padding } from '../styled-component/padding'

const UserCard = () => {
    return (
        <StyledBorder width='237px' height='129px' radius='10px' bc='#F9F9F9' className='bg'>
            <div className="font" >
                <Margin size={[0, 0, 0, 10]}>
                    <Stack justifyContent='start'>
                        <Picture src={ImgBg} width='49px' height="49px"></Picture>
                        <Margin size={[10, 0, 0, 10]}>
                            <strong>ОВОГ:</strong> ДАВАА
                            <Margin size={[5, 0, 0, 0]}>
                                <strong>НЭР:</strong>НЯМСАМБУУ
                            </Margin>
                        </Margin>
                    </Stack>
                </Margin>

                <Stack direction='column' justifyContent='start'>
                    <Margin size={[10, 0, 0, 20]}>
                        <strong>
                            РД:
                        </strong>
                        УК94092597
                    </Margin>
                    <Margin size={[3, 0, 0, 15]}>
                        <strong>
                            НАС:
                        </strong>
                        27
                    </Margin>
                    <Margin size={[3, 0, 0, 10]}>
                        <Stack>
                            <strong>
                                ХҮЙС:
                            </strong>
                            ЭРЭГТЭЙ
                            <Margin size={[0, 0, 0, 15  ]}>
                                <Picture src={'./image/ims1 1.svg'}>
                                </Picture>
                            </Margin>
                            <Margin size={[0, 0, 0, 15  ]}>
                                <Picture src={hand}>
                                </Picture>
                            </Margin>
                            <Margin size={[0, 0, 0, 15  ]}>
                                <Picture src={hand}>
                                </Picture>
                            </Margin>
                        </Stack>
                    </Margin>
                </Stack>
            </div>


        </StyledBorder>
    )
}

export default UserCard