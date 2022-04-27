
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import Dropdown from '../components/common/select';
const Home = () => {
    const { user } = useAuthContext();

    const router = useRouter();
    const option = [
        { 'text' : '1'},
        { 'text' : '2'},
        { 'text' : '3'},
        { 'text' : '4'}
    ]
    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);

    return <>
    <div style={{display:'flex', justifyContent:'space-between', width:'2000px'}}>
    <Dropdown arr={option}></Dropdown>
    <Dropdown arr={option}></Dropdown>
    <Dropdown arr={option}></Dropdown>
    <Dropdown arr={option}></Dropdown>
    </div>
    <div>
    <Dropdown arr={option}></Dropdown>
    <Dropdown arr={option}></Dropdown>
    </div>
    </>;
};
export default Home;