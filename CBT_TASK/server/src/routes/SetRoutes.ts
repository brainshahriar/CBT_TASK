import express from 'express'

import setController from '../controllers/SetController';
import partialSetController from '../controllers/PartialSetController';
const router = express.Router();

router.post('/post',setController.post)
router.get('/getall',setController.get)

router.post('/partial/post',partialSetController.post)
router.get('/partial/getall',partialSetController.get)




export default router