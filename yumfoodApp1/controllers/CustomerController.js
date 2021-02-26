const { Customer } = require('../models');

class CustomerController{

  static getData(req, res, next) {
    Customer.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async addCustomer(req, res, next) {
    const {
      name,
      address,
      tlp
    } = req.body;

    try {
      const customer = await Customer.create({
        name,
        address,
        tlp
      });

      res.status(201).json({
        id: customer.id,
        name: customer.name,
        address: customer.address,
        tlp: customer.tlp
      });

    } catch (error) {
      next(error);
    }
  }

  static async editCustomer(req, res, next) {
    const id = +req.params.id;
    const {
      name,
      address,
      tlp
    } = req.body;

    try {
      const customer = await Customer.update({
        name,
        address,
        tlp
      }, {where: {'id': id}});

      res.status(201).json({msg: "Sukses Update ... ",customer})

    } catch (error) {
      next(error);
    }
  }

  static deleteCustomer(req, res, next) {
    const id = +req.params.id;
    Customer.destroy({where: {'id': id}})
      .then(data => {
        res.status(201).json({msg: "Sukses Delete ..."});
      })
      .catch(err => {
        next(err);
      })
  }
}

module.exports = CustomerController;