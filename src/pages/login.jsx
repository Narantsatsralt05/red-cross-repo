import styled from 'styled-components';
import UseOnPC from '../login/UseOnPC';
import UseOnTablet from '../login/UseOnTablet';
import UseOnPhone from '../login/UseOnPhone';

const Login = () => {

  const OnMobile = styled.div`
    @media (min-width: 450px) {
      display: none;
    }
  `;
  const OnPc = styled.div`
    @media (max-width: 450px) {
      display: none;
    }
  `;
  const OnTablet = styled.div`
    @media (min-width: 451px) {
      display: none;
    }
  `;

  <UseOnPC/>;
  <UseOnTablet/>;
  <UseOnPhone/>;
  return (
    <div>
      <OnPc>
        <UseOnPC />
      </OnPc>
      <OnMobile>
        <UseOnPhone />
      </OnMobile>
      <OnTablet>
        <UseOnTablet />
      </OnTablet>
    </div>
  );
};

export default Login;