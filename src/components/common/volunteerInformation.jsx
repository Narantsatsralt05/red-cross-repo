import React from 'react';
import Image from 'next/image';
import { Margin, Stack, Text, Border, Padding } from '..';
import line from '../../assets/icon/line.svg';
import plus from '../../assets/icon/plus.svg';
import shape from '../../assets/icon/Shape.svg';
import Styledinput from '../core/input';
import excel from '../../assets/icon/excel.svg';

export const VolunteerInformation = () => {
  const HeadNames = ({ text }) => {
    return (
      <Padding size={[0, 0, 5, 0]}>
        <Border
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)' }}
          borderColor="#EDEDED"
          borderRadius="10px"
          overFlow="hidden"
        >
          <Stack bg="#FFFFFF" width="100%" height="80px" justifyContent="flex-start" alignItems="center">
            <Margin size={[0, 0, 0, 30]}>
              <Stack direction="column" gap="10px">
                <Text type="H2">{text}</Text>
                <Stack bg="#0066B3" width="100%" height="1px" />
              </Stack>
            </Margin>
          </Stack>
        </Border>
      </Padding>
    );
  };
  return (
    <Stack bg="#FAFAFA" height="calc(100vh - 180px)" width="calc(100vw - 115px)" direction="column">
      <HeadNames text="САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ" />
      <Margin size={[20, 0, 0, 35]}>
        <Stack width="100%" justifyContent="space-between" alignItems="center">
          <Stack width="24%" justifyContent="space-between" alignItems="center">
            <Text type="T2" style={{ textAlign: 'center' }}>
              Бүртгэлтэй сайн дурын ажлын жагсаалт (5)
            </Text>
            <Image src={line}></Image>
            <Image src={plus}></Image>
            <Text type="T2">Нэмэх</Text>
          </Stack>
          <Margin size={[0, 80, 0, 0]}>
            <Stack justifyContent="space-evenly" gap="25">
              <Image src={shape}></Image>
              <Styledinput width="350px" placeholder="хайх"></Styledinput>
              <Image src={excel}></Image>
            </Stack>
          </Margin>
        </Stack>
      </Margin>
    </Stack>
  );
};
