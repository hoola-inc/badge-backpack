const TestController = require('../models/test-badge.model');


exports.create = async (req, res) => {
    try {
        const newTest = await TestController.create(req.body);

        if (newTest) {
            return res.status(200).send({
                success: true,
                data: newTest
            });
        }
    } catch (err) {
        return res.status(200).send({
            success: false,
            message: err.message
        });
    }
}