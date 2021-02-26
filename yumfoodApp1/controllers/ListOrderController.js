const { ListOrder, Order, Customer } = require('../models');

class ListOrderController{

  static getData(req, res, next){
    ListOrder.findAll({
      include: [{
        model: Order
      },{
        model: Customer
      }]
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static getDataByOrder(req, res, next) {
    const idOrder = +req.params.id;
    listOrder.findAll({
      where: {
        OrderId: idOrder
      }
    },{
      include: [{
        model: Customer
      }]
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static getDataByCustomer(req, res, next) {
    const idCustomer = +req.params.id;
    listOrder.findAll({
      where: {
        OrderId: idCustomer
      }
    },{
      include: [{
        model: Order
      }]
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static async addListOrder(req, res, next) {
    const { 
      OrderId,
      CustomerId 
    } = req.body;

    try {
      const order = await Order.findOne({
        where: {
          'id': OrderId
        }
      })

      const customer = await Customer.findOne({
        where: {
          'id': CustomerId
        }
      })

      if(!order){
        throw {
          name: "InvalidIdOrder"
        }
      } else if(!customer) {
        throw {
          name: "InvalidIdOrder"
        }
      } else {
        const listOrder = await ListOrder.create({
          OrderId,
          CustomerId
        })
      
        res.status(200).json({
          msg: "Sukses Create List Order ..."
        })
      }
    } catch (error) {
      next(error)
    }
  }

  static async deleteListOrder(req, res, next) {
    const idList = +req.params.id;

    try {
      const dataList = ListOrder.findOne({
        where: {
          'id': idList
        }
      })

      if(!dataList){
        throw {
          name: "invalidIdList"
        }
      } else {
        ListOrder.destroy({
          where: {
            'id': idList
          }
        })
          .then(data => {
            res.status(200).json({
              msg: "Sukses Delete List Order ...."
            })
          })
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ListOrderController;