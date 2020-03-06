const login = (data) => {
    return {
        type: 'LOGIN',
        data,
    };
};
const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

module.exports = {login, logout}