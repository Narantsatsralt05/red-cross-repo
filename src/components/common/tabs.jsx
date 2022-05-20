
import { Stack } from '../core/stack';
import { Border } from '../core/border';
import { useState } from 'react';
import { Text } from '../core/text';
import styled from 'styled-components';
const RowButton = styled.button`
  height: ${(props) => (props.column ? 'fit-content' : '100%')};
  width: ${(props) => (props.column ? '320px' : 'fit-content')};
  border: none;
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.column ? '0px' : '20px')};
  margin-left: ${(props) => (props.column ? 'px' : '20px')};
  margin-top: ${(props) => (props.column ? '30px' : '20px')};
  padding-bottom: ${(props) => (props.column ? '0px' : '20px')};
  background: none;
  font-size: ${(props) => (props.column ? '18px' : '20px')};
  font-weight: 200;
  cursor: pointer;
  text-align: left;
  display: flex;
  &:focus {
    border-bottom: ${(props) => (props.row ? '2px solid #0066B3' : 'none')};
    border-left: ${(props) => (props.column ? '2px solid #0066B3' : 'none')};
    font-weight: 600;
  }
`;

export const Tabs = ({ type, data }) => {
  const [activeTab, setactiveTab] = useState();
  const RowButton = styled.button`
  height: ${props => props.column ? 'fit-content' : '100%'};
  width: ${props => props.column ? '' : 'fit-content'};
  border: none;
  display: flex;
  align-items: center;
  margin-right: ${props => props.column ? '0px' : '20px'};
  margin-left: ${props => props.column ? 'px' : '20px'};
  margin-top: ${props => props.column ? '30px' : '20px'};
  padding-bottom: ${props => props.column ? '0px' : '20px'};
  background: none;
  font-size: ${props => props.column ? '18px' : '20px'};
  font-weight: 200;
  cursor: pointer;
  text-align: left;
  display: flex;
    @media(min-width: 1000px) {
        width :${props => props.column ? '' : 'fit-content'};
      }
      @media(min-width: 1400px) {
        width :${props => props.column ? '300px' : 'fit-content'};
      }
  &:focus {
      border-bottom: ${props => props.row ? '2px solid #0066B3' : 'none'};
      border-left: ${props => props.column ? '2px solid #0066B3' : 'none'};
      font-weight: 600;
   
  }`
  return (
    <Stack direction={type === 'row' ? 'column' : 'row'} justifyContent='start' width='100vw'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {type == 'row' ? (
          <Border
            borderColor="#E5E5E5"
            borderRadius="10px"
            style={{ width: '100%', paddingBottom: '10px', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          >
            <div
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                paddingBottom: '16px',
                paddingTop: '25px',
              }}
            >
              {data.headers.map((item, index) => {
                return (
                  <RowButton
                    row
                    key={index}
                    onClick={() => {
                      setactiveTab(index);
                    }}
                  >
                    {item.text}
                  </RowButton>
                );
              })}
            </div>
          </Border>
        ) : type == 'column' ? (
          <div style={{ marginLeft: '10px', marginTop: '1%' }}>
            <Border borderColor="#E5E5E5" borderRadius="10px" >
              <Stack height="90vh" direction="column" >
                {data ? (
                  data.headers.map((item, index) => {
                    return (
                      <RowButton
                        column
                        key={index}
                        onClick={() => {
                          setactiveTab(index);
                        }}
                      >
                        <img style={{ marginRight: '10px', width: '25px' }} src={item.icon.src} />
                        <Hide >{item.text}</Hide>
                      </RowButton>
                    );
                  })
                ) : (
                  <div> give data</div>
                )}
              </Stack>
              <p style={{ fontSize: '10px', color: '#757575', fontWeight: '300', left: '14px', bottom: '12px' }}>
                @ 2018-2021 Монголын улаан загалмай нийгэмлэг
              </p>
            </Border>
          </div>
        ) : (
          <div>give the type of tabs</div>
        )}
      </div>
      <Stack width='100%'>
        {data ? data.body[activeTab] : ''}
      </Stack>
    </Stack>
  );
};
