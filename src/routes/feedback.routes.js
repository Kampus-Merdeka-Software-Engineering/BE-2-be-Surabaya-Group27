module.exports = function (app) {
    const express = require('express');
    const router = express.Router();
    const categories = require('../controllers/feedback.controller');


   
    router.post('/feedback', feedbackController.saveFeedback);
   

    app.use('/api/feedback', router);
}