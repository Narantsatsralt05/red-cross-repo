import React, { useState } from 'react';
import { Border, Stack, Text, Margin } from '..';
import { useCollection } from '../../hooks';

const HalfInformationSection = ({ first, second, third, fourth, fifth }) => {
  return (
    <>
      <Border borderType="solid" borderColor="rgba(0, 0, 0, 0.1);" borderWidth={[0.5, 1, 0.5, 1]} />
      <Margin size={[15, 15, 15, 15]}>
        <Stack direction="row">
          <Stack width="20vw">
            <Text color="#0085FF" fontSize="15px">
              {first}
            </Text>
          </Stack>
          <Stack width="20vw">
            <Text color="#000000" fontSize="15px">
              {second}
            </Text>
          </Stack>
          <Stack width="20vw">
            <Text color="#000000" fontSize="15px">
              {third}
            </Text>
          </Stack>
          <Stack width="20vw">
            <Text color="#000000" fontSize="15px">
              {fourth}
            </Text>
          </Stack>
          <Stack width="20vw">
            <Text color="#000000" fontSize="15px">
              {fifth}
            </Text>
          </Stack>
        </Stack>
      </Margin>
    </>
  );
};

export const InformationSection = ({ path }) => {
  const { data } = useCollection(path);
  const type = path.split('/').slice(-1)[0];

  return (
    <Margin size={[35, 30, 10, 30]}>
      <Stack justifyContent="flex-start" direction="column">
        <Stack justifyContent="flex-start" direction="row" alignItems="center">
          <Margin size={[20, 10, 20, 10]}>
            <Text color="#000000" fontSize="20px">
              {type === 'sainDur'
                ? 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ'
                : type === 'surgalt'
                ? 'СУРГАЛТ'
                : type === 'urChadvar'
                ? 'УР ЧАДВАР'
                : type === 'memberType'
                ? 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ'
                : 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ'}
            </Text>
          </Margin>
          <Margin size={[0, 20, 0, 20]}>
            <Border borderType="solid" borderColor="#7A7A7A" borderWidth={[30, 0.5, 30, 0.5]} />
          </Margin>
          <Margin size={[0, 0, 5, 0]}>
            <Text color="#818181" fontSize="50px">
              +
            </Text>
          </Margin>
          <Margin size={[0, 0, 0, 20]}>
            <Text color="#000000" fontSize="22px">
              Нэмэх
            </Text>
          </Margin>
        </Stack>
        <Margin size={[25, 0, 0, 0]}>
          <Border borderType="solid" borderColor="rgba(0, 0, 0, 0.1);" borderWidth={[1, 1, 1, 1]} borderRadius="5">
            <Stack direction="column">
              <Margin size={[15, 15, 15, 15]}>
                <Stack direction="row">
                  <Stack width="20vw">
                    <Text color="#2C2C2C" fontSize="15px">
                      {type === 'sainDur'
                        ? 'Сайн дурын ажил'
                        : type === 'surgalt'
                        ? 'Сургалтын төрөл'
                        : type === 'urChadvar'
                        ? 'Ур чадвар'
                        : type === 'memberType'
                        ? 'Гишүүнчлэлийн төрөл'
                        : 'Тусламжийн төрөл'}
                    </Text>
                  </Stack>
                  <Stack width="20vw">
                    <Text color="#2C2C2C" fontSize="15px">
                      {type === 'sainDur'
                        ? 'Хугацаа'
                        : type === 'surgalt'
                        ? 'Хэзээ'
                        : type === 'urChadvar'
                        ? 'Ур чадварын түвшин'
                        : type === 'memberType'
                        ? 'Эхэлсэн'
                        : 'Эхэлсэн'}
                    </Text>
                  </Stack>
                  <Stack width="20vw">
                    <Text color="#2C2C2C" fontSize="15px">
                      {type === 'sainDur'
                        ? 'Он сар өдөр'
                        : type === 'surgalt'
                        ? 'Хаана'
                        : type === 'urChadvar'
                        ? 'Тайлбар'
                        : type === 'memberType'
                        ? 'Дууссан'
                        : 'Дууссан'}
                    </Text>
                  </Stack>
                  <Stack width="20vw">
                    <Text color="#000000">
                      {type === 'sainDur'
                        ? 'Нэмэлт мэдээлэл'
                        : type === 'surgalt'
                        ? 'Сургалтын хугацаа /цагаар/'
                        : type === 'urChadvar'
                        ? ''
                        : type === 'memberType'
                        ? 'Нэмэлт мэдээлэл'
                        : 'Нэмэлт мэдээлэл'}
                    </Text>
                  </Stack>
                  <Stack width="20vw">
                    <Text color="#000000">
                      {type === 'sainDur'
                        ? ''
                        : type === 'surgalt'
                        ? 'Нэмэлт мэдээлэл'
                        : type === 'urChadvar'
                        ? ''
                        : type === 'memberType'
                        ? ''
                        : ''}
                    </Text>
                  </Stack>
                </Stack>
              </Margin>
              {data.map((el, index) => {
                return (
                  <HalfInformationSection
                    first={el.first}
                    second={el.second}
                    key={index}
                    third={el.third}
                    fourth={el.fourth}
                    fifth={el.fifth}
                  />
                );
              })}
            </Stack>
          </Border>
        </Margin>
      </Stack>
    </Margin>
  );
};


{/* <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/sainDur"/> */}
//ingej ashiglana