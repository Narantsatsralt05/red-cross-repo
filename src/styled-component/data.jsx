import { DataCon, Text } from "./styled-component";

const Data = ({color, text, value}) => {
    return <div>
        <DataCon color={color} >
            <Text>{text ? text : 'xxx'}</Text>
            <div style={{height: '41px', border: '0.2px solid white', position: 'absolute'}}></div>
            <Text number>{value ? value : '###'}</Text>
        </DataCon>
    </div>
}

export {Data};