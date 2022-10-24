module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const userInformationController = require('../controller/user-information.controller');

    router.post('/', userInformationController.create);
    router.get('/', userInformationController.findAll);
    router.put('/', userInformationController.update);
    router.delete('/:id', userInformationController.delete)
    app.use('/api/user/info', router)
}