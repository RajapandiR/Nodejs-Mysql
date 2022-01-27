import StudController from '../controllers/stud_controller';

import express from 'express';

const router = express.Router()

router.route('/stud')
    .get(StudController.getStud)
    .post(StudController.postStud)
    .put(StudController.putStud)

router.route('/stud/:id')
    .delete(StudController.deleteStud)
    .get(StudController.findByIdStud)
export default router;