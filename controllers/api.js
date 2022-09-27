'use strict';

let {Sequelize, sequelize} = require('../service/db');

exports.creator = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        let user = await db.sequelize.query(
            'SELECT * FROM creator b\n' +
            'WHERE id=$1\n',
            { bind: [creatorId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};
exports.creator = async (req, res) => {
  try {
      const creatorId = req.query.creator_id;
      let user = await db.sequelize.query(
          'SELECT * FROM creator b\n' +
          'WHERE id=$1\n',
          { bind: [creatorId], type: 'RAW' },
      );
      res.send(user[0]);
  } catch (err) {
      console.log("Error is User: " + err);
      res.sendStatus(400);
  }
};

/*
    TODO implement new endpoints here
 */
exports.campaigns = async (req, res) => {
  try {
      const campaignId = req.query.campaigns_id;
      let campaign = await db.sequelize.query(
          'SELECT * FROM campaigns  b\n' +
          'WHERE id=$1\n',
          { bind: [campaignId], type: 'RAW' },
      );
      res.send(campaign[0]);
  } catch (err) {
      console.log("Error is User: " + err);
      res.sendStatus(400);
  }
};

