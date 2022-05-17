import styled from 'styled-components';
import { Stack } from '../core/stack';
import { Border } from '../core/border';
import { useState } from 'react';
import { Text } from '../core/text';
import { RowButton } from '..';
// Ex:
// const dataH = {
//     headers: [
//       { text: 'Хувь хүний мэдээлэл', icon: profile },
//       { text: 'Сайн дурын ажлын мэдээлэл', icon: saindur },
//       { text: 'Гишүүнчлэлийн мэдээлэл', icon: people },
//       { text: 'Тусламжийн мэдээлэл', icon: help }
//     ],
//     body: [
//        <div>Хувь хүний мэдээлэл</div> ,
//        <div>Сайн дурын ажлын мэдээлэл</div> ,
//        <div>Гишүүнчлэлийн мэдээлэл</div> ,
//        <div>Тусламжийн мэдээлэл</div> ,
//     ]
//   }
//   const data = {
//     headers: [
//       { text: 'Нүүр' },
//       { text: 'Үндсэн мэдээлэл' }
//     ],
//     body: [
//       <div>nuur</div>,
//       <Tabs type={'column'} data={dataH} />
//     ]
//   }

export const Tabs = ({ type, data }) => {
  const [activeTab, setactiveTab] = useState();
  return (
    <Stack direction={type === 'row' ? 'column' : 'row'}>
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
          <div style={{ width: '18%', marginLeft: '10px', marginTop: '1%' }}>
            <Border borderColor="#E5E5E5" borderRadius="10px" style={{ width: '312px' }}>
              <Stack height="90vh" width="280px" direction="column">
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
                        <img style={{ marginRight: '10px', width: '25px' }} />
                        {/* src={item.icon.src} */}
                        <Text>{item.text}</Text>
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
      {data ? data.body[activeTab] : ''}
    </Stack>
  );
};
