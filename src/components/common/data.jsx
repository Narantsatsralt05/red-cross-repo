import { DataCon, Text } from './styled-component';

const Data = ({ color, text, value }) => {
  return (
    <div>
      <DataCon color={color}>
        <Text fontSize="15px">{text ? text : 'xxx'}</Text>
        <div style={{ height: '60px', border: '0.2px solid white', position: 'absolute', opacity: '0.3' }}></div>
        <Text type="H1" number>
          {value ? value : '###'}
        </Text>
      </DataCon>
    </div>
  );
};

export { Data };
