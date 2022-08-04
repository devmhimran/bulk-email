import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-slate-100 w-full h-screen'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;