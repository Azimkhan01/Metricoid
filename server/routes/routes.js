const { getData } = require('../controller/getData')

const Router = require('express').Router()
Router.route('/getData').get(getData)

module.exports = {Router}