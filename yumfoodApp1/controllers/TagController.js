const { Tag } = require('../models');

class TagController{

  static getData(req, res, next) {
    Tag.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }
}

module.exports = TagController;