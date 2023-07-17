// import { Router } from "express";
// const router = Router();

// /** import controllers */
// import * as controller from '../controllers/controller.js';

// /** Questions Routes API */

// router.route('/questions')
//         .get(controller.getQuestions) /** GET Request */
//         .post(controller.insertQuestions) /** POST Request */
//         .delete(controller.dropQuestions) /** DELETE Request */

// router.route('/result')
//         .get(controller.getResult)
//         .post(controller.storeResult)
//         .delete(controller.dropResult)

// export default router;

const express = require('express');
const controller = require('../controllers/controller.js');

const router = express.Router();

router.get('/questions', controller.getQuestions);
router.post('/questions', controller.insertQuestions);
router.delete('/questions', controller.dropQuestions);

router.get('/result', controller.getResult);
router.post('/result', controller.storeResult);
router.delete('/result', controller.dropResult);

module.exports = router;
