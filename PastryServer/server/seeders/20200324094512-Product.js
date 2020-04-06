'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
            name: "Red Velvet",
            description: "Crimson or Scarlet colored chocolate layer cake, layered with white cream cheese or ermine icing",
            price: 700.00,
            image: Buffer.from("/assets/red-velvet.jpg"),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          name: "Black Forest Gateau",
          description: "Chocolate sponge cake sandwiched with whipped cream and rich cherry filling",
          price: 580.00,
          image: Buffer.from("/assets/black-forest.jpg"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Butterscotch Delight",
          description: "Soft and moist cake with layers of buttterscotch flavoured whipped cream and butterscotch chips",
          price: 550.00,
          image: Buffer.from("/assets/butterscotch.jpg"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chocolate Truffle",
          description: "Chocolate ganache centre coated in chocolate, cocoa powder or chopped toasted nut",
          price: 699.00,
          image: Buffer.from("/assets/chocolate-truffle.jpg"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Heavenly Kiwi",
          description: "Aromatic and moist cake with exotic fruits",
          price: 799.00,
          image: Buffer.from("/assets/kiwi.jpg"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chocolicious Coffee",
          description: "Dense, but moist, buttery cake with a layer of sweet cinnamon filling baked in the middle",
          price: 650.00,
          image: Buffer.from("/assets/coffee.jpg"),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )},

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {})
  }
};
