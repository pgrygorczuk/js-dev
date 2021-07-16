'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Users extends Model{

        static associate(models){
            this.hasMany(models.Ads);
        }

    }

    Users.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'Users',
    });

    return Users;
};
