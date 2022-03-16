import React from "react";
import styled from "styled-components";

const NotificationModalStyle = styled.div`
  position: fixed;
  bottom: 2vh;
  right: 1vw;
  width: 10vw;
  height: 8vh;
  color: ${({ color }) => color};
  border-left: 2px solid ${({ bc }) => bc};
  border-top: 2px solid ${({ bc }) => bc};
  border-bottom: 2px solid ${({ bc }) => bc};
  border-right: 2px solid ${({ bc }) => bc};  
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
`;
export { NotificationModalStyle };


const NotificationModal = ({ bc, bg, title, description, color, isVisible }) => {
    return (
        <NotificationModalStyle isVisible={isVisible} bg={bg} bc={bc} color={color}>
            <div style={{ color: "green" }}>{title}</div>
            <div>{description}</div>
        </NotificationModalStyle>
    );
};
export { NotificationModal };