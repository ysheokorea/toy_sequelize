const Sequelize = require('sequelize');

module.exports = class Urls extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            url : {
                type : Sequelize.STRING(255),
                allowNull : true,
                defaultValue : null,
                
            },
            title:{
                type : Sequelize.STRING(255),
                allowNull : true,
                defaultValue : null,
            },
            visits:{
                type : Sequelize.INTEGER,
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
            },

        },{
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'Urls',
            tableName : 'urls',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
            
        })
    }
    static associate(db){
        db.Urls.belongsTo(db.Users, { foreignKey : 'owner', sourceKey : 'id' })
    }
}