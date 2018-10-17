const informationPersonCtrl = require('../../controlles/informationPerson');

module.exports.GET = (req, res) => informationPersonCtrl.getAll(req, res)
module.exports.POST = (req, res) => informationPersonCtrl.Save(req, res)