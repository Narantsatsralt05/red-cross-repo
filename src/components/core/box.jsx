import React from 'react';
import styled from 'styled-components';

export const Box = ({ children, url, width, height }) => {

const Container = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
`;

 const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

 const Image = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  border-radius: 1px solid transparent;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
`;

  return (
    <Container>
      <Image url={'https://acegif.com/wp-content/uploads/loading-96.gif'} width={width} height={height}>
        <InnerContainer>{children}</InnerContainer>
      </Image>
    </Container>
  );
};
