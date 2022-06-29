import express from 'express'
import technologyController from '../controllers/SuperAdmin/TechnologyController';
const router = express.Router();


//public route

router.post('/technology/post',technologyController.post)
router.get('/technology/getall',technologyController.get)
router.delete('/technology/delete/:id',technologyController.delete)


export default router