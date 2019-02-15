const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/plantr', {
    logging: false
});

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
})

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'planting'});
Plot.belongsToMany(Vegetable, {through: 'planting'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})


module.exports = {
    db,
    Plot,
    Vegetable,
    Gardener
};
