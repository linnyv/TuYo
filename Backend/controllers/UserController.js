const User = require('../models/userModel')

const jWebToken = require('jsonwebtoken')

const crear =(_id) => {
    return jWebToken.sign({_id}), process.env.SECRETO, { expiresIn: '7d'}
}

const userLogin = async (req, res) => {
    const {username, email, password} = req.body
  
    try {
      const user = await User.userLogin(username, email, password)
  
      const token =crear(user._id)
  
      res.status(200).json({email, token})
    }
    catch (error) {
      res.status(400).json('Something is wrong, these are not the droids we are looking for!');
    }
}

const joinTheCult = async (req, res) => {
  const {username, email, password} = req.body
  
  try {
    const user = await User.joinTheCult(username, email, password)

    const token =crear(user._id)

    res.status(200).json({email, token})
  }
  catch (error) {
    res.status(400).json('Something is wrong, these are not the droids we are looking for!');
  }
};

module.exports = { userLogin, joinTheCult };