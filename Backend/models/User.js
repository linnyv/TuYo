const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        maxlength: 27,
        minlength: 3,
        match: /^[0-9_A-Za-z]+$/
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return correoRegex.test(value);
            },
            message: 'Email is not correct.'
        }
    },
    password: { 
        type: String, 
        required: true,
        validate: [
            {
            validator: function (value) {
                return value.length >=11;
            },
            message: 'Password is short, it needs to least be 11 characters.'
            }, 

            {
            validator: function (value) {
                return /[0-9]/.test(value);
            },
            message: 'Password is missing at least one number.'
            }, 
            
            {
            validator: function (value) {
                return /[.!#@&*$^]/.test(value);
            },
            message: 'Password is missing at least one special character.'
            }, 

            {
            validator: function (value) {
                return /[A-Z]/.test(value);
            },
            message: 'Password is missing at least one Uppercase letter'
            },

            {
            validator: function (value) {
                return /[a-z]/.test(value);
            },
            message: 'Password is missing at least one Lppercase letter'
            },
        ]
    }
});

UserSchema.statics.signup = async function (username, email, password) {
    const existeEmail = await this.findOne ({email});
    if (existeEmail) {
        throw new Error('You sure, you don`t have an account with us because this email is registered.');
   }

    const existeUsername = await this.findOne ({username});
    if (existeUsername) {
        throw new Error('Username already taken, try another one');
    }

    const sal = await bcrypt.genSalt(11)

    const potatoes = await bcrypt.hash(password,sal);

    const user = await this.create ({username, email, password: potatoes});
    
    return user;
};

UserSchema.statics.login = async function (username, email, password) {

    if (!username ||!email || password) {
        throw new Error ('We need all the info');
    }

const user = await this.findOne({email})
if (!user) {
    throw new Error('Thats not the right email');
}

const match = await bcrypt.compare(passsword, user.password)
if(!match) {
    throw new Error ('Thats not the right password');
}
    return user;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;