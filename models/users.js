const Sequelize = require('sequelize');

module.exports = class Users extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            firstName : {
                type : Sequelize.STRING(255),
                allowNull : true,
                defaultValue : null,
            },
            lastName:{
                type : Sequelize.STRING(255),
                allowNull : true,
                defaultValue : null,
            },
            email:{
                type : Sequelize.STRING(255),
                allowNull : true,
                defaultValue : null,
            },
            createdAt : {
                type : Sequelize.DATE,
                allowNull : true,
                defaultValue : null,
            },
            updatedAt : {
                type : Sequelize.DATE,
                allowNull : true,
                defaultValue : null,
            }
        },{
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'Users',
            tableName : 'users',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        })
    }
    static associate(db){
        db.Users.hasMany(db.Urls, {
          foreignKey: 'owner', 
          sourceKey: 'id', 
        });
    }
}

