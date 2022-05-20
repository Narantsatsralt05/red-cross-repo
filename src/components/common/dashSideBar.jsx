import logo from '../../assets/icon/logo.svg'
import blue from '../../assets/icon/blue.svg'
import green from '../../assets/icon/green.svg'
import grey from '../../assets/icon/grey.svg'
import { Stack } from '../core/stack';
import { AddIcon } from '../../assets/icon/addIcon';
import { Padding } from '../core/padding';

export const DashSideBar = () => {
    return (
        <div style={{ height: '100%', width: 'fit-content',position:"absolute", left: '0', top: '0', paddingTop: '20px', borderRight: '2px solid #E8E8E8', display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px', justifyContent: 'space-between' }}>
            <div>
                <Stack style={{ borderBottom: '1px solid #CACACA', width: 'fit-content', paddingBottom: '25px', paddingRight: '20px', marginBottom: '18px' }} flexDirection={'row'}>
                    <img src={logo.src} alt="logo" width={80} />
                    <h1 style={{ fontSize: '30px', fontWeight: '500', color: '#0066B3', marginLeft: '10px'}}>МУЗН</h1>
                </Stack>
                <button style={{ width: 'fit-content', height: 'fit-content', border: 'none', background: '#ED1D24', borderRadius: '6px' }}>
                    <Padding style={{ color: 'white', fontSize: '18px', fontWeight: '500' }} size={[6, 30, 3]}>
                        <Stack flexDirection={'row'}>
                            <AddIcon width={20} />
                            БҮРТГЭЛ НЭМЭХ
                        </Stack>
                    </Padding>
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '30px' }}>
                    <button className='btn' style={{border: 'none', background: 'none',}}>
                        <Stack>
                            <img src={blue.src} alt="sdi" />
                            <div style={{ marginLeft: '4px', width: '200px', textAlign: 'left', color: '#424242', fontSize: '15px', fontWeight: '300', display: 'flex', alignItems: 'center' }}>САЙН ДУРЫН ИДЭВХТНИЙ ЖАГСААЛТ</div>
                        </Stack>
                    </button>
                    <button className='btn' style={{border: 'none', background: 'none',}}>
                        <Stack>
                            <img src={grey.src} alt="gish" />
                            <div style={{ marginLeft: '4px', width: '200px', textAlign: 'left', color: '#424242', fontSize: '15px', fontWeight: '300', display: 'flex', alignItems: 'center' }}>ГИШҮҮНИЙ ЖАГСААЛТ</div>
                        </Stack>
                    </button>
                    <button className='btn' style={{border: 'none', background: 'none',}}>
                        <Stack>
                            <img src={green.src} alt="th" />
                            <div style={{ marginLeft: '4px', width: '200px', textAlign: 'left', color: '#424242', fontSize: '15px', fontWeight: '300', display: 'flex', alignItems: 'center' }}>ТУСЛАМЖ ХҮРТЭГЧИЙН ЖАГСААЛТ</div>
                        </Stack>
                    </button>
                </div>
            </div>
            <p style={{ fontSize: '10px', color: '#757575', fontWeight: '300', left: '14px', bottom: '12px' }}>@ 2018-2021 Монголын улаан загалмай нийгэмлэг</p>
        </div>
    )
}