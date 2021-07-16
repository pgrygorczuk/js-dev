'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Categories extends Model{

        static associate(models){
            this.belongsToMany(models.Ads, { through: 'ads_categories' });
        }

    }

    Categories.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        sequelize,
        tableName: 'categories',
        modelName: 'Categories',
    });

    return Categories;
};
