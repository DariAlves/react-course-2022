const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
    let errors = {};

    // Check the email field
    if(isEmpty(data.email)) {
        errors.email = 'Email field can not be empty';
    } else if(!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid, please provide a valid email';
    }

    // Check the password field
    if(isEmail(data.password)) {
        errors.password = 'Password field can not be empty';
    } else if(!validator.isLength(data.password, { min: 6, max: 150 })) {
        errors.password = 'Password must be between 6 and 150 characters long';
    }

    // Check confirm password field
    if(isEmail(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password field can not be empty';
    } else if(!validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Password and Confirm Password fields must match';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
};

module.exports = validateRegisterInput;