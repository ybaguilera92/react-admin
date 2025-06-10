import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

// A simple theme for the login page
const theme = createTheme();

const MyLoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('Invalid username or password', { type: 'warning' })
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Card sx={{ minWidth: 300, maxWidth: 400 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom align="center">
                            Admin Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                {/* Notification component is required for useNotify to work */}
                <Notification /> 
            </div>
        </ThemeProvider>
    );
};

export default MyLoginPage; 