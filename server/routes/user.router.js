module.exports = app => {

    const userController = require('../controller/user.controller');
    const router = require("express").Router();

    router.get("/", userController.welcome);
    router.post('/create', userController.createUser);
    router.get('/list', userController.findAll);
    router.get('/:id/get', userController.findOne);
    app.use('/api/users', router)
}


