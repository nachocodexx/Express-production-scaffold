'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../controllers/api');

var Router = require('express').Router();


Router.get('/test', _api.testController);

exports.default = Router;
//# sourceMappingURL=api.js.map