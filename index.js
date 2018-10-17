const { send } = require('micro')
const {db} = require('./config')
const mongoose = require('mongoose')
const microCors = require('micro-cors')
const cors = microCors({ origin: '*', allowHeaders: ['Access-Control-Allow-Origin', 'Content-Type', 'Authorization'] })
let match = require('fs-router')(__dirname + '/routes')

mongoose.connect(db,{ useNewUrlParser: true })

const handler = async function(req, res) {
  let matched = match(req)
  if (matched) return await matched(req, res)
  send(res, 404, { error: 'Not found' })
}

module.exports = cors(handler)
