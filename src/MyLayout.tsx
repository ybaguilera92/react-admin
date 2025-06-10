import { Layout, Notification } from 'react-admin';
import React from 'react';
import { CssBaseline } from '@mui/material';

const MyLayout: React.FC = (props) => (
    <React.Fragment>
        <CssBaseline />
        <Layout
            {...props}
            notification={Notification}
        />
    </React.Fragment>
);

export default MyLayout; 