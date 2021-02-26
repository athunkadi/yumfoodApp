const { Menu, Vendor, Tag } = require('../models');

class MenuController{

  static getData(req, res, next) {
    Menu.findAll({ include: [{
      model: Vendor
    },
    {
      model: Tag
    }
  ] })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err, "ini error");
        next(err);
      })
  }

  static getDataById(req, res, next) {
    const idMenu = +req.params.id;

    Menu.findAll({
      where: {
        'id': idMenu
      }
    },{ include: [{
      model: Vendor
    },
    {
      model: Tag
    }
  ] })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async addMenu(req, res, next) {
    const { 
      name,
      VendorId,
      TagId,
      description,
      price
    } = req.body;

    try {
      const vendor = await Vendor.findOne({
        where: {'id': VendorId}
      });

      const tag = await Tag.findOne({
        where: {'id': TagId}
      });

      if(!vendor){
        throw {
          name: "InvalidID"
        };
      } else if(!tag){
        throw {
          name: "InvalidID"
        };
      } else {
        Menu.create({
          name,
          VendorId,
          TagId,
          description,
          price
        })
          .then(data => {
            res.status(201).json(data);
          })
          .catch(err => {
            throw {err};
          }) 
      }
    } catch (error) {
      next(error);
    } 
  }

  static getDatabyVendor(req, res, next) {
    const idVendor = +req.params.id;

    Menu.findAll({where: {
      VendorId: idVendor
    }, include: [{
      model: Tag
    }]})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err);
      })
  }

  static getDataByTag(req, res, next) {
    const idTag = +req.params.id;

    Menu.findAll({where: {
      TagId: idTag
    }, include: [{
      model: Vendor
    }]})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async editMenu(req, res, next) {
    const idMenu = +req.params.id;
    const { 
      name,
      VendorId,
      TagId,
      description,
      price
    } = req.body;

    try {
      const vendor = await Vendor.findOne({
        where: {'id': VendorId}
      });

      const tag = await Tag.findOne({
        where: {'id': TagId}
      });

      const menu = await Menu.findOne({
        where: {'id': idMenu}
      })

      if(!vendor){
        throw {
          name: "InvalidID"
        };
      } else if(!tag){
        throw {
          name: "InvalidID"
        };
      } else if(!menu){
        throw {
          name: "InvalidIDmenu"
        };
      } else {
        Menu.update({
          name,
          VendorId,
          TagId,
          description,
          price
        }, {
          where: {
            'id': idMenu
          }
        })
          .then(data => {
            res.status(201).json(data);
          })
          .catch(err => {
            throw {err};
          }) 
      }
    } catch (error) {
      next(error);
    } 
  }

  static deleteMenu(req, res, next) {
    const idMenu = +req.params.id;

    Menu.destroy({where: {
      'id': idMenu
    }})
      .then(data => {
        res.status(200).json({msg: "Sukses Delete Menu"});
      })
      .catch(err => {
        next(err);
      })
  }

}

module.exports = MenuController;