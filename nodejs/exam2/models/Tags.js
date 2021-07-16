'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Tags extends Model{

        static associate(models){
            this.belongsToMany(models.Ads, { through: 'ads_tags' });
        }

    }

    Tags.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        sequelize,
        tableName: 'tags',
        modelName: 'Tags',
    });

    return Tags;
};
