import { Router } from 'express'
const router = Router()

import * as exhibitController from '../controllers/exhibit.controller'
import {authJwt} from '../middlewares/index'

router.post('/', [authJwt.verifyToken, authJwt.isEditor], exhibitController.createExhibit)

router.get('/', exhibitController.getExhibits)

router.get('/:exhibitId', exhibitController.getExhibitById)
router.put('/:exhibitId', [authJwt.verifyToken, authJwt.isEditor], exhibitController.updateExhibitById)
router.delete('/:exhibitId', [authJwt.verifyToken, authJwt.isEditor], exhibitController.deleteExhibitById)

export default router