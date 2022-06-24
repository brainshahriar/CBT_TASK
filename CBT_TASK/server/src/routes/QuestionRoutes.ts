import express from 'express'
import questionController from '../controllers/QuestionController';
const router = express.Router();


//public route

router.post('/post',questionController.questionPost)
router.get('/getall',questionController.gellAllQuestion)
router.get('/getbyid/:id',questionController.getbyid)




export default router