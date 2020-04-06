const Product = require('../models').Product;
const Favorite = require('../models').Favorite;
const Sequelize = require('sequelize')

// const Op = Sequelize.Op;

exports.list = (req, res) => {
        return Product
        .findAll({
            where: {
                name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + req.query.searchName.toLowerCase() + '%')
            },
            order: [
                [req.query.columnToSort, 'ASC']
            ],
            //where :{
            //     name: {
            //         [Op.like]: `%`+req.query.searchName+`%`
            //     }
            // }
        })
        .then(products => res.json({products}))
        .catch(error => res.status(400).send(error));
    }

exports.saveFavoritePastry = (req, res) => {
    let userId = req.body.userId;
    let productId = req.body.productId;

    Favorite.create({
        userId,
        productId
    })
    .then(()=>{
        res.json({productId: productId,
        isFavorite: true})
    })
    .catch(error=>{
        res.status(400).send(error);
    })
}

exports.removeFavoritePastry = (req, res) => {
    let userId = req.body.userId;
    let productId = req.body.productId;

    Favorite.destroy({
        where:{
            productId: productId,
            userId: userId
        }
    })
    .then(()=>{
        res.json({productId: productId,
            isFavorite: false})
    })
    .catch(error=>{
        res.status(400).send(error);
    })
}

exports.getUserFavorites = (req,res) => {
    const userId = req.params.id;
    Favorite.findAll({
        where: {
            userId: userId
        }
    }).then((fav)=>{
        productArray = [... new Set(fav.map(x => x.productId))];
        res.json(productArray);
    })
    .catch(error=>{
        res.status(400).send(error);
    })
}

exports.getProductDetails = (req,res) => {
    const productId= req.params.id;
    Product.findByPk(productId)
    .then((product)=>{
        res.json(product);
    })
    .catch(error=>{
        res.status(400).send(error);
    })
}