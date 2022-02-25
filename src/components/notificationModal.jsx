import React from "react";
import { NotificationModalStyle } from ".";

const NotificationModal = ({ bc, bg, title, description, color, isVisible }) => {
    return (
        <NotificationModalStyle isVisible={isVisible} bg={bg} bc={bc} color={color}>
            <div style={{ color: "green" }}>{title}</div>
            <div>{description}</div>
        </NotificationModalStyle>
    );
};
export { NotificationModal };

{/* <NotificationModal
        isVisible={isVisible}
        bg="#7E7E7E"
        bc="green"
        color="#fff"
        title="Амжилттай"
        description="Таны бүртгэл амжилттай нэмэгдлээ."
      /> */}