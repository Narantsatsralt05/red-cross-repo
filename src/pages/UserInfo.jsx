import Menu from '../components/common/select';
import { Stack, Text, StyledInput, Box } from '../components';
import useTheme from '../theme/theme';

const UserInfo = () => {
  const sain = [{ text: 'Tiim' }, { text: 'Ugui' }];
  const member = [{ text: 's' }, { text: 's' }, { text: 's' }, { text: 's' }, { text: 's' }];
  const donor = [{ text: 'd' }, { text: 'd' }, { text: 'd' }, { text: 'd' }, { text: 'd' }];
  const kid = [{ text: 'k' }, { text: 'k' }, { text: 'k' }, { text: 'k' }, { text: 'k' }];
  const blood = [{ text: 'b' }, { text: 'b' }, { text: 'b' }, { text: 'b' }, { text: 'b' }];
  const city = [{ text: 'ub' }, { text: 'ub' }, { text: 'ub' }, { text: 'ub' }, { text: 'ub' }];
  return (
    <Stack width="100%" justifyContent="center">
      <Stack width="100%" direction="column">
        <Stack direction="row" gap="25">
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Сайн дурын идэвхтэн</Text>
            <Menu arr={sain} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Гишүүнчлэл</Text>
            <Menu arr={member} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Цусны донор</Text>
            <Menu arr={donor} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Хүүхэд залуучуудын хөдөлгөөний гишүүн</Text>
            <Menu arr={kid} />
          </Stack>
        </Stack>
        <Stack direction="row" gap="25">
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Цусны бүлэг</Text>
            <Menu arr={blood} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Амьдарч буй, аймаг/хот</Text>
            <Menu arr={city} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Сум/дүүрэг</Text>
            <Menu arr={city} />
          </Stack>
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Байр, орц, гудамж</Text>
            <StyledInput height="30px" width="300px"></StyledInput>
          </Stack>
        </Stack>
        <Stack direction="row" gap="25">
          <Stack direction="column" gap="5">
            <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх</Text>
            <Menu arr={city} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default UserInfo;
