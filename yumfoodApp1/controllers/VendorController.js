const { Vendor } = require('../models');

class VendorController{

  static getData(req, res, next) {
    Vendor.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async addVendor(req, res, next) {
    const {
      name,
      logo,
      address,
      tlp
    } = req.body;

    try {
      const vendor = await Vendor.create({
        name,
        logo,
        address,
        tlp
      });

      res.status(201).json({
        id: vendor.id,
        name: vendor.name,
        logo: vendor.logo,
        address: vendor.address,
        tlp: vendor.tlp
      });

    } catch (error) {
      next(error);
    }
  }

  static async editVendor(req, res, next) {
    const id = +req.params.id;
    const {
      name,
      logo,
      address,
      tlp
    } = req.body;

    try {
      const vendor = await Vendor.update({
        name,
        logo,
        address,
        tlp
      }, {where: {'id': id}});

      res.status(201).json({msg: "Sukses Update ... ",vendor})

    } catch (error) {
      next(error);
    }
  }

  static deleteVendor(req, res, next) {
    const id = +req.params.id;
    Vendor.destroy({where: {'id': id}})
      .then(data => {
        res.status(201).json({msg: "Sukses Delete ..."});
      })
      .catch(err => {
        next(err);
      })
  }
}

module.exports = VendorController;