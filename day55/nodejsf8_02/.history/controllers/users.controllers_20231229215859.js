const userModel = require('../models/user.model');
const moment = require('moment');
module.exports = {
     index: async (req, res) => {
          let { status } = req.query;
          let statusBool;
          if (status === 'active' || status === 'inactive') {
               statusBool = status === 'active' ? true : false;
          }
          const users = await userModel.all(statusBool);
          res.render('users/index.ejs', { users, moment });
     }
}