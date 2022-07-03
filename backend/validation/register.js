const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Le Nom est requis!';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email invalid!';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email requis!';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Le mot de passe doit avoir 6 chars!';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Mot de passe requis!';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}