'use strict';

module.exports = function(sequelize, DataTypes) {
  var Campaigns = sequelize.define(
    'Campaign',
    {
      campaign_name: { type: DataTypes.STRING },
      campaign_icon_url: { type: DataTypes.STRING },
      media_url: { type: DataTypes.STRING },
      user_id: { type: DataTypes.INTEGER },
    },
        {
            tableName: 'campaigns',
        },
    );

    return Campaigns;
};
