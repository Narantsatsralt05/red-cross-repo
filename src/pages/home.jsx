import React from "react";
import { InformationSection, Stack } from "../components";
import Delete from "../components/common/delete";
import RightBar from "../components/common/rightBar";
import LeftBar from "../components/home/userInformation";

const Home = () => {

    return <Stack width='100vw' direction='column'>
        <InformationSection path='/user/Y2Aiw9KPlijMFfTHIpsy/helpType' />
        <Delete />
    </Stack>
}
export default Home;