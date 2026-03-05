export const validateName = (name) => {
    return name && name.trim().length > 0;
};
export const validatePassword = (password) => {
    // Basic validation: Password must be at least 4 characters for this boilerplate
    return password && password.length >= 4;
};
