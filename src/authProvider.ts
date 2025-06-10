const authProvider = {
    login: ({ username, password }: any) =>  {
        // In a real app, you would call your API to authenticate
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        return Promise.reject('Invalid username or password');
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },
    checkError:  (error: any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // Other error handling can be added here
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
    // getIdentity: () => { /* ... */ }, // Optional: To get user profile
};

export default authProvider; 