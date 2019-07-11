module.exports = (app) => {
    const TestController = require('../controllers/test-badge.controller')
    app.post('/testing', TestController.create);

}