const { Order, Menu } = require('../models');

class OrderController{

  static getData(req, res, next) {
    Order.findAll({
      include: {
        model: Menu
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static getDataById(req, res, next) {
    const idOrder = +req.params.id;

    Order.findOne({
      where: {
        'id': idOrder
      }
    }, {
      include: {
        model: Menu
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async addOrder(req, res, next) {
    const { MenuId, jumlah, tambahan } = req.body;

    try {
      const menu = await Menu.findOne({
        where: {
          "id": MenuId
        }
      })
      console.log(menu, "ini menu");

      if(!menu){
        throw {
          name: "InvalidMenu"
        }
      } else {
        Order.create({
          MenuId,
          jumlah,
          tambahan
        })
          .then(data => {
            res.status(201).json(data);
          })
          .catch(err => {
            throw err;
          })
      }
    } catch (error) {
      next(error)
    }
  }

  static async editOrder(req, res, next) {
    const idOrder = +req.params.id;
    const {
      MenuId,
      jumlah,
      tambahan
    } = req.body;

    try {
      const order = await Order.findOne({
        where: {
          'id': idOrder
        }
      })

      if(!order){
        throw {
          name: 'NotFound'
        }
      } else {
        const edit = await Order.update({
          MenuId,
          jumlah,
          tambahan
        },{
          where: {
            'id': idOrder
          }
        })

        res.status(200).json({
          msg: "Sukses Update ..."
        })
      }
    } catch (error) {
      next(error)
    }
  }

  static deleteOrder(req, res, next) {
    const idOrder = +req.params.id;

    Order.destroy({
      where: {
        'id': idOrder
      }
    })
      .then(data => {
        res.status(200).json({msg: "Sukses delete order ..."})
      })
      .catch(err => {
        next(err);
      })
  }

  
}

module.exports = OrderController;