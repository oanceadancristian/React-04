const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

router.patch('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await User.findOneAndUpdate({ firstName: req.body.firstName });
    await User.findOneAndUpdate({ lastName: req.body.lastName });
    await User.findOneAndUpdate({ email: req.body.email });
    await User.findOneAndUpdate({ password: hashPassword });

    res.status(201).send({
      userFirstName: req.body.firstName,
      userLastName: req.body.lastName,
      userEmail: req.body.email,
      message: 'Account updated successfully!',
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error!' });
  }
});

module.exports = router;
