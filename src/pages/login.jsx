import styled from 'styled-components';
import UseOnPC from './login/UseOnPC';
import UseOnTablet from './login/UseOnTablet';
import UseOnPhone from './login/UseOnPhone';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { useEffect } from 'react';

const Login = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user != null) {
      router.push('/checker');
    }
  }, [user]);

  const OnMobile = styled.div`
    @media (min-width: 450px) {
      display: none;
    }
  `;
  const OnPc = styled.div`
    @media (max-width: 900px) {
      display: none;
    }
  `;
  const OnTablet = styled.div`
    display: block;
    @media (min-width: 900px) {
      display: none;
    }
    @media (max-width: 450px) {
      display: none;
    }
  `;

  <UseOnPC />;
  <UseOnTablet />;
  <UseOnPhone />;
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
