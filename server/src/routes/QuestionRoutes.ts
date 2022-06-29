import express from 'express'
import questionController from '../controllers/QuestionController';
const router = express.Router();


//public route

router.post('/post',questionController.questionPost)
router.get('/getall',questionController.gellAllQuestion)
router.get('/getall/:id',questionController.getByid)
router.put('/update/:id',questionController.update)
router.delete('/delete/:id',questionController.delete)


export default router