'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Ads extends Model{

        static associate(models){
            this.belongsToMany(models.Categories, { through: 'ads_categories' });
            this.belongsToMany(models.Tags, { through: 'ads_tags' });
            this.belongsTo(models.Users, { foreignKey: 'user_id' });
        }

        static async checkPerms(userId, recordId){
            if(!userId) return false;
            const item = await this.findByPk(recordId);
            return item && item.get('user_id') === userId;
        }

    }

    Ads.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
            validate: { min: 0 },
        },
        image: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        tableName: 'ads',
        modelName: 'Ads',
    });

    return Ads;
};
