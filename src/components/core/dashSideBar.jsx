

export const DashSideBar = () => {
    return (
        <div style={{height: '100vh', width: '220px', borderRight: '2px solid #E8E8E8', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontSize: '25px', fontWeight: '500', color: '#0066B3'}}>МУЗН</h1>
            <button style={{width: '172px', height: '24px', border: 'none', background: '#ED1D24', borderRadius: '6px', color: 'white', fontSize: '12px', fontWeight: '500'}}>+ БҮРТГЭЛ НЭМЭХ</button>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>САЙН ДУРЫН ИДЭВХТНИЙ ЖАГСААЛТ</div>
                <div>ГИШҮҮНИЙ ЖАГСААЛТ</div>
                <div>ТУСЛАМЖ ХҮРТЭГЧИЙН ЖАГСААЛТ</div>
            </div>
        </div>
    )
}