const { Op } = require('sequelize'); 
const { product } = require("../db")

const getByNameProduct = async (name, page, size)=>{

    
    //Buscamos en la base de datos los productos con esa cadena de string y me los trae paginado x6
    const productDB = await product?.findAndCountAll({
        where: { name:{ [Op.iLike]: `%${name}%` }},
        attributes:[ "id", "img", "name", "stock", "description", "price", "isOnSale", "salePrice", "status", "deleteLogic" ],
        limit: size,
        offset: page * size
    })

    return productDB;
}

module.exports = getByNameProduct;