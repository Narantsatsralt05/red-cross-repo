import styled from "styled-components";

const Stat = styled.div`
    height: 20px;
    width: 38px;
    border-radius: 8px;
    background-color: ${props => props.green ? '#1A9460' : props.grey ? '#626262' : '#0066B3'};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
`

const Status = ({role}) => {
    return <div>
        {role == 'grey' ? <Stat grey>гиш</Stat> : role == 'green' ? <Stat green>тх</Stat> : role == 'blue' ? <Stat>сди</Stat> : <Stat>сди</Stat>}
    </div>
}

export {Status};