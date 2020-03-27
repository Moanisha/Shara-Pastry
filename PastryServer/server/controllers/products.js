const Product = require('../models').Product;
const Sequelize = require('sequelize')

const Op = Sequelize.Op;

module.exports = {
    list(req, res) {
        return Product
        .findAll({
            where: {
                name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + req.query.searchName.toLowerCase() + '%')
            }
            //where :{
            //     name: {
            //         [Op.like]: `%`+req.query.searchName+`%`
            //     }
            // }
        })
        .then(products => res.json({products}))
        .catch(error => res.status(400).send(error));
    }
};