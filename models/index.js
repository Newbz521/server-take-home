'use strict';

if (!global.hasOwnProperty('db')) {
    let {Sequelize, sequelize} = require('../service/db');

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Creator: require(__dirname + '/creator')(sequelize, Sequelize.DataTypes),
        Install: require(__dirname + '/install')(sequelize, Sequelize.DataTypes),
        Campaigns: require(__dirname + '/campaigns')(sequelize, Sequelize.DataTypes),
        /*
        *
        * TODO add any additional models here.
        *
        */
    };

    global.db.Creator.hasMany(global.db.Install, {
        onDelete: 'cascade',
        foreignKey: 'creator_id',
    });

    global.db.Install.belongsTo(global.db.Campaigns, {
        onDelete: 'cascade',
        foreignKey: 'creator_id',
    });
  
    global.db.Campaigns.hasMany(global.db.Creator, {
      onDelete: 'cascade',
      foreignKey: 'creator_id',
  });
    

    /*
    *
    * TODO add any additional relationships between models here.
    *
    */
}