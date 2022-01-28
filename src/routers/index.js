import StudController from '../controllers/stud_controller';

import express from 'express';

const router = express.Router()

import multer from 'multer';
import path from 'path';

var studStorage = multer.diskStorage(
    {    	
    	destination : path.join(__dirname, '../../public/stud'),
        filename: function ( req, file, cb ) {
        	cb( null,  Date.now() + path.extname(file.originalname));
        }
    }
);
const studUpload = multer({storage: studStorage, fileFilter: function (req, file, cb) {
	var filetypes = /jpeg|jpg|png/;
	var mimetype = filetypes.test(file.mimetype);
	var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	if (mimetype && extname) {
	  return cb(null, true);
	}
	cb("Error: File upload only supports the following filetypes - " + filetypes);
}});



router.route('/stud')
    .get(StudController.getStud)
    .post(studUpload.single("image"),StudController.postStud)
    .put(studUpload.single("image"),StudController.putStud)

router.route('/stud/:id')
    .delete(StudController.deleteStud)
    .get(StudController.findByIdStud)
export default router;