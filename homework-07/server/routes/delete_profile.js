const router = require('express').Router();
const { User, validate } = require('../models/user');

router.delete('/:userId', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    await User.findByIdAndDelete({ _id: req.params.userId });
    res.status(201).send({
      message: 'Account deleted successfully!',
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error!' });
  }
});

module.exports = router;
